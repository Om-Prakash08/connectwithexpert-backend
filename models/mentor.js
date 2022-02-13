const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        unique: true ,
        trim : true
    },
    email : {
        type : String,
        required: [true, 'e-mail is required'],
        // unique : [true, 'Given user already exists'],
       // trim : true,
        // validate: {
        //     validator: function(input) {
        //         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
        //     },
        //     message: "Please enter a valid email"
        // }
    },
    description :{
        type : String,
        required :false ,
        default : "I am mentor"
    },
    phone :{
        type : Number ,
        required : true ,
    },
    imgSrc :{
        type : String ,
        required : true ,
    },
    interest :{
        web :{
            type : Boolean ,
            required :true
        },
        app :{
            type : Boolean ,
            required :true
        },
        ml :{
            type : Boolean ,
            required :true
        },
        dl :{
            type : Boolean ,
            required :true
        },
        cp :{
            type : Boolean ,
            required :true
        }
    }
})

// mentorSchema.pre(/^find/, async function(next) {
//     this.populate({
//         path: 'Participants.participant',
//         select: '-Teams -Pending_Requests -Events_Participated -__v -Total_Score'
//     })
//     this.populate({
//         path: 'Teams.team',
//         select: '-Events_Participated -Pending_Requests -__v'
//     })
//     next();
// })

const Event = mongoose.model('mentor', mentorSchema);
module.exports = Event;