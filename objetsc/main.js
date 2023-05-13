// let citizen1 = {
//     name: "Tito",
//     lastName: "Alcivar",
//     age: "21",
//     city: "Galicia",
// }
// citizen1.age = "18"
// //----------------------------------//
// console.log(citizen1.age);
// //------------------------------------------//
// function checkCitizenship(objeto) {
//     if (objeto.age > 18) {
//         objeto.canVote = true;
//     } else {
//         objeto.canVote = false;
//     }
//     return objeto
// }
// console.log(checkCitizenship(citizen1))
// //------------------------------------------------------------//
// function createCitizen(name, lastName, age) {

//     if (typeof name == 'string' && typeof lastName == 'string' && typeof age == 'string') {
//         return {
//             name: name,
//             lastName: lastName,
//             age: age,
//         }
//     }
//     else {
//         console.log('Invalid Error');
//     }
// }
// console.log(createCitizen('Abel', 'Alcviar', '18'));
// //-------------------------------------------------------------//
// const citizen2 = createCitizen('jaim', 'Rodriguez', '12')
// console.log(citizen2);
// // // //--------------------------------------------------------------//
// function checkVoting(objeto) {
//     if (objeto && objeto) {
//         objeto.canVote = true;

//     } else {
//         objeto.canVote = false;

//     }
//     return objeto
// }
// console.log(checkVoting(objeto));
// //----------------------------------------------//
 
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
//   function checkCitizenship(objeto) {
//     if () {
//         objeto.canVote = true;
//     } else {
//         objeto.canVote = false;
//     }
//     return objeto
// }
// console.log(checkCitizenship(citizen1))
function monkeyCount(n) {
    let result = 0
     for (let i = 0; i < n.length; i++){
       result+= i
     }
     return result
  }
  console.log(result)