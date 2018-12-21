"use strict";

const boxen = require("boxen");
const chalk = require("chalk");

const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

const data = {
  name: chalk.white("Quinn McPhail"),
  student: chalk.white("CIT Undergrad - Web Dev"),
  studentGroup: chalk.white("Salesforce Student Group Leader"),
  school: chalk.blue("IUPUI"),
  handle: chalk.blue("quinnmcphail"),
  workTitle: chalk.white("Salesforce Contract Consultant"),
  workLocation: chalk.blue("CleanSlate"),
  twitter: chalk.blue("https://twitter.com/quinnmcphail"),
  github: chalk.blue("https://github.com/quinnmcphail"),
  linkedin: chalk.blue("https://linkedin.com/in/quinnmcphail"),
  trailhead: chalk.blue("https://trailhead.com/me/quinnmcphail"),
  npx: chalk.white("npx quinnmcphail"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelTrailhead: chalk.white.bold(" Trailhead:"),
  labelCard: chalk.white.bold("      Card:")
};

const output = `${data.name} / ${data.handle}
${data.student} @ ${data.school}
${data.studentGroup} @ ${data.school}

${data.labelWork} ${data.workTitle} @ ${data.workLocation}
${data.labelTwitter} ${data.twitter}
${data.labelGitHub} ${data.github}
${data.labelLinkedIn} ${data.linkedin}
${data.labelTrailhead} ${data.trailhead}

${data.labelCard} ${data.npx}
`;

console.info(chalk.red(boxen(output, options)));
