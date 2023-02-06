import {
	AiOutlineMail,
	AiOutlineLinkedin,
	AiOutlineGithub,
} from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

import projectImage_burkholderEyelashes from "./assets/Images/projectCard-Images/e-commerce.png";
import projectImage_eazyEatz from "./assets/Images/projectCard-Images/eazy-eatz.png";
import projectImage_armadilloConstruction from "./assets/Images/projectCard-Images/armadillo-materials.png";
import projectImage_passwordGenerator from "./assets/Images/projectCard-Images/passwordGenerator.png";
import projectImage_workDayScheduler from "./assets/Images/projectCard-Images/workDayScheduler.png";
import projectImage_backEnd from "./assets/Images/projectCard-Images/e-commerce-back-end.jpeg";
import projectImage_teamProfile from "./assets/Images/projectCard-Images/team-profile-generator.png";

import projectImage_simplyPho_homepage from "./assets/Images/projectCard-Images/simplyPho-homepage.png";
import projectImage_simplyPho_orderpage from "./assets/Images/projectCard-Images/simplyPho-orderpage.png";
import projectImage_simplyPho_homepage_full from "./assets/Images/projectCard-Images/simplyPho-homepage-full.png";
import projectImage_simplyPho_orderpage_full from "./assets/Images/projectCard-Images/simplyPho-orderpage-full.png";

const iconSize = 30;

const projects = [
	{
		projName: "Burkholder Eyelashes",
		projId: "burkholder-eyelashes",
		description: "ReactJS E-commerce Website",
		projLink:
			"https://github.com/fremen432/burkholder-eyelashes-refactoring",
		liveLink: "https://main--burkholder-eyelashes.netlify.app/",
		image: projectImage_burkholderEyelashes,
		technologies: ["React JS", "Tailwind CSS", "Javascript"],
	},
	{
		projName: "Eazy Eatz",
		description: "Recipe Finder Application",
		projLink: "https://github.com/fremen432/eazy-eatz-refactor",
		liveLink: "https://shiny-custard-6f1f83.netlify.app/",
		image: projectImage_eazyEatz,
		technologies: "Javascript",
	},
	{
		projName: "Armadillo Construction",
		description: "Professional Full-Stack Website",
		projLink: "https://github.com/MickeyPhillips/Project_2",
		liveLink: "https://glacial-reef-85694.herokuapp.com/",
		image: projectImage_armadilloConstruction,
		technologies: ["HTML5", "Tailwind CSS", "Javascript"],
	},
	{
		projName: "Javascript Password Generator",
		description: "Random Password Generator",
		projLink: "https://github.com/fremen432/Random-Password-Generator",
		liveLink: "https://fremen432.github.io/Random-Password-Generator/",
		image: projectImage_passwordGenerator,
		technologies: "Javascript",
	},
	{
		projName: "Work Day Scheduler",
		description: "Work Day Scheduler",
		projLink: "https://github.com/fremen432/Work-Day-Scheduler",
		liveLink: "https://fremen432.github.io/Work-Day-Scheduler/",
		image: projectImage_workDayScheduler,
		technologies: ["Javascript", "Moment JS"],
	},
	{
		projName: "E-Commerce Back End",
		description: "E-Commerce Back End",
		projLink: "https://github.com/fremen432/e-commerce-back-end",
		liveLink: "",
		image: projectImage_backEnd,
		technologies: ["Javascript"],
	},
	{
		projName: "Team Profile Generator",
		description: "Command Line Application",
		projLink: "https://github.com/fremen432/team-profile-generator",
		liveLink: "",
		image: projectImage_teamProfile,
		technologies: ["Inquirer", "Node JS"],
	},
	// {
	//     projName: '',
	//     description: '',
	//     projLink: '',
	//     liveLink: '',
	//     technologies: [
	//         '',
	//     ]
	// },
];

const featuredProject = {
	projName: "Simply Pho House",
	description: "ReactJS Restaurant Website",
	projLink: "https://github.com/fremen432/online-restaraunt-order",
	liveLink: "https://adorable-tiramisu-8d772f.netlify.app/",
	image: projectImage_simplyPho_homepage_full,
	technologies: ["React JS", "Tailwind CSS", "Javascript"],
};

const topFour = [
	{
		projName: "Simply Pho House",
		description: "ReactJS Restaurant Website",
		projLink: "https://github.com/fremen432/online-restaraunt-order",
		liveLink: "https://restaurant-website-fremen432.netlify.app/",
		image: projectImage_simplyPho_homepage_full,
		technologies: ["React JS", "Tailwind CSS", "Javascript"],
	},
	{
		projName: "Burkholder Eyelashes",
		projId: "burkholder-eyelashes",
		description: "ReactJS E-commerce Website",
		projLink:
			"https://github.com/fremen432/burkholder-eyelashes-refactoring",
		liveLink: "https://main--burkholder-eyelashes.netlify.app/",
		image: projectImage_burkholderEyelashes,
		technologies: ["React JS", "Tailwind CSS", "Javascript"],
	},
	{
		projName: "Eazy Eatz",
		description: "Recipe Finder Application",
		projLink: "https://github.com/fremen432/eazy-eatz-refactor",
		liveLink: "https://shiny-custard-6f1f83.netlify.app/",
		image: projectImage_eazyEatz,
		technologies: "Javascript",
	},
	{
		projName: "Armadillo Construction",
		description: "Professional Full-Stack Website",
		projLink: "https://github.com/MickeyPhillips/Project_2",
		liveLink: "https://glacial-reef-85694.herokuapp.com/",
		image: projectImage_armadilloConstruction,
		technologies: ["HTML5", "Tailwind CSS", "Javascript"],
	},
];

const contactLinks = [
	{
		platform: "Email",
		href: "mailto:cbmiller4897@gmail.com",
		icon: <AiOutlineMail size={iconSize} />,
	},
	{
		platform: "LinkedIn",
		href: "https://www.linkedin.com/in/clayton-miller-20844810a",
		icon: <AiOutlineLinkedin size={iconSize} />,
	},
	{
		platform: "GitHub",
		href: "https://github.com/fremen432",
		icon: <AiOutlineGithub size={iconSize} />,
	},
	// {
	//     platform: 'Stack OverFlow',
	//     href: 'https://stackoverflow.com/users/16523713/cmiller31',
	//     icon: <BsStackOverflow size={iconSize} />
	// }
];

export { projects, featuredProject, contactLinks, topFour };
