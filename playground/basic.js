// const marks = 3;

// if (marks < 30){
//     console.log("Fail");
// }
// else {
//     console.log("Pass");
// }

// const age = 20;
// if (age < 18){
//     console.log("Minor");
// }
// else if (age >= 18 && age < 30){
//     console.log("Young Adult");
// }
// else if (age >= 30 && age < 60){
//     console.log("Adult");
// }

// const name = "salman khan";

// switch (name) {
//     case "salman khan":
//     console.log("Bollywood Actor");
//     break;
//     case "shahrukh khan":
//     console.log("Bollywood Actor");
//     break;
//     default:
//     console.log("Unknown");
// }

// (name =="salman khan") ? console.log("Bollywood Actor") : console.log("Unknown");

// const student = {
//     name: "Salman Khan",
//     age: 55,
//     profession: "Actor",
//     address : ["peshawer", "pakistan",["khyber agency", "fata"]]
// };
// console.log(student.address[2][0]);

// const students = [
//     {
//         name:"salman khan",
//         age : 25,
//         rollNo : 1,
//         address : {
//             city : "peshawer",
//             country : "pakistan"
//         }   
//     },
//     {
//         name:"shahrukh khan",
//         age : 30,
//         rollNo : 2,
//         address : {
//             city : "mumbai",
//             country : "india"
//         }
//     },
//     {
//         name:"amir khan",
//         age : 35,
//         rollNo : 3,
//         friends : ["salman khan", "shahrukh khan","rehan khan"],
//         address : [
//             {
//                 city : "delhi",
//                 country : "india"
//             }
//         ]
//     }
// ]
// console.log(students[1]);
// console.log(students[2].friends[2]);

// const data  = {
//     product :[
//         {
//             name : "laptop",
//             price : 50000,
//             quantity : 10
//         },
//         {
//             name : "mobile",
//             price : 20000,
//             quantity : 20
//         },
//         {
//             name : "tablet",
//             price : 30000,
//             quantity : 15
//         }

//     ]
// }
// console.log(data.product[2].name)
// // add the prices of all products
// let totalPrice = 0;
// for (let i = 0; i < data.product.length; i++) {
//     totalPrice += data.product[i].price * data.product[i].quantity;
// }
// console.log(totalPrice);

// destructuring of arrays

// const name = [
//     "salman khan",
//     "shahrukh khan",
//     "amir khan",
//     "rehan khan"
// ];
// const [std1, , std3] = name;
// console.log(std3);

// destructuring of objects

const student = {
    name: "Salman Khan",
    age: 55,
    profession: "Actor",    
    address: {
        city: "peshawer",
        country: "pakistan"
    }
};
const {profession,name,address} = student;
console.log(profession,name,address.city);