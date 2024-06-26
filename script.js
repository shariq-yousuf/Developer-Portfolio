const links = document.querySelectorAll(
  "#home-link, #my-projects-link, #my-skills-link, #about-link, #contact-link, #back-to-top"
);
const backToTopBtn = document.getElementById("back-to-top");
const myProjectsContainer = document.getElementById("my-projects-container");
const mySkillsContainer = document.getElementById("my-skills-container");
const contactDiv = document.getElementById("social-links");
const burgerIcon = document.getElementById("burger-icon");
const burgerMenuContent = document.getElementById("burger-menu-content");

const projects = [
  {
    id: 1,
    title: "Digital Clock",
    description:
      "Stay on time, anywhere! Simple, clean digital clock. Always accurate. Check it out!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/v1718194146/src%20for%20portfolio%20website/clock.png",
    liveUrl: "./Projects/Digital-Clock/clock.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Digital-Clock",
  },
  {
    id: 2,
    title: "Secret Chat",
    description:
      "Send secret messages with a fun twist! Secret Chat lets you encrypt messages.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/v1718191950/src%20for%20portfolio%20website/secret-chat.png",
    liveUrl: "https://shariq-yousuf.github.io/Secret-Chat/",
    githubLink: "https://github.com/shariq-yousuf/Secret-Chat",
  },
  {
    id: 3,
    title: "TicTacToe",
    description:
      "Classic Tic Tac Toe with two modes. Play with friends or AI, first to three in a row wins!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/tictactoe",
    liveUrl: "https://shariq-yousuf.github.io/TicTacToe/",
    githubLink: "https://github.com/shariq-yousuf/TicTacToe",
  },
  {
    id: 4,
    title: "Palindrome Checker",
    description:
      "Enter any text & see if it reads the same backwards. Discover hidden palindromes!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/Palindrome%20Checker",
    liveUrl: "./Projects/Palindrome-Checker/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Palindrome-Checker",
  },
  {
    id: 5,
    title: "Lucky Draw",
    description:
      "Lucky Draw picks winners for giveaways FAST. Enter names, spin, & see who wins!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/lucky-draw",
    liveUrl: "./Projects/Lucky-Draw/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Lucky-Draw",
  },
  {
    id: 6,
    title: "Word Counter",
    description:
      "Analyze words, characters, & more. Count pronouns, estimate readability, find longest word.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/word-counter",
    liveUrl: "./Projects/Word-Counter/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Word-Counter",
  },
  {
    id: 7,
    title: "Roman Numeral Converter",
    description: "Convert decimal numbers (1-3999) to classic Roman numerals.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/roman-numerals-converter",
    liveUrl: "./Projects/Roman-Numeral-Converter/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Roman-Numeral-Converter",
  },
  {
    id: 8,
    title: "Quiz App",
    description:
      "Test your knowledge! Answer Qs on science, history, nature & more.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/quiz-app",
    liveUrl: "./Projects/Quiz-App/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Quiz-App",
  },
];

const skills = [
  {
    id: 1,
    title: "HTML5",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/html",
  },
  {
    id: 2,
    title: "CSS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/css",
  },
  {
    id: 3,
    title: "Bootstrap 5",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/bootstrap",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/tailwind-css",
  },
  {
    id: 5,
    title: "Accessibility",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/Accessibility",
  },
  {
    id: 6,
    title: "SASS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/sass-icon",
  },
  {
    id: 7,
    title: "JavaScript",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/js",
  },
  {
    id: 8,
    title: "Git",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/git",
  },
  {
    id: 9,
    title: "GitHub",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/v1718268748/src%20for%20portfolio%20website/skills%20icons/github.svg",
  },
];

const socialLinks = [
  {
    id: 1,
    platform: "Github",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/github",
    url: "https://github.com/shariq-yousuf",
  },
  {
    id: 2,
    platform: "LinkedIn",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/LinkedIn",
    url: "#",
  },
  {
    id: 3,
    platform: "Gmail",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/Gmail-icon",
    url: "mailto:shariqyousuf01@gmail.com",
  },
  {
    id: 4,
    platform: "freeCodeCamp",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/freeCodeCamp-icon",
    url: "https://www.freecodecamp.org/shariq-yousuf",
  },
];

projects.push({
  id: projects.length + 1,
  title: "Coming Soon...",
  description:
    "Web just got more awesome. Our next project is cooking up. What could it be?",
  imgSrc:
    "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/coming%20soon",
  liveUrl: "./Projects/Coming-Soon/coming-soon.html",
  githubLink:
    "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Coming-Soon",
});

// PUSH NEW PROJECT ABOVE THIS LINE

// navbar, prevent default behavior and scroll to section without updating url
links.forEach((link) => link.addEventListener("click", scrollIntoSection));

function scrollIntoSection(event) {
  event.preventDefault();

  const targetElementId = this.getAttribute("href").slice(1);
  const targetElement = document.getElementById(targetElementId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}

// back to top btn appearance
window.onscroll = function () {
  const threshold = innerHeight - 150;

  if (window.scrollY >= threshold) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// add projects
const projectsInReverseOrder = projects.reverse();

for (const project of projectsInReverseOrder) {
  const projectCard = document.createElement("div");
  projectCard.id = `project-${project.id}`;
  projectCard.className = "card";

  projectCard.innerHTML = `
  <img src="${project.imgSrc}" alt="${project.title}"/>
  <h2>${project.title}</h2>
  <p>${project.description}</p>
  <div class="link-container">
  <a class="live-link" href="${project.liveUrl}"><i class="material-symbols-outlined live-icon"> visibility</i> Live</a>
  <a class="github-link" href="${project.githubLink}">Github</a>
  </div>`;

  myProjectsContainer.appendChild(projectCard);
}

// add skills
const skillsInReverseOrder = skills.reverse();

for (const skill of skillsInReverseOrder) {
  const bgEl = document.createElement("div");
  bgEl.className = "bg";
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", skill.icon);
  imgEl.setAttribute("alt", skill.title);
  bgEl.appendChild(imgEl);
  mySkillsContainer.appendChild(bgEl);
}

// add social links
socialLinks.forEach((link) => {
  const linkHtml = `
   <a href="${link.url}">
   <div class="link" title="${link.platform}"><img src="${link.icon}" alt="${link.platform}"></div>
   </a>
  `;

  contactDiv.innerHTML += linkHtml;
});

// add burger menu for small screen
burgerIcon.addEventListener("click", () => {
  if (burgerIcon.innerHTML === "menu") {
    burgerIcon.innerHTML = "close";
  } else {
    burgerIcon.innerHTML = "menu";
  }

  burgerMenuContent.classList.toggle("hidden");
});
