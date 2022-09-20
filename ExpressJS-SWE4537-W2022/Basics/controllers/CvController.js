const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  experience = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experience = JSON.parse(String(experience));
  
  exp = [];

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  for (let key in experience) {
    edus.push(experience[key]);
  }


  res.render("cv", { name: "Tasnim Ahmed", educations: edus, experience: exp});
};

module.exports = { getCV: getCV };
