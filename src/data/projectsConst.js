import MestoMainPic from '../Images/MestoMainPic.png'
import MestoPopup from '../Images/MestoPopup.png'
import MestoBicPic from '../Images/mestoBicPic.png' 

import DreamsAdd from '../Images/dreamsAdd.png'
import DreamsSecondMain from '../Images/dreamssecondmain.png'
import MainDreamsFriends from '../Images/MainDreamsFriends.png'
import MainDreams from '../Images/MainDreams.png'

import HaifaMainPic from '../Images/HaifaMainPic.png'
import HaifaNaturePic from '../Images/HaifaNature.png'
import HaifaMuseumsPic from '../Images/HaifaMuseums.png'
import HaifaTransportPic from '../Images/HaifaTransport.png'
import HaifaPicMine from '../Images/HaifaPicMine.png'

import MainPicStudy from '../Images/mainpicstudy.png'
import PicStudyTech from '../Images/picstudytech.png'
import PicStudyFridman from '../Images/picstudyfridman.png'

import AistMainPic from '../Images/aistmain.png'
import MainAistPic from '../Images/mainaistpic.png'
import AistFormPic from '../Images/aistformpic.png'

import TravelSee from '../Images/travelsee.png'
import PicTravelKosa from '../Images/pictravelkosa.png'
import Baikal from '../Images/Baikal.png'

import velesMain from '../Images/velestasks.png'
import velesTask from '../Images/veles.png'
import velesPic from '../Images/velesT.png'

import apiPic from '../Images/api.png'

export const pictures = [

    {
    'id': 1,
      'pic' : velesMain,
      'picsecond' : velesTask,
      'picthird' : velesPic,
      'title' : 'Veles. Tasks platform.',
  },
  {
    'id': 2,
    'pic' : MestoMainPic,
    'picsecond' : MestoPopup,
    'picthird' : MestoBicPic,
    'picfourth' : HaifaTransportPic,
    'title' : 'Project Mesto',
  },
  {
    'id': 3,
    'pic' : HaifaMainPic,
    'picsecond' : HaifaNaturePic,
    'picthird' : HaifaPicMine,
    'picfourth' : HaifaTransportPic,
    'title' : 'Haifa',
  },
  {
    'id': 4,
    'pic' : MainPicStudy,
    'picsecond' : PicStudyTech,
    'picthird' : PicStudyFridman,
    'picfourth' : PicStudyFridman,
    'title' : 'How to study?',
  },
  {
    'id': 5,
    'pic' : TravelSee,
    'picsecond' : PicTravelKosa,
    'picthird' : Baikal,
    'picfourth' : PicStudyFridman,
    'title' : 'Russian Travel',
  },
  {
    'id': 6,
    'pic' : AistMainPic,
    'picsecond' : MainAistPic,
    'picthird' : AistFormPic,
    'picfourth' : HaifaTransportPic,
    'title' : 'Aist',
  },
  {
    'id': 9,
    'pic' : MainDreams,
    'picsecond' : MainDreamsFriends,
    'picthird' : DreamsSecondMain,
    'picfourth' : DreamsAdd,
    'title' : 'What-do-you-dream-about?',
  },
  {
    'id': 7,
    'pic' : apiPic,
    'picsecond' : apiPic,
    'picthird' : apiPic,
    'picfourth' : apiPic,
    'title' : 'Api',
  },


]

export const projects = [

    {
      'id': 1,
      'pic' : velesMain,
      'picsecond' : velesTask,
      'picthird' : velesPic,
      'title' : 'Veles. Tasks platform.',
      'description': {
        'link': 'http://task.veleres.ru/',
        'description': "This website is designed for evaluating candidates for a software developer position in 1C",
        'mainIdea': "To use it, registration and login are required. After logging in, select a task, solve it in a text editor, submit it, and receive tests in response. These tests will indicate whether the task has been solved or not and provide performance indicators on how it was solved (use). The request is sent to a Russian server, and a VPN is needed to establish contact with it.",
        'technologies': `The backend and database were developed by Ilya Snezhko using Python and PostgreSQL SQL, establishing a connection to an external ERP, while my part focused on the frontend (creating registration, sign-in, text editor, and tests). The frontend was built using React, CSS, JS.`
      }
    },
    {
      'id': 2,
      'pic' : MestoMainPic,
      'picsecond' : MestoPopup,
      'picthird' : MestoBicPic,
      'picfourth' : HaifaTransportPic,
      'title' : 'Project Mesto',
      'description': {
        'link': 'https://varvarakorableva.github.io/mesto-react/',
        'description' : "This nice app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },
    {
      'id': 3,
      'pic' : HaifaMainPic,
      'picsecond' : HaifaNaturePic,
      'picthird' : HaifaPicMine,
      'picfourth' : HaifaTransportPic,
      'title' : 'Haifa',
      'description': {
        'link': 'https://varvarakorableva.github.io/Haifa-through-my-eyes/',
        'description': "This wanderfull web site all about Haifa, Israel",
        'mainIdea': "The main idea is show haw beautirful and freandly Haifa.",
        'technologies': "HTML5, CSS"
      }
    },
    {
      'id': 4,
      'pic' : MainPicStudy,
      'picsecond' : PicStudyTech,
      'picthird' : PicStudyFridman,
      'picfourth' : PicStudyFridman,
      'title' : 'Learn to learn',
      'description': {
        'link': 'https://varvarakorableva.github.io/how-to-learn/',
        'description' : "Learn to learn. Informational one-page site. Alignment technologies are applied.",
        'technologies': "HTML5, CSS"
      }
    },    
    {
      'id': 5,
      'pic' : TravelSee,
      'picsecond' : PicTravelKosa,
      'picthird' : Baikal,
      'picfourth' : PicStudyFridman,
      'title' : 'Journey through Russia',
      'description': {
        'link': 'https://varvarakorableva.github.io/russian-travel/',
        'description': "This project uses technologies by which all objects on the site change depending on the resolution of the display screen on which it is viewed. When hovering over links, changes occur, making it clear that the link is active and by clicking on it you can go to another resource.",
        'technologies': "HTML5, CSS"
      }
    },
    {
      'id': 6,
      'pic' : AistMainPic,
      'picsecond' : MainAistPic,
      'picthird' : AistFormPic,
      'picfourth' : HaifaTransportPic,
      'title' : 'Aist',
      'description': {
        'link': 'https://it-aist.ru',
        'mainIdea' : "An online store that allows you to add goods and services to your cart and then place an order.",
        'description': "The site was made with the participation of a backend developer, designer and product manager.",
        'technologies': "Django, Python, React, JS, JSX"
      }
    },
    {
      'id': 7,
      'pic' : apiPic,
      'picsecond' : apiPic,
      'picthird' : apiPic,
      'picfourth' : apiPic,
      'title' : 'API',
      'description': {
        'link': "https://github.com/VarvaraKorableva/movies-explorer-api",
        'description' : "This API was designed for seamless film data management.",
        'mainIdea': "Here are functionalities like adding, deleting, liking, and retrieving all data.",
        'technologies': "I used Node.js, Express, and MongoDB to create this API"
      }
    },
    {
      'id': 9,
      'pic' : MainDreams,
      'picsecond' : MainDreamsFriends,
      'picthird' : DreamsSecondMain,
      'picfourth' : DreamsAdd,
      'title' : 'What-do-you-dream-about?',
      'description': {
        'link': "https://github.com/VarvaraKorableva/what-do-you-dreame-about",
        'description': "This is a beautiful app for individuals who don't want to answer the question 'What do you want from me for your birthday or New Year?'",
        'mainIdea': "The main idea is that a person can add what they want on their page, and their friends, when deciding what to gift at a party, can view a wonderful and truly desired present on the person's page. It's like a wish list, but more comprehensive. You can add pictures, links, filter presents, see the nearest present date, write messages to your friends, and more.",
        'technologies': "My backend is built on Node.js (Express), my database is MongoDB, and the frontend is developed using React. I've used clean CSS."
      }
    },
    {
      'id': 10,
      'pic' : AistMainPic,
      'title' : 'Aist',
      'description': {
        'description' : "This small app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },
    {
      'id': 11,
      'pic' : MainDreams,
      'picsecond' : MainDreamsFriends,
      'picthird' : DreamsSecondMain,
      'picfourth' : DreamsAdd,
      'title' : 'What-do-you-dream-about?',
      'description': {
        
        'description': "This is a beautiful app for individuals who don't want to answer the question 'What do you want from me for your birthday or New Year?'",
        'mainIdea': "The main idea is that a person can add what they want on their page, and their friends, when deciding what to gift at a party, can view a wonderful and truly desired present on the person's page. It's like a wish list, but more comprehensive. You can add pictures, links, filter presents, see the nearest present date, write messages to your friends, and more.",
        'technologies': "My backend is built on Node.js (Express), my database is MongoDB, and the frontend is developed using React. I've used clean CSS."
      }
    },
    
]