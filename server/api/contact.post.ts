import nodemailer from "nodemailer";
import { google } from "googleapis";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { fullName, emailAddress, mobileNumber, emailSubject, message } = body;

  const config = useRuntimeConfig();
  const CLIENT_ID = config.client_id;
  const CLIENT_SECRET = config.client_secret;
  const REDIRECT_URI = config.redirect_uri;
  const REFRESH_TOKEN = config.refresh_token;

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    console.log(accessToken, 'accessToken')

    if (!accessToken.token) {
      throw new Error("Failed to retrieve access token");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        type: "OAuth2",
        user: config.email,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token, // Use accessToken.token directly
      },
    } as SMTPTransport.Options);

    const mailOptions = {
      // from: `${fullName} <${config.email}>`,
      from: {
        name: fullName,
        address: config.email,
      },
      to: config.email,
      subject: emailSubject || "Contact Form Submission",
      text: `
        Name: ${fullName}
        Email: ${emailAddress}
        Mobile: ${mobileNumber}
        Message: ${message}
       `,
      replyTo: emailAddress, // user's email from the form input
    };

    await transporter.sendMail(mailOptions);
    return { status: "success", message: "Email sent successfully" };
  } catch (error) {
    return { status: "error", message: "Failed to send email", error };
  }
});