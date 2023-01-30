export default [
  {
    id: 1,
    question: "In CSS, what is the order of the box model from the inside out?",
    options: [
      "Content, Padding, Border, Margin",
      "Content, Margin, Border, Padding",
      "Content, Border, Padding, Margin",
      "Padding, Content, Border, Margin",
    ],
  },
  {
    id: 2,
    question: "Which of the following is not a type in JavaScript?",
    options: ["integer", "number", "string", "boolean"],
  },
  {
    id: 3,
    question: "Which unit in CSS is based on the size of the screen width?",
    options: ["vx", "sw", "vw", "%"],
  },
  {
    id: 4,
    question: "In Node.js, how do you import a module using CommonJS",
    options: [
      "const t = include('f')",
      "const t = require('f')",
      "const t = import('f')",
      "import t from 'f'",
    ],
  },
  {
    id: 5,
    question: "In what order are margin and padding defined in CSS?",
    options: [
      "Right, Bottom, Left, Top",
      "Top, Bottom, Left, Right",
      "Left, Right, Top, Bottom",
      "Top, Right, Bottom, Left",
    ],
  },
  {
    id: 6,
    question:
      "Which of the following is invalid JavaScript for importing from a module",
    options: [
      "import * as n2, { t } from './f.js'",
      "import n, { t as t2 } from './f.js'",
      "import n, { t } from './f.js'",
      "import { default as n2, t} from './f.js'",
    ],
  },
  {
    id: 7,
    question: "What is the result of 100/0 in JavaScript?",
    options: ["NaN", "0", "It throws an error", "Infinity"],
  },
  {
    id: 8,
    question: "What is correct way to check for NaN in JavaScript?",
    options: ["isNaN(10)", "10 == NaN", "10 === NaN", "isNumber(10)"],
  },
  {
    id: 9,
    question: "Which of the following is false?",
    options: [
      "'' == false",
      "NaN == NaN",
      "false === false",
      "null == undefined",
    ],
  },
  {
    id: 10,
    question: "How do you name a grid line in CSS?",
    options: [
      "grid-template-columns: 1fr (name)",
      "grid-template-columns: [1fr], [name]",
      "grid-template-columns: 1fr [name]",
      "grid-template-columns: 1fr <name>",
    ],
  },
  {
    id: 11,
    question: "How do you define multiple transitions in CSS?",
    options: [
      "transitions: width, height 1s, 2s",
      "transitions: width height, 1s 2s",
      "transitions: width 1s, height 2s",
      "transitions: width 1s / height 2s",
    ],
  },
  {
    id: 12,
    question: "Javascript is an _______ language",
    options: ["Object-Oriented", "Object-Based", "Procedural"],
  },
  {
    id: 13,
    question:
      "Following methods can be used to display data in some form using Javascript",
    options: ["document.write()", "console.log()", "window.alert()"],
  },
  {
    id: 14,
    question:
      "When an operator value is NULL, the typeof returned by the unary operator is:",
    options: ["Boolean", "Undefined", "Object"],
  },
  {
    id: 15,
    question: "What does the toString() method return?",
    options: ["Return Object", "Return String", "Return Integer"],
  },
  {
    id: 16,
    question:
      "Which function is used to serialize an object into a JSON string?",
    options: ["stringify()", "parse()", "convert()"],
  },
];

export const answers = [0, 0, 2, 1, 3, 0, 3, 0, 1, 2, 2, 0, 1, 2, 1, 0];
