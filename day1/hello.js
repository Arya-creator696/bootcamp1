// const person={
//     firstName: "Arya",
//     lastName:"Rajan",
//     age:24
// }
// var {firstName,lastName,age}=person
// console.log(firstName);
// console.log(age);

// const ages=[25,26,28,28,29]
// const[first,...otherages]=ages
// console.log(otherages);

import { Logger} from "./logger.js";
const logger = new Logger();
logger.logInfo("This is information")
logger.logError("This is error")