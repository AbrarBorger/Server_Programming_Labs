const exp = require("constants");
const fs = require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  experience = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experience = JSON.parse(String(experience));

  language = fs.readFileSync("data/language", { encoding: "utf-8" });
  language = JSON.parse(String(language));
  console.log(experience);

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  expe = [];

  for (let key in experience) {
    expe.push(experience[key]);
  }

  lang = [];

  for (let key in language) {
    lang.push(language[key]);
  }

  res.render("cv", { name: "Tasnim Ahmed", educations: edus, experience: expe, language: lang });
};

module.exports = { getCV: getCV };
