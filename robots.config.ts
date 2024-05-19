export default [
  { UserAgent: "*" },
  { Allow: "/" },
  { BlankLine: true },
  { Comment: "Sitemap" },

  { Sitemap: (req: any) => `https://sarafat-portfolio.vercel.app/sitemap.xml` },
];
