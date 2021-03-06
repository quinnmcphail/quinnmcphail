#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

const headerOptions = {
  align: "center",
  borderColor: "blue",
  borderStyle: "round",
  margin: 1,
  padding: 1
};

const data = {
  name: chalk.white("Quinn McPhail"),
  student: chalk.white("CIT Undergrad - Web Dev"),
  studentGroup: chalk.white("Salesforce Student Group Leader"),
  school: chalk.blue("IUPUI"),
  handle: chalk.blue("quinnmcphail"),
  workTitle: chalk.white("Frontend Developer"),
  workLocation: chalk.blue("7Summits"),
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

const header = `${data.name} / ${data.handle}
${data.student} @ ${data.school}
${data.studentGroup} @ ${data.school}`;

const output = `${boxen(header, headerOptions)}

${data.labelWork} ${data.workTitle} @ ${data.workLocation}
${data.labelTwitter} ${data.twitter}
${data.labelGitHub} ${data.github}
${data.labelLinkedIn} ${data.linkedin}
${data.labelTrailhead} ${data.trailhead}

${data.labelCard} ${data.npx}
`;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.red(boxen(output, options))
);
