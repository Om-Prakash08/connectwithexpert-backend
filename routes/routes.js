const express = require('express');
const Router = express.Router();

const {getAllMentors,getMentorById,registerSingleMentor,registerAllMentor} = require('../controllers/mentor') ;
const {getMentorsByInterest} = require('../controllers/interest')

Router.route('/allmentors').get(getAllMentors) ;
Router.route('/mentor/:id').get(getMentorById) ;
Router.route('/register/mentor').post(registerSingleMentor) ;
Router.route('/register/many/mentor').post(registerAllMentor) ;


Router.route('/interest/:field').get(getMentorsByInterest) ;


module.exports = Router;

//http://localhost:8000/api/allmentors
//http://localhost:8000/api/interest/dl
//http://localhost:8000/api/mentor/6208bc5f98cc722d9882a09f
//http://localhost:8000/api/register/mentor