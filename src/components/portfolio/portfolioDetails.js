import Robo__img from "../../assets/robo__game.png";
import Face__img from "../../assets/face__marker.png";
import Receipe__img from "../../assets/receipeatdoor.png";
import Prime__img from "../../assets/prime__trailor.png";
import Path__img from "../../assets/path__expert.png";

const portfolioDetails = [
  {
    title: "Apna Dhaba",
    description:
      "A website for buying Foods, Used Paytm Payment gateway to    simplify payment and implement full Admin functionality.    Building Restful CRUD APIs with Node.js, Express.js and    MongoDB for creating, editing, and deleting products.",
    link: "https://receipeatdoor.herokuapp.com/",
    image: Receipe__img,
    post: "order Now !!",
  },
  {
    title: "Pathfinder",
    description:
      "Web applications for visualizing the shortest path between  two points. Used Breadth-first-search & Depth-first-search algorithms for finding path.",
    link: "https://pathexpert.netlify.app/",
    image: Path__img,
    post: "find Now !!",
  },
  {
    title: "Movie Trailor",
    description:
      "These is a movie trailor applications fetches data from moviedb API, try to give good interface and design, it shows trailor of every movies.",
    link: "https://pathexpert.netlify.app/",
    image: Prime__img,
    post: "watch Now !!",
  },
  {
    title: "FaceDetector",
    description:
      "These is Face-Marker Application, full-stack application which detects face of human in any image, and gives score to user. User have to Signin/Register, and gives proper image link. It uses Clarifai API for detecting human face image.",
    link: "https://face-marker.herokuapp.com/",
    image: Face__img,
    post: "check Now!!",
  },
  {
    title: "Robo Game",
    description:
      "This is Allien Game which takes random allien image with api, frontend applicatons. Everytime it gives new image and we can search it by name. Learned indepth knowledge of API using Axios, package for fetching API.",
    link: "#",
    image: Robo__img,
    post: "play Now !!",
  },
];
export default portfolioDetails;
