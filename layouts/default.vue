<script setup></script>
<template>
  <div class="w-full h-screen">
    <TheHeader />
    <slot />
  </div>
</template>

<style>
:root {
  --bg-color: #081b29;
  --second-bg-color: #112e42;
  --text-color: #ededed;
  --main-color: #00abf0;
}
.fadeIn-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fadeIn-enter-active {
  transition: opacity 0.2s ease-in-out;
}
.fadeIn-enter-from,
.fadeIn-leave-to {
  @apply opacity-0;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
.navbar button:hover,
.navbar button.active {
  color: var(--main-color);
}
section {
  /* padding: 10rem 9% 2rem; */
}
.home-body {
  background: url("~/assets/img/Untitled design (5).png") no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10rem 9% 2rem;
}
.home-content {
  max-width: 60rem;
  z-index: 10;
}
.home-content h1 {
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
}
.home-content .text-animation {
  position: relative;
  width: 32.8rem;
}
.home-content .text-animation h3 {
  font-size: 3.55rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 0.7px var(--main-color);
  background-image: linear-gradient(var(--main-color), var(--main-color));
  background-repeat: no-repeat;
  background-position: -33rem 0;
  -webkit-background-clip: text;
  animation: homeBgText 6s linear infinite;
  animation-delay: 2s;
}
@keyframes homeBgText {
  0%,
  10%,
  100% {
    background-position: -33rem 0;
  }
  65%,
  85% {
    background-position: 0 0;
  }
}
.home-content .text-animation h3::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-right: 2px solid var(--main-color);
  z-index: -1;
  animation: homeCursorText 6s linear infinite;
  animation-delay: 2s;
}
@keyframes homeCursorText {
  0%,
  10%,
  100% {
    width: 0;
  }
  65%,
  78%,
  85% {
    width: 100%;
    opacity: 1;
  }
  75%,
  81%{
    opacity: 0;
  }
}
.home-content p {
  font-size: 1.6rem;
  margin: 2rem 0 4rem;
}
.btn-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 34.5rem;
  height: 5rem;
}
.btn-box .btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 100%;
  background-color: var(--main-color);
  border: 0.2rem solid var(--main-color);
  border-radius: 0.8rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  color: var(--bg-color);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
}
.btn-box .btn:hover {
  color: var(--main-color);
}
.btn-box .btn:nth-child(2) {
  background: transparent;
  color: var(--main-color);
}
.btn-box .btn:nth-child(2):hover {
  color: var(--bg-color);
}

.btn-box .btn:nth-child(2)::before {
  background: var(--main-color);
}
.btn-box .btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: var(--bg-color);
  z-index: -1;
  transition: 0.5s;
}
.btn-box .btn:hover::before {
  width: 100%;
}
.home-sci a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0.2rem solid var(--main-color);
  border-radius: 50%;
  font-size: 20px;
  color: var(--main-color);
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
}
.home-sci a:hover {
  color: var(--bg-color);
}
.home-sci a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: var(--main-color);
  width: 0;
  height: 100%;
  z-index: -1;
  transition: 0.5s;
}
.home-sci a:hover::before {
  width: 100%;
}
.bgImageHover {
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100%;
  background: transparent;
  transition: 3s;
  /* border: 0.3rem solid red; */
}
.bgImageHover:hover {
  background: var(--bg-color);
  opacity: 0.8;
}

/* About Me */
.heading {
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
}
.heading span {
  color: var(--main-color);
}
.about-content-body .about-img {
  position: relative;
  width: 25rem;
  height: 25rem;
  @apply rounded-full;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.about-content-body .about-img .imgae-circle {
  width: 90%;
  height: 90%;
  @apply rounded-full;
  border: 0.2rem solid var(--main-color);
  overflow: hidden;
}
.about-content-body .about-img .imgae-circle img {
  transform: translate(-10px, -25px);
}
.about-content-body .about-img .circle-spin {
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%) rotate(0); */
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: 0.2rem solid transparent;
  border-bottom: 0.2rem solid transparent;
  border-left: 0.2rem solid var(--main-color);
  border-right: 0.2rem solid var(--main-color);
  animation: rotateCircle 8s linear infinite;
  animation-fill-mode: forwards;
}
@keyframes rotateCircle {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.about-content-body .about-content {
  text-align: center;
}
.about-content h3 {
  font-size: 2.6rem;
  font-weight: 600;
}
.about-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}

/* Education */
.education {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: auto;
  padding-bottom: 5rem;
}
.education .education-row {
  display: flex;
  flex-wrap: wrap;
  @apply lg:space-x-20 lg:space-y-0 space-y-20;
}
.education-row .education-column {
  flex: 1 1 40rem;
}
.education-column .title {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 2rem;
  font-weight: 600;
}
.education-column .education-box {
  border-left: 0.2rem solid var(--main-color);
}
.education-column .education-box .education-content {
  position: relative;
  padding-left: 2rem;
}
.education-column .education-box .education-content::before {
  content: "";
  position: absolute;
  top: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--main-color);
  left: -1rem;
}
.education-content .content {
  position: relative;
  padding: 1.5rem;
  border: 0.2rem solid var(--main-color);
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  overflow: hidden;
  z-index: 1;
}
.education-content .content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  height: 100%;
  background: var(--second-bg-color);
  z-index: -1;
  transition: 0.5s;
}
.education-content .content:hover::before {
  width: 100%;
}
.education-content .content .year {
  font-size: 1.5rem;
  color: var(--main-color);
  padding-bottom: 0.5rem;
}
.education-content .content .year svg {
  padding-right: 0.5rem;
}
.education-content .content h3 {
  font-size: 2rem;
  font-weight: 600;
}
.education-content .content p {
  font-size: 1.6rem;
  padding-top: 0.5rem;
}
/* Skill section */

.skills .skills-row {
  display: flex;
  flex-wrap: wrap;
  @apply lg:space-x-20 lg:space-y-0 space-y-20;
}
.skills-row .skills-column {
  flex: 1 1 40rem;
}
.skills-column .title {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
}
.skills-box .skills-content {
  position: relative;
  border: 0.2rem solid var(--main-color);
  border-radius: 0.6rem;
  padding: 0.5rem 1.5rem;
  overflow: hidden;
  z-index: 1;
}
.skills-box .skills-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  height: 100%;
  background: var(--bg-color);
  z-index: -1;
  transition: 0.5s;
}
.skills-box .skills-content:hover::before {
  width: 100%;
}
.skills-content .progress {
  padding: 1rem 0;
}
.skills-content .progress h3 {
  font-size: 1.7rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}
.skills-content .progress h3 span {
  color: var(--text-color);
}
.skills-content .progress .bar {
  width: 100%;
  height: 2.5rem;
  border-radius: 0.6rem;
  border: 0.2rem solid var(--main-color);
  padding: 0.5rem;
  margin: 1rem 0;
  position: relative;
}
.skills-content .progress .bar span {
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  display: block;
  height: 100%;
  border-radius: 0.3rem;
  background: var(--main-color);
}
.contact form {
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
}

.contact form .input-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.contact form .input-box .input-field {
  position: relative;
  width: 49%;
  margin: 0.8rem 0;
}
.contact form .input-box .input-field input,
.contact form .textarea-field textarea {
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background: transparent;
  border-radius: 0.6rem;
  border: 0.2rem solid var(--main-color);
}
.contact form .input-box .input-field input:focus,
.contact form .textarea-field textarea:focus {
  outline: none;
}
.contact form .input-box .input-field input::placeholder,
.contact form .textarea-field textarea::placeholder {
  color: var(--text-color);
}
.contact form .focus {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: var(--second-bg-color);
  border-radius: 0.6rem;
  z-index: -1;
  transition: 0.5s;
}
.contact form .input-box .input-field input:focus ~ .focus,
.contact form .input-box .input-field input:valid ~ .focus,
.contact form .textarea-field textarea:focus ~ .focus,
.contact form .textarea-field textarea:valid ~ .focus {
  width: 100%;
}
.contact form .textarea-field textarea {
  position: relative;
  margin: 0.8rem 0 2.7rem;
  display: flex;
}
.contact form .textarea-field textarea {
  resize: none;
}
.text-active.active{
  color: var(--main-color);
}
@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}
@media (max-width: 991px) {
  header {
    padding: 2rem 4rem !important;
  }
  /* section{
    padding: 10rem 4% 2rem;
  } */
  .home-body,
  .about-body,
  .education-body,
  .skills-body,
  .contact-body {
    padding: 10rem 4rem 2rem !important;
  }
  .about-body,
  .education-body,
  .skills-body,
  .contact-body {
    padding-top: 0px !important;
  }
}
@media (max-width: 1023px) {
  header {
    background: var(--bg-color) !important;
    position: relative;
    padding: 2rem 4rem !important;
  }
  .navbar {
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    padding: 3rem 4rem;
    background: var(--main-color);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    z-index: 2;
    transition: 0.25s ease;
    transition-delay: 0.25s;
  }
  .navbar.active {
    left: 0 !important;
    transition-delay: 0s !important;
  }
  .navbar .active-nav {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    margin-top: 0px !important;
    transition: 0.25s ease;
    transition-delay: 0s;
  }
  .navbar.active .active-nav {
    transition-delay: 0.25s;
    left: 0%;
  }
  .navbar {
    flex-direction: column !important;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2rem !important;
    /* margin: 3rem 0 !important; */
    @apply space-x-0 space-y-12;
  }
  .navbar button {
    z-index: 1;
    transform: translateX(-20rem);
    transition: 0.25s ease;
    transition-delay: 0s;
  }
  .navbar.active button {
    transition-delay: 0.25s;
    transform: translateX(0rem);
  }
  .bgImageHover {
    pointer-events: none;
    background: var(--bg-color);
    opacity: 0.6;
  }
}
@media (max-width: 520px) {
  html {
    font-size: 50%;
  }
  .home-content h1 {
    display: flex;
    flex-direction: column;
  }
  .home-sci {
    width: 160px;
  }
  .home-sci a {
    width: 38px;
    height: 38px;
  }
}
@media (max-width: 462px) {
  .home-content h1 {
    font-size: 5.2rem;
  }
}
</style>
