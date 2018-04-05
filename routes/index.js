var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var projectList = [
	  {
	    	title: "Portfolio",
	    	imageName: "portfolio.jpg",
	    	category: "Web Development",
	    	languages: ["JavaScript", "HTML", "CSS", "jQuery", "Node.js", "Pug"],
	    	description: "Created a portfolio to showcase all the projects I have worked on.",
	    	semester: 6,
	    	gitLink: ""

		},

		{
	    	title: "AthleticLinks",
	    	imageName: "athleticlinks.jpg",
	    	category: "Mobile Development",
	    	languages: ["Java", "Google Firebase", "XML"],
	    	description: "Created an Android based mobile application using Java for the backend, Google Firebase for the no-sql database, and xml to structure the views. I also used Android Studio as a development environment.",
	    	semester: 6,
	    	gitLink: "https://github.com/nich3712/AthleticLinks"

		},

		{
	    	title: "Press Start Oshawa",
	    	imageName: "pressstart.jpg",
	    	category: "Web Development",
	    	languages: ["Laravel", "HTML", "CSS", "Eloquent", "MySql"],
	    	description: "Created a C.R.U.D web application using Laravel as the framework, HTML to create the views and MySql as the DBMS. I also used elequent to manage the relationships between tables in the database.",
	    	semester: 5,
	    	gitLink: "https://github.com/MatthewWierzbicki/PressStartOshawa"

		},
		
		{
	    	title: "Real Estate Website",
	    	imageName: "royalrealtor.jpg",
	    	category: "No Development",
	    	languages: ["PHP", "HTML", "CSS"],
	    	description: "Created a Real Estate website using PHP to host several pieces of functionality including buying/selling",
	    	semester: 3,
	    	gitLink: "https://github.com/MatthewWierzbicki/The-Royal-Realtor"

		},

		{
	    	title: "Future Project",
	    	imageName: "futureproject.jpg",
	    	category: "No Development",
	    	languages: ["N/A", "N/A", "N/A"],
	    	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	    	semester: 0,
	    	gitLink: ""

		},

		{
	    	title: "Future Project",
	    	imageName: "futureproject.jpg",
	    	languages: ["N/A", "N/A", "N/A"],
	    	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	    	semester: 0,
	    	gitLink: ""

		}
	];
  res.render('index',  { title: 'Matthew Wierzbicki\'s Portfolio', projectList});
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  var projectList = [
	  {
	    	title: "Portfolio",
	    	imageName: "portfolio.jpg",
	    	category: "Web Development",
	    	languages: ["JavaScript", "HTML", "CSS", "jQuery", "Node.js", "Pug"],
	    	description: "Created a portfolio to showcase all the projects I have worked on.",
	    	semester: 6

		},

		{
	    	title: "AthleticLinks",
	    	imageName: "athleticlinks.jpg",
	    	category: "Mobile Development",
	    	languages: ["Java", "Google Firebase", "XML"],
	    	description: "Created an Android based mobile application using Java for the backend, Google Firebase for the no-sql database, and xml to structure the views. I also used Android Studio as a development environment.",
	    	semester: 6

		},

		{
	    	title: "Press Start Oshawa",
	    	imageName: "pressstart.jpg",
	    	category: "Web Development",
	    	languages: ["Laravel", "HTML", "CSS", "Eloquent", "MySql"],
	    	description: "Created a C.R.U.D web application using Laravel as the framework, HTML to create the views and MySql as the DBMS. I also used elequent to manage the relationships between tables in the database.",
	    	semester: 5

		},
		
		{
	    	title: "Real Estate Website",
	    	imageName: "royalrealtor.jpg",
	    	category: "No Development",
	    	languages: ["PHP", "HTML", "CSS"],
	    	description: "Created a Real Estate website using PHP to host several pieces of functionality including buying/selling",
	    	semester: 3

		},

		{
	    	title: "Future Project",
	    	imageName: "futureproject.jpg",
	    	category: "No Development",
	    	languages: ["N/A", "N/A", "N/A"],
	    	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	    	semester: 0

		},

		{
	    	title: "Future Project",
	    	imageName: "futureproject.jpg",
	    	languages: ["N/A", "N/A", "N/A"],
	    	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	    	semester: 0

		}
	];
  res.render('projects', { title: 'Projects', projectList});
});

module.exports = router;
