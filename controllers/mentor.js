const mentorModel = require("../models/mentor");

const getMentorById = async (req, res) => {
  const mentor = await mentorModel.findById(req.params.id);
  res.status(200).json({
    mentor,
  });
};

const getAllMentors = async (req, res) => {
  const mentors = await mentorModel.find({});
  res.status(200).json({
    mentors,
  });
};

const registerSingleMentor = async (req, res) => {
  console.log("registerSingleMentor", req.body);
  await mentorModel.create(req.body);
  try {
    console.log(`Added user ${req.body.name}`);
  } catch (error) {
    console.log("error");
  }
  res.send("Success");
};

const registerAllMentor = async (req, res) => {
  let mentors = req.body;
  mentors.forEach(async (mentor) => {
    await mentorModel.create(mentor);
    try {
      console.log(`Added user ${mentor.name}`);
    } catch (error) {
      console.log("error");
    }
  });
  res.send("Success");
};

module.exports = {
  getAllMentors,
  getMentorById,
  registerSingleMentor,
  registerAllMentor,
};
