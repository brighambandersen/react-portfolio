import { ReactElement } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Designs from './pages/Designs';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import fortySevenFund1 from './assets/shots/47fund1.webp';
import fortySevenFund2 from './assets/shots/47fund2.webp';
import fortySevenFund3 from './assets/shots/47fund3.webp';
import fortySevenFund4 from './assets/shots/47fund4.webp';
import fortySevenFund5 from './assets/shots/47fund5.webp';
import fortySevenFund6 from './assets/shots/47fund6.webp';
import fortySevenFund7 from './assets/shots/47fund7.webp';
import adobe1 from './assets/shots/adobe1.webp';
import frenchToast1 from './assets/shots/french-toast1.webp';
import frenchToast2 from './assets/shots/french-toast2.webp';
import hackOverflow1 from './assets/shots/hack-overflow1.webp';
import hackOverflow2 from './assets/shots/hack-overflow2.webp';
import hackOverflow3 from './assets/shots/hack-overflow3.webp';
import hackOverflow4 from './assets/shots/hack-overflow4.webp';
import hackOverflow5 from './assets/shots/hack-overflow5.webp';
import instructme1 from './assets/shots/instructme1.webp';
import instructme2 from './assets/shots/instructme2.webp';
import instructme3 from './assets/shots/instructme3.webp';
import irecognize1 from './assets/shots/irecognize1.webp';
import irecognize2 from './assets/shots/irecognize2.webp';
import irecognize3 from './assets/shots/irecognize3.webp';
import irecognize4 from './assets/shots/irecognize4.webp';
import irecognize5 from './assets/shots/irecognize5.webp';
import jokester1 from './assets/shots/jokester1.webp';
import jokester2 from './assets/shots/jokester2.webp';
import jolt1 from './assets/shots/jolt1.webp';
import jolt2 from './assets/shots/jolt2.webp';
import jolt3 from './assets/shots/jolt3.webp';
import meltingPot1 from './assets/shots/melting-pot1.webp';
import meltingPot2 from './assets/shots/melting-pot2.webp';
import nbaInsiderHub1 from './assets/shots/nba-insider-hub1.webp';
import nbaInsiderHub2 from './assets/shots/nba-insider-hub2.webp';
import noEndInsight1 from './assets/shots/no-end-insight1.webp';
import noEndInsight2 from './assets/shots/no-end-insight2.webp';
import noEndInsight3 from './assets/shots/no-end-insight3.webp';
import noEndInsight4 from './assets/shots/no-end-insight4.webp';
import noEndInsight5 from './assets/shots/no-end-insight5.webp';
import pecos1 from './assets/shots/pecos1.webp';
import pecos2 from './assets/shots/pecos2.webp';
import pecos3 from './assets/shots/pecos3.webp';
import pecos4 from './assets/shots/pecos4.webp';
import pecos5 from './assets/shots/pecos5.webp';
import pecos6 from './assets/shots/pecos6.webp';
import pecos7 from './assets/shots/pecos7.webp';
import photography1 from './assets/shots/photography1.webp';
import photography2 from './assets/shots/photography2.webp';
import photography3 from './assets/shots/photography3.webp';
import piano1 from './assets/shots/piano1.webp';
import scoreboard1 from './assets/shots/scoreboard1.webp';
import scoreboard2 from './assets/shots/scoreboard2.webp';
import silverFund1 from './assets/shots/silver-fund1.webp';
import silverFund3 from './assets/shots/silver-fund3.webp';
import silverFund4 from './assets/shots/silver-fund4.webp';
import silverFund2 from './assets/shots/silver-fund2.webp';
import snake1 from './assets/shots/snake1.webp';
import tictactoe1 from './assets/shots/tictactoe1.webp';
import tweeter1 from './assets/shots/tweeter1.webp';
import tweeter2 from './assets/shots/tweeter2.webp';
import vbbPortal1 from './assets/shots/vbb-portal1.webp';
import vbbPortal2 from './assets/shots/vbb-portal2.webp';
import vbbPortal3 from './assets/shots/vbb-portal3.webp';
import weatherRainOrShine1 from './assets/shots/weather-rain-or-shine1.webp';

export const GDRIVE_BASE_URL = 'https://drive.google.com/uc?export=view&id=';

export interface Page {
  component: () => ReactElement;
  icon: ReactElement;
  name: string;
  path: string;
}

/* pages of this portfolio website */
export const pages: Page[] = [
  {
    component: Home,
    icon: <HomeIcon />,
    name: 'Home',
    path: '/'
  },
  {
    component: Resume,
    icon: <DescriptionIcon />,
    name: 'Resume',
    path: '/resume'
  },
  {
    component: Projects,
    icon: <DesktopMacIcon />,
    name: 'Projects',
    path: '/projects'
  },
  {
    component: Designs,
    icon: <PhotoLibraryIcon />,
    name: 'Designs',
    path: '/designs'
  },
  {
    component: Contact,
    icon: <AccountBoxIcon />,
    name: 'Contact',
    path: '/contact'
  }
];

// Home ***********************************************************************************************

/* List of my latest youtube videos with embed links - used on Home page */
export const latestVidContent = [
  {
    title: 'Commandshake Bot - Automated Job Applying',
    url: 'https://www.youtube.com/embed/34GiNbJ4ECc' // Commandshake Bot - Automated Job Applying
  },
  {
    url: 'https://www.youtube.com/embed/McgMi2Pf4l4' // Ep3 - How to Use Components in Figma
  },
  {
    url: 'https://www.youtube.com/embed/UJC2Gyaxd_s' // Web Dev (JavaScript) Crash Course 2.0
  },
  {
    url: 'https://www.youtube.com/embed/vGIRW00pB9w' // Web Dev (HTML/CSS) Crash Course 1.0
  },
  {
    url: 'https://www.youtube.com/embed/jSeLgZsF5_U' // Web Dev Snapshot
  }
];

const GH_SEARCH_BASE_URL =
  'https://github.com/brighambandersen?tab=repositories';
/* My top languages - used on '/#resume' */
export const languages = [
  {
    name: 'JavaScript',
    className: 'devicon-javascript-plain colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=javascript`
  },
  {
    name: 'React',
    className: 'devicon-react-original-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=react`
  },
  {
    name: 'Vue',
    className: 'devicon-vuejs-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=vue`
  },
  {
    name: 'Flutter',
    className: 'devicon-flutter-plain colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=flutter`
  },
  {
    name: 'HTML',
    className: 'devicon-html5-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=html`
  },
  {
    name: 'CSS',
    className: 'devicon-css3-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=css`
  },
  {
    name: 'Python',
    className: 'devicon-python-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=python`
  },
  {
    name: 'Java',
    className: 'devicon-java-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=java`
  },
  {
    name: 'Android',
    className: 'devicon-android-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=android`
  },
  {
    name: 'C++',
    className: 'devicon-cplusplus-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&q=c-plus-plus`
  },
  {
    name: 'C',
    className: 'devicon-c-plain-wordmark colored',
    searchUrl: `${GH_SEARCH_BASE_URL}&language=c`
  }
];

// Projects & Designs *********************************************************************************

export interface Project {
  id: string; // Name of repo / photo files
  name: string;
  url: string | null;
  srcCode: string | null;
  tags: string[];
  description: string;
  shots: string[] | null; // Make sure shots are square (use lunapic), .webp (use cwebp), and dimensions of 800x800
}

/* List of the projects I've done (websites, apps, designs, scripts) */
export const projects: Project[] = [
  {
    id: '47fund',
    name: 'Silver Fund Web App',
    url: 'https://47fund.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/47fund',
    tags: ['work', 'side'],
    description:
      "Silver Fund Web App - A Stocks/Trades Performance Tracker/Predictor Site.  I created this while working as a Software Engineer for Silver Fund (BYU's MBA Finance Program) during the second half of 2020.  After I left the project broke, so I recreated the front-end side of things on my domain as a side project.",
    shots: [
      fortySevenFund1,
      fortySevenFund2,
      fortySevenFund3,
      fortySevenFund4,
      fortySevenFund5,
      fortySevenFund6,
      fortySevenFund7
    ]
  },
  {
    id: 'adobe',
    name: 'Adobe',
    url: 'https://experience.adobe.com/#/@aauniversity/so:adobea8cf/analytics',
    srcCode: null,
    tags: ['school'],
    description:
      "For my Senior Capstone at BYU I'm on a team with 4 other developers working for Adobe. We specifically work on Adobe Analytics. Corporations like Walmart and Best Buy use it, but managers doing basic analytics aren't the most technical, so we've been tasked with enhancing their React front-end by revamping the workflow for building out visualizations like line and bar charts.",
    shots: [adobe1]
  },
  {
    id: 'comics',
    name: 'Comics Browser',
    url: null,
    srcCode: 'https://github.com/brighambandersen/comics',
    tags: ['school'],
    description:
      'Online comics browser.  Look through comics, then leave ratings and comments.  Made possible with an API for comic data, then created with VueJS.',
    shots: null
  },
  {
    id: 'commandshake',
    name: 'Command Shake',
    url: 'https://youtu.be/34GiNbJ4ECc',
    srcCode: 'https://github.com/brighambandersen/commandshake',
    tags: ['side'],
    description:
      'A script that automatically applies to jobs for me.  Web scrapes the BYU Handshake website when you search for any job and applies to all the jobs with quick apply.  Written in Python using Selenium.',
    shots: null
  },
  {
    id: 'cs312',
    name: 'CS 312: Algorithm Design & Analysis',
    url: 'https://drive.google.com/drive/folders/1uCHKfDjcItc92e7b_SqlWgeXS_qkSRa8?usp=sharing',
    srcCode: 'https://github.com/brighambandersen/cs312',
    tags: ['school'],
    description:
      'In this class at BYU, we went over several general approaches to algorithm design, including Divide and Conquer, Graph-based, Greedy, Dynamic Programming, Linear Programming, and Intelligent Search. We tackled projects which solved the famous traveling salesman problem, basic cryptography, primality testing, convex hulls, gene sequencing, and networking routing. See the link for project write-ups.',
    shots: null
  },
  {
    id: 'french-toast',
    name: 'French Toast Instructions',
    url: `${GDRIVE_BASE_URL}1aqc_iRydWXCfmb7T8ZIC3_c2Dyx4cNM3`,
    srcCode: null,
    tags: ['school'],
    description:
      'For my ENGL 316 Technical Writing class at BYU, we practiced conveying ideas concisely by having to make an instruction manual or recipe. My team of 4 made a pamphlet on how to make french toast.',
    shots: [frenchToast1, frenchToast2]
  },
  {
    id: 'groceries',
    name: 'Mother Earth Groceries',
    url: 'https://groceries.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/groceries',
    tags: ['school'],
    description:
      'Sick of going in-person to the store just to see their selection?  This site showcases a grocery store and their unique product offering, allowing users to search for specific items, then add desired ones to their cart.  Made using VueJS.',
    shots: null
  },
  {
    id: 'hack-overflow',
    name: 'Hack Overflow',
    url: 'https://www.figma.com/proto/qPAMPE3Wsbo7UDWQLNkJnh/HackOverflow?node-id=152%3A329',
    srcCode: null,
    tags: ['school'],
    description:
      'For CS 356 UI/UX Design class at BYU, my group of 3 had to make a website prototype using Figma to solve a pain point. We noticed that coding resources are mostly geared towards experienced developers, so we made Hack Overflow, which simplifies resources like Stack Overflow and W3 Schools into an all-in-one resource.',
    shots: [
      hackOverflow1,
      hackOverflow2,
      hackOverflow3,
      hackOverflow4,
      hackOverflow5
    ]
  },
  {
    id: 'instructme',
    name: 'Instruct.Me',
    url: 'https://www.figma.com/proto/XVkI6hQ41JHBHilssqJq1V/Instruct.me-OCI?node-id=1250%3A11188',
    srcCode: null,
    tags: ['school', 'side'],
    description:
      "For an on-campus internship at BYU's Business School, I helped out the Instruct.Me startup with designing their app from the ground up. We used Figma to build high-fidelity interactive prototypes.",
    shots: [instructme1, instructme2, instructme3]
  },
  {
    id: 'irecognize',
    name: 'iRecognize',
    url: 'https://www.figma.com/file/dLqZF2Wl8mUQlJtrL1eLfV/iRecognize?type=design&node-id=232-1840&mode=design&t=GtAdoHG3K21OSHVA-0',
    srcCode: 'https://github.com/brighambandersen/irecognize-flutter',
    tags: ['school', 'side'],
    description:
      "For BYU's CS 356 UI/UX Design class project, my group of 3 made a mobile app throughout the second half of the semester. We found that it's hard to remember people's names, and sometimes important details about where you two met or other relevant info about them. We made a Figma prototype and then a Flutter app that demos how you could use your GPS to locate those around you and be able to put names to faces.",
    shots: [irecognize1, irecognize2, irecognize3, irecognize4, irecognize5]
  },
  {
    id: 'jokester',
    name: 'Jokester',
    url: 'https://jokester.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/jokester',
    tags: ['side'],
    description:
      "A website which displays random coding and dad jokes, then allows you to save your favorites so you can view them later.  Uses Vanilla JavaScript, HTML, and Bulma CSS (decided I'd try a different CS framework on this one).",
    shots: [jokester1, jokester2]
  },
  {
    id: 'jolt',
    name: 'Jolt',
    url: null,
    srcCode: null,
    tags: ['work'],
    description:
      "Enhancing a React Native application that's optimized both for tablet and mobile. This app helps fast food companies like Chick-fil-A and McDonald's with timeclocking, food safety, printing labels, and more.",
    shots: [jolt1, jolt2, jolt3]
  },
  {
    id: 'k9-directory',
    name: 'K9 Directory',
    url: 'https://k9.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/k9-directory',
    tags: ['side'],
    description:
      "Consider yourself a dog-lover?  Here's a simple React app made in CodeSandbox which interfaces with an API to show random dog pictures based on the breed you select.",
    shots: null
  },
  {
    id: 'less-is-more',
    name: 'Less is More',
    url: 'https://less-is-more.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/less-is-more',
    tags: ['side'],
    description:
      'I plan to start making money off my websites. Aside from ad revenue and subscription plans, I realize that being able to accept payments from a user is an essential skill to have. To practice this I leveraged Stripe API to make a simple prototype of how I could charge for my services.',
    shots: null
  },
  {
    id: 'melting-pot',
    name: 'Melting Pot',
    url: 'https://www.figma.com/proto/OpqKlkSOyQ4QgO900BjQyb/Melting-Pot?node-id=3%3A53',
    srcCode: null,
    tags: ['school'],
    description:
      'For my final project for BYU CS 356 UI/UX Design class, we had to make an app that fills a need for the Coloured People of South Africa. After doing extensive research, I found that the those people struggle to find their identify due to their mixed heritage. I made a Figma prototype of how an app could scan their face using facial recognition and then help them identify which facial features correspond with their ancestral tribes.',
    shots: [meltingPot1, meltingPot2]
  },
  {
    id: 'museum',
    name: 'Museum of Ordinary Objects',
    url: null,
    srcCode: 'https://github.com/brighambandersen/museum',
    tags: ['school'],
    description:
      'Random picture uploader/viewer that introduced me to MongoDB.  Now deprecated since previous hosting subscription expired.',
    shots: null
  },
  {
    id: 'nba-insider-hub',
    name: 'NBA Insider Hub',
    url: 'https://nba.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/nba-insider-hub',
    tags: ['school'],
    description:
      '4 words: Basketball Player Search Index.  Front-end client which connects the balldontlie API, allowing users to see a table of NBA Teams, then search by player name to see latest player stats. Uses Vanilla JavaScript, HTML, and Bootstrap CSS.',
    shots: [nbaInsiderHub1, nbaInsiderHub2]
  },
  {
    id: 'no-end-insight',
    name: 'No End Insight',
    url: 'https://insight.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/no-end-insight',
    tags: ['school', 'side'],
    description:
      "An online social media platform for sharing uplifting insights!  Only the front-end (HTML and Bootstrap CSS) was completed for school, and I've since hooked it up with a back-end with live data as a fun side project!",
    shots: [
      noEndInsight1,
      noEndInsight2,
      noEndInsight3,
      noEndInsight4,
      noEndInsight5
    ]
  },
  {
    id: 'ontheline',
    name: 'On The Line',
    url: 'https://ontheline.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/on-the-line',
    tags: ['side'],
    description:
      'A scorekeeper game built specifically around the basketball mini game "9 On the Line". I made this in React after getting frustrated of keeping track of game scores on my own.',
    shots: null
  },
  {
    id: 'pecos',
    name: 'Pecos Solutions',
    url: 'https://pecos-solutions.com',
    srcCode: 'https://github.com/Pecos-Solutions/pecos',
    tags: ['work'],
    description:
      'A full-stack web app used to preview and download records/documents by county.  Features user authentication, custom theming, an Admin Dashboard, and dynamic routing.  Back-end is AWS, front-end is React, using Styled Components and Material UI for styling.',
    shots: [pecos1, pecos2, pecos3, pecos4, pecos5, pecos6, pecos7]
  },
  {
    id: 'photobomb',
    name: 'Photo Bomb',
    url: null,
    srcCode: 'https://github.com/brighambandersen/photobomb',
    tags: ['school'],
    description:
      'Photos uploader, sharer, and viewer.  Now deprecated since previous hosting subscription expired.',
    shots: null
  },
  {
    id: 'photography',
    name: 'Photography',
    url: 'https://photography.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/photography',
    tags: ['school'],
    description:
      "Have an exciting event coming up and want to make sure you capture those memories?  Here's an photographer informational site where you look into hiring a photographer.  Created using HTML and Bootstrap CSS.",
    shots: [photography1, photography2, photography3]
  },
  {
    id: 'piano',
    name: 'Piano',
    url: 'https://piano.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/piano',
    tags: ['side'],
    description:
      "On the go but dying to pound some horse teeth?  Here's this online mini piano (1 octave) created using Vanilla JavaScript, HTML, and Standard CSS.",
    shots: [piano1]
  },
  {
    id: 'ponderizer',
    name: 'Ponderizer',
    url: 'https://ponderizer.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/ponderizer',
    tags: ['school'],
    description:
      'Full-stack scripture memorization app - make an account, then save and ponderize your favorite scripture verses! Created with VueJS, Node, Express, and MongoDB.  No longer hooked up to the back-end, but feel free to check out the source code!',
    shots: null
  },
  {
    id: 'portfolio',
    name: 'Portfolio (This Website)',
    url: 'https://brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/portfolio',
    tags: ['side', 'work'],
    description:
      "This website was made using React and styled using Material UI.  It was built with the purpose of helping prospective clients/employers get a feel for who I am and the work I do. Though the site looks pretty simple, I've added a lot of optimizations so that images load quickly and there's no lag across the experience.",
    shots: null
  },
  {
    id: 'scoreboard',
    name: 'Scoreboard',
    url: 'https://scoreboard.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/scoreboard',
    tags: ['side'],
    description:
      "Birthday present for my dad (he loves sports and stats, so he naturally loves scorekeeping).  I've made many sites in React, but this was my first website made using Material UI for styling.",
    shots: [scoreboard1, scoreboard2]
  },
  {
    id: 'silver-fund',
    name: 'Silver Fund Visitor Site',
    url: 'https://silverFund.byu.edu',
    srcCode: null,
    tags: ['work'],
    description:
      'My first no-code website, used making WordPress.  The head of our organization was looking to create an informational page for visitors and wanted to be able to go in later and make adjustments himself, so we opted to make the site in WordPress.',
    shots: [silverFund1, silverFund2, silverFund3, silverFund4]
  },
  {
    id: 'simple-calculator',
    name: 'Simple Calculator',
    url: 'https://calculator.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/simple-calculator',
    tags: ['side'],
    description:
      'Simple reactive calculator that takes to inputs and returns the result on the fly after performing basic arithmetic ( + - * / ).  Made with React.',
    shots: null
  },
  {
    id: 'simple-counter',
    name: 'Simple Counter',
    url: 'https://counter.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/simple-counter',
    tags: ['side'],
    description:
      'Ever run out of fingers while counting?  Use this app to keep tally! Simple Counter was one of my first React apps back when I was first learning about React Hooks.',
    shots: null
  },
  {
    id: 'snake',
    name: 'Snake',
    url: 'https://snake.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/snake',
    tags: ['side'],
    description:
      'A blast from the past, this retro snake game will give you some serious nostalgia.  Made using Vanilla JavaScript, HTML, and Standard CSS.',
    shots: [snake1]
  },
  {
    id: 'svelte',
    name: 'Svelte',
    url: 'https://svelte.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/svelte',
    tags: ['side'],
    description:
      'A simple website I made using Svelte Kit which showcases basic features of Svelte.',
    shots: null
  },
  {
    id: 'tictactoe',
    name: 'Tic Tac Toe',
    url: 'https://tictactoe.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/tictactoe',
    tags: ['side'],
    description:
      "Don't have a pen and paper but one play some good 'ole Tic Tac Toe?  Here you go!  This website was made using Vanilla JavaScript, HTML, and Standard CSS.",
    shots: [tictactoe1]
  },
  {
    id: 'timekeeper',
    name: 'Timekeeper',
    url: 'https://timekeeper.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/timekeeper',
    tags: ['side', 'beta'],
    description:
      'A modern redesign of online-stopwatch.com.  Makes it easy to keep a countdown or stopwatch going in the background of your browser.',
    shots: null
  },
  {
    id: 'tweeter',
    name: 'Tweeter',
    url: null,
    srcCode: 'https://github.com/brighambandersen/cs340',
    tags: ['school'],
    description:
      "For BYU's CS 340 Software Design Patterns class, we made a Twitter Clone using Android on the front-end then Java and AWS (EC2, S3, API Gateway, Lambdas, SQS, DynamoDB) on the back-end. We learned how to not only make a working full-stack app, but how to design it so you can reuse code and follow best practice.",
    shots: [tweeter1, tweeter2]
  },
  {
    id: 'vbb-portal',
    name: 'VBB Mentoring Portal',
    url: 'https://vbb.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/vbb-portal',
    tags: ['work', 'side'],
    description:
      'International Mentoring Booking Site used by Nike and Oracle.  I did full-stack development on this project, but focused primarily on front-end.  This project has been unstable since I left, so in the cases that the Official Website (https://portal.villagebookbuilders.org) is down or people want to take a look at site features w/o making an account, I recreated the front-end side of things on my domain as a side project.',
    shots: [vbbPortal1, vbbPortal2, vbbPortal3]
  },
  {
    id: 'weather-rain-or-shine',
    name: 'Weather Rain or Shine',
    url: 'https://weather.brighambandersen.com',
    srcCode: 'https://github.com/brighambandersen/weather-rain-or-shine',
    tags: ['school'],
    description:
      'A weather app that lets you search by city, then interacts with an API to display current weather conditions, 5-day, and 3-hour forecasts.  Uses Vanilla JavaScript, HTML, and Bootstrap CSS.',
    shots: [weatherRainOrShine1]
  }
];

export const allShots = projects
  .flatMap((proj) => proj.shots)
  .filter((proj) => proj !== null);

// Contact ********************************************************************************************

interface ContactMethod {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  link: string;
  tooltipTitle?: string | ReactElement;
}

/* List of external resources for contacting me */
export const contactMethods: ContactMethod[] = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/brighambandersen',
    tooltipTitle: 'Connect with me on LinkedIn'
  },
  {
    name: 'Email',
    icon: MailOutlineIcon,
    link: 'mailto:brighambandersen@gmail.com',
    tooltipTitle: 'Email brighambandersen@gmail.com'
  },
  {
    name: 'Phone',
    icon: PhoneIcon,
    link: 'tel:3854998277',
    tooltipTitle: 'Text / Call 385-499-8277'
  }
];
