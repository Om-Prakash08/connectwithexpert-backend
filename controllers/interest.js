const mentorModel = require('../models/mentor');


const getMentorsByInterest = async (req, res) => {
    const field= req.params.field;
    const Allmentors = await mentorModel.find({});
    const mentors=[] ;
    // console.log(field) 
    Allmentors.forEach((mentor)=>{
       if((mentor.interest)[field])
         {//console.log(mentor);
          mentors.push(mentor);
         }
    })
    res.status(200).json({
        mentors
    })
}

module.exports = {getMentorsByInterest} ;