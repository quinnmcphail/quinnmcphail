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
  handle: chalk.blue("quinnmcphail"),
  work: chalk.white("Salesforce Contract Consultant @ CleanSlate"),
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

const output = `${data.name} / ${data.handle}\n\n
${data.labelWork} ${data.work}\n
${data.labelTwitter} ${data.twitter}\n
${data.labelGitHub} ${data.github}\n
${data.labelLinkedIn} ${data.linkedin}\n
${data.labelTrailhead} ${data.trailhead}\n
${data.labelCard} ${data.npx}
`;

console.info(chalk.red(boxen(output, options)));
