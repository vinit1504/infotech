import reactjs from './assets/technology-icon/physics.png'
import js from './assets/technology-icon/java-script.png'
import server  from './assets/technology-icon/server.png'
import html from './assets/technology-icon/html.png'
import css from './assets/technology-icon/css-3.png' 
import node from './assets/technology-icon/node-js.png'
import redux from './assets/technology-icon/redux-icon-2048x1945-ahvhunxp-removebg-preview.png' 
import android from './assets/technology-icon/android.png'
import ios from './assets/technology-icon/apple.png'
import express from './assets/technology-icon/express-removebg-preview.png'
import reactnative from './assets/technology-icon/Rectangle 1.png'
import mongo from './assets/technology-icon/mongodb (1).png'
import postman from './assets/technology-icon/sky.png'
import jest from './assets/technology-icon/red.png'
import flutter from './assets/technology-icon/flutter.png'
import python from './assets/technology-icon/python.png'
import django from './assets/technology-icon/django.png'
import psql from './assets/technology-icon/psql-removebg-preview.png'
import figma from './assets/technology-icon/figma.png'
import sketch from './assets/technology-icon/sketch.png'
import adobe from './assets/technology-icon/adobe.png'
import invision from './assets/technology-icon/invision.png'
import photoshop from './assets/technology-icon/adobe-photoshop.png'
import illustrator from './assets/technology-icon/illustrator.png'
import panda from './assets/technology-icon/panda.png'
import mat from './assets/technology-icon/mat2-removebg-preview.png'
import learn from './assets/technology-icon/Scikit-removebg-preview.png'
import jupyter from './assets/technology-icon/jupyter (1).png'
import docker from './assets/technology-icon/docker-removebg-preview.png'
import hadoop from './assets/technology-icon/What is Hadoop.jpg'
import aws from './assets/technology-icon/web.png'
import cgp from './assets/technology-icon/cgp-removebg-preview.png'
import tenserflow from './assets/technology-icon/tf.png'
import pytorch from './assets/technology-icon/py.png'
import keras from './assets/technology-icon/keras.png'
import bg1 from './assets/img/bg7.png'
import mlpy from './assets/img/ML + python 3.png'
import bg2 from './assets/img/pythonn full stack.png'
import bg3 from './assets/img/javascript.png'
import bg4 from './assets/img/flutter.png'
import bg5 from './assets/img/bg.png'
import bg6 from './assets/img/pyai.png'
import bg7 from './assets/img/bgg7.png'
import bg8 from './assets/img/bg8.png'
import bg9 from './assets/img/bg9.png'
import bg10 from './assets/img/node1.png'
import bg11 from './assets/img/node+react.png'
// import bg9 from './assets/img/' 

const data = [
  {
    "id": 1,
    "title": "Full Stack JavaScript",
    "description": "Explore the latest trends and technologies in web development.",
    "backgroundImage": bg3,
    image: "JavaScript",
    "toolsAndTechnology": [
      { name: "React", image: reactjs },
      { name: "JavaScript", image: js },
      { name: "MongoDB", image: server },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Node.js", image: node}
    ],
    "sectionData": [
      {
        "key": "foundation",
        "title": "Foundations of JavaScript",
        "description": "Establish a strong foundation in JavaScript, covering fundamentals to advanced concepts necessary for web development.",
        "subsections": [
          {
            "key": "fundamentals",
            "title": "JavaScript Fundamentals",
            "description": "Learn the basics of JavaScript, including variables, functions, and event handling."
          },
          {
            "key": "advanced",
            "title": "Advanced JavaScript Concepts",
            "description": "Dive deeper into JavaScript with advanced topics like closures, asynchronous programming, and more."
          },
          {
            "key": "htmlCss",
            "title": "HTML and CSS Fundamentals",
            "description": "Learn the basics of HTML and CSS to create and style web pages."
          }
        ]
      },
    ]
  },
  {
    "id": 2,
    "title": "React JS",
    "description": "The world can’t live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to making bank transactions. Thanks to efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the library’s fundamentals and work with a simple demo.",
    "backgroundImage": bg1,
    image: "React",
    "toolsAndTechnology": [
      { name: "React", image: reactjs },
      { name: "node", image: node },
      { name: "html", image: html },
      { name: "css", image:css },
      { name: "redux", image: redux },
      { name: "javascript", image: js }
    ],
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to React",
        "description": "Learn the basics of React, including its component-based architecture and key concepts.",
        "subsections": [
          {
            "key": "jsx",
            "title": "JSX Syntax",
            "description": "Understand JSX, a syntax extension that allows you to write HTML in React."
          },
          {
            "key": "components",
            "title": "Components",
            "description": "Learn about functional and class components and how to manage state and props."
          },
          {
            "key": "hooks",
            "title": "React Hooks",
            "description": "Explore React Hooks for managing state and side effects in functional components."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "React Native & FireBase",
    "description": "React Native allows you to build mobile applications using React. Learn to develop high-quality mobile apps for both iOS and Android platforms with this versatile framework.",
    "backgroundImage": bg11,
    image: "ReactNative",
    "toolsAndTechnology": [
      { "name": "React", image:reactjs },
      { "name": "React Native", image: node },
      { "name": "Android", image: android },
      { "name": "iOS", image: ios },
      { "name": "Redux", image: redux },
      { "name": "Flux", image: server }
    ],
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to React Native",
        "description": "Learn the basics of React Native, including its setup and core concepts.",
        "subsections": [
          {
            "key": "setup",
            "title": "Setting Up the Development Environment",
            "description": "Understand how to set up your development environment for React Native, including installation of necessary tools and dependencies."
          },
          {
            "key": "components",
            "title": "Core Components",
            "description": "Learn about the core components of React Native, such as View, Text, and Image."
          },
          {
            "key": "navigation",
            "title": "Navigation",
            "description": "Explore different navigation methods in React Native, including Stack, Tab, and Drawer navigation."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "React Native & Node.js",
    "description": "Combine React Native for mobile app development with Node.js for server-side scripting to create a comprehensive full-stack development experience.",
    "backgroundImage": bg5,
    image: "ReactNativeNodejs",
    "toolsAndTechnology": [
      { "name": "React", image: reactjs },
      { "name": "React Native", image: reactnative},
      { "name": "Node.js", image: node },
      { "name": "Express", image: express },
      { "name": "MongoDB", image: mongo },
      { "name": "SQL", image:server }
    ],
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to React Native and Node.js",
        "description": "Learn the basics of combining React Native and Node.js for full-stack development.",
        "subsections": [
          {
            "key": "reactNativeSetup",
            "title": "Setting Up React Native",
            "description": "Understand how to set up your development environment for React Native."
          },
          {
            "key": "nodeSetup",
            "title": "Setting Up Node.js",
            "description": "Learn how to set up your development environment for Node.js, including installation and configuration."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Node.js",
    "description": "Node.js enables you to build scalable network applications with ease. Learn the essentials of this powerful server-side platform and how to use it for efficient backend development.",
    "backgroundImage": bg10,
    image: "NodeJS",
    "toolsAndTechnology": [
      { "name": "Node.js", image: node },
      { "name": "Express", image: express},
      { "name": "MongoDB", image: mongo },
      { "name": "Mongoose", image: server },
      { "name": "Postman", image: postman },
      { "name": "Jest", image: jest }
    ],
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to Node.js",
        "description": "Get acquainted with Node.js, its features, and its role in modern web development.",
        "subsections": [
          {
            "key": "nodeOverview",
            "title": "Overview of Node.js",
            "description": "Understand what Node.js is, its architecture, and why it's used for server-side programming."
          },
          {
            "key": "nodeInstallation",
            "title": "Installing Node.js",
            "description": "Learn how to install Node.js and set up your development environment."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Flutter",
    "description": "Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Explore its capabilities to create visually appealing apps with a smooth user experience.",
    "backgroundImage": bg4,
    image: "Flutter",
    "toolsAndTechnology": [
      { name: "Flutter", image: flutter },
      { name: "JavaScript", image: js },
      { name: "MongoDB", image: mongo },
      { name: "HTML", image: html},
      { name: "CSS", image: css },
      { name: "Node.js", image:node }
    ],
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to Flutter",
        "description": "Get started with Flutter and understand its core concepts and architecture.",
        "subsections": [
          {
            "key": "setup",
            "title": "Setting Up Flutter",
            "description": "Learn how to install and set up Flutter on your development environment."
          },
          {
            "key": "architecture",
            "title": "Flutter Architecture",
            "description": "Understand the architecture of Flutter applications, including widgets, state management, and more."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Python Full Stack",
    "description": "Master the Python programming language and its application in full-stack development. Learn how to build both front-end and back-end systems using popular Python frameworks and libraries.",
    "backgroundImage": bg2,
    image: "PythonFullStack",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "Django", image: django },
      { "name": "HTML", image: html },
      { "name": "CSS", image: css },
      { "name": "JavaScript", image: js},
      { "name": "PostgreSQL", image: psql}
    ]
    ,
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to Python",
        "description": "Get started with Python, one of the most versatile and widely used programming languages.",
        "subsections": [
          {
            "key": "pythonOverview",
            "title": "Overview of Python",
            "description": "Understand the basics of Python, its syntax, and its core features."
          },
          {
            "key": "pythonInstallation",
            "title": "Installing Python",
            "description": "Learn how to install Python and set up your development environment."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "UI-UX Design",
    "description": "Explore the principles of User Interface and User Experience design. Understand how to create user-centered designs that provide engaging and intuitive interactions.",
    "backgroundImage": bg9,
    image: "UIUX",
    "toolsAndTechnology": [
      { "name": "Figma", image: figma },
      { "name": "Sketch", image: sketch },
      { "name": "Adobe XD", image: adobe },
      { "name": "InVision", image: invision },
      { "name": "Photoshop", image: photoshop },
      { "name": "Illustrator", image: illustrator }
    ]
    ,
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to UI/UX Design",
        "description": "Gain a foundational understanding of UI/UX design, its importance, and its role in product development.",
        "subsections": [
          {
            "key": "uiuxDifference",
            "title": "UI vs UX",
            "description": "Learn the differences between User Interface (UI) and User Experience (UX) design and their impact on the user."
          },
          {
            "key": "designPrinciples",
            "title": "Design Principles",
            "description": "Understand core design principles that apply to UI/UX, including color theory, typography, and layout."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Data Science & Python",
    "description": "Data Science with Python covers the essential skills for analyzing and interpreting complex data. Learn to leverage Python’s powerful libraries to uncover insights and make data-driven decisions.",
    "backgroundImage": bg8,
    image: "DataSciencePython",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "Pandas", image: panda },
      { "name": "Matplotlib", image: mat},
      { "name": "Scikit-Learn", image:learn },
      { "name": "Jupyter", image:jupyter },
      { "name": "SQL", image: server }
    ]
    ,
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to Data Science",
        "description": "Understand the basics of data science and its applications in various industries.",
        "subsections": [
          {
            "key": "dataScienceOverview",
            "title": "What is Data Science?",
            "description": "Learn about data science, its importance, and how it's used to solve real-world problems."
          },
          {
            "key": "pythonForDataScience",
            "title": "Python for Data Science",
            "description": "Introduction to Python and its role in data science, including libraries and tools."
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Data Engineering & Python",
    "description": "Data Engineering focuses on designing and managing data systems and pipelines. Learn how to use Python to build robust data architectures and ensure data flows smoothly across various systems.",
    "backgroundImage": bg7,
    image: "DataEngineeringPython",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "SQL", image: server },
      { "name": "Hadoop", image: hadoop },
      { "name": "Docker", image: docker },
      { "name": "AWS", image: aws },
      { "name": "GCP", image: cgp }
    ]
    ,
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to Data Engineering",
        "description": "Learn the fundamentals of data engineering, including the importance of data pipelines and architecture in handling large-scale data.",
        "subsections": [
          {
            "key": "dataEngineeringOverview",
            "title": "What is Data Engineering?",
            "description": "Understand the role of data engineering in the data lifecycle and its impact on business intelligence."
          },
          {
            "key": "dataPipelines",
            "title": "Building Data Pipelines",
            "description": "Learn about the components of data pipelines and how to design them effectively."
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "title": "AI & Python",
    "description": "Artificial Intelligence with Python explores how to create intelligent systems using Python’s extensive libraries. Gain insights into building AI models and implementing machine learning algorithms.",
    "backgroundImage":bg6,
    image: "AIandPython",
    "toolsAndTechnology": [
      { "name": "Python", image: python},
      { "name": "TensorFlow", image: tenserflow },
      { "name": "PyTorch", image: pytorch },
      { "name": "Pandas", image: panda},
      { "name": "Matplotlib", image: mat },
      { "name": "Jupyter", image: jupyter }
    ]
    ,
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to AI and Python",
        "description": "Learn the basics of artificial intelligence and how Python is used to build AI systems.",
        "subsections": [
          {
            "key": "aiOverview",
            "title": "What is Artificial Intelligence?",
            "description": "Understand the fundamentals of AI and its applications in various domains."
          },
          {
            "key": "pythonForAI",
            "title": "Python for AI",
            "description": "Explore why Python is the preferred language for AI development and its advantages."
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "Machine Learning with Python",
    "description": "Machine Learning with Python involves creating algorithms that allow computers to learn from data. Understand how to apply Python’s tools to build predictive models and solve complex problems.",
    "backgroundImage": mlpy,
    image: "MachineLearningPython",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "TensorFlow", image: tenserflow},
      { "name": "Keras", image: keras },
      { "name": "Pandas", image: panda },
      { "name": "Matplotlib", image: mat },
      { "name": "Jupyter", image: jupyter }
    ]
    ,
    "sectionData": [
      {
        "key": "introduction",
        "title": "Introduction to Machine Learning",
        "description": "Understand the basics of machine learning, including key concepts, algorithms, and how Python is used to implement them.",
        "subsections": [
          {
            "key": "mlConcepts",
            "title": "Machine Learning Concepts",
            "description": "Learn fundamental concepts of machine learning such as supervised and unsupervised learning, overfitting, and model evaluation."
          },
          {
            "key": "pythonForML",
            "title": "Python for Machine Learning",
            "description": "Explore Python libraries and tools that are essential for machine learning, including Scikit-learn, TensorFlow, and Keras."
          }
        ]
      }
    ]
  }
]
export default data