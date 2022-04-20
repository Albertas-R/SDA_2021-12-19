// PIRMA UŽDUOTIS

//function sum
//function mult
//function minus

//function b

// var a = b(7, 10, sum); //17
// var c = b(7, 10, mult); //70
// var d = b(7, 10, minus); //3

// function sum(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// ANTRA UŽDUOTIS

// var a = b(7, 10, function (a, b) {
//   return a + b;
// });
// //17

// var c = b(7, 10, function (a, b) {
//   return a * b;
// });
// //70

// var d = b(7, 10, function (a, b) {
//   if (b > a) {
//     return b - a;
//   }
//   return a - b;
// });
// //3

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// TREČIA UŽDUOTIS

// var countFactory = function () {
//   var counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// };

// var count = countFactory();
// var anotherCount = countFactory();

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// KETVIRTA UŽDUOTIS

// var countFactory = function (x) {
//   var counter = 0;
//   return function () {
//     return (counter += x);
//   };
// };

// var count = countFactory(10);
// var anotherCount = countFactory();

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// PENKTA UŽDUOTIS

// var accountFactory = function () {
//   var balance = 0;
//   return function (x) {
//     return (balance += x);
//   };
// };

// var addToAccount = accountFactory();
// console.log(accountFactory);
// console.log(addToAccount);

// var count1 = addToAccount(10);
// console.log(count1);

// var count3 = addToAccount(5);
// console.log(count3); // 15

// 2021-12-13

// var person = {
//   firstName: "Petras",
//   lastName: "Petraitis",
//   age: 25,
// };
// var x = 30;

// function change(person, newAge) {
//   person.age = newAge;
//   newAge = 0;
// }

// function change(person, newAge) {
//   newAge = 0;
//   person.age = newAge;
// }

// function change(person, newAge) {
//   person.age = newAge;
//   newAge = x;
//   // x = x - 1;
//   // x -= 1;
//   x--;
// }

// change(person, x);
// console.log(person);
// console.log(x);

// 2 užduotis

// var obj = { name: "pencil", price: 10 };
// var x = 15;

// function change(product, newPrice) {
//   product.price = newPrice;
// }

// function cloneWithNewPrice(product, newPrice) {
//   var newObj = {};
//   newObj.name = product.name;
//   newObj.price = newPrice;
//   return newObj;

//   // return {
//   //   name: product.name,
//   //   price: newPrice,
//   // };
// }

// var clonedObject = cloneWithNewPrice(obj, x);

// console.log(obj);
// console.log(clonedObject);

// 3 užduotis

// var obj = { name: "pencil", price: 10 };
// var x = 15;
// var arr = [1, 2, 3, 4];
// arr.push(5);
// // for (var i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// function cloneArrayWithNewValue(arrayToClone, newValue) {
//   var newArr = [];
//   for (var i = 0; i < arrayToClone.length; i++) {
//     var currentElement = arrayToClone[i];
//     newArr.push(currentElement);
//   }
//   newArr.push(newValue);
//   return newArr;
// }

// var newArray = cloneArrayWithNewValue(arr, 7);
// console.log(arr);
// console.log(newArray);

// 4 užduotis

// var arr = [1, 2, 3, 4];

// function cloneArrayWithNewValue(arrayToClone, newValue) {
//   var newArray = [];
//   for (var i = 0; i < arrayToClone.length; i++) {
//     var currentElement = arrayToClone[i];
//     newArray.push(currentElement);
//   }
//   newArray.push(newValue);
//   return newArray;
// }

// function cloneArrayWithModifiedValues(arrayToClone, callback) {
//   var newArray2 = [];
//   for (var i = 0; i < arrayToClone.length; i++) {
//     var currentElement2 = arrayToClone[i];
//     newArray2.push(callback(currentElement2));
//   }
//   return newArray2;
// }

// var add4 = function (a) {
//   return a + 4;
// };

// var newArray = cloneArrayWithModifiedValues(arr, add4);
// console.log(arr); // [1,2,3,4]
// console.log(newArray); // [5,6,7,8]

// var arr2 = cloneArrayWithModifiedValues([10, 20], add4);
// console.log(arr2); //[14,24]

// ----------
// 2021-12-18
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   // If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//   if (prop !== "tracks" && value !== "") records[id][prop] = value;
//   else if (
//     // If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//     prop === "tracks" &&
//     !records[id][prop].hasOwnProperty(prop) // ČIA TOLIAU...
//   )
//     records[id][prop] = [];

//   {
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// ---------- paskaita

// const a = { a: 2, b: 3, c: { d: 5, g: 6 } };

// function printProperty(obj) {
//   for (const prop in obj) {
//     if (typeof obj[prop] === "object") {
//       printProperty(obj[prop]);
//     } else {
//       console.log(`${prop} = ${obj[prop]}`);
//     }
//   }
// }

// printProperty(a);

// console.log(printProperty(a));

// ----------

// var car = {
//   brand: "ford",
//   model: "fiesta",
//   year: 1999,
//   mileage: 200000,
//   launch: function () {
//     console.log("works!");
//   },
// };

// var car1 = {
//   brand: "opel",
//   model: "corsa",
//   year: 2003,
//   mileage: 100000,
//   launch: function () {
//     console.log("works!");
//   },
// };

// function newCar(brand, model, year, mileage) {
//   var car2 = {};
//   car2.brand = brand;
//   car2.model = model;
//   car2.year = year;
//   car2.mileage = mileage;
//   car2.launch = function () {
//     console.log("works!");
//   };
//   return car2;
// }

// console.log(newCar("vw", "golf", 2020, 500));

// ----------
// 2021-12-18-19
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   // If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//   if (prop !== "tracks" && value !== "") records[id][prop] = value;
//   else if (
//     // If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//     prop === "tracks"
//   ) {
//     console.log(`suveike 369 eilute ${records[id][prop]}`);
//     records[id][prop] = [];
//     records[id][prop].push(value) = records[id]; // ČIA TOLIAU...
//   }

//   return records;
// }

// // test
// console.log(recordCollection["2548"]["artist"]);
// console.log(recordCollection["2548"].hasOwnProperty("artist"));
// // end test

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// console.log(updateRecords(recordCollection, 5439, "tracks", "naujasPav"));

// &&
// !records[id].hasOwnProperty(prop) // ČIA TOLIAU...

// if (condition) {

// } else {

// }

// ----------
// 2021-12-19

// var obj = {
//   age: 25,
//   langs: ["Js", "Java", "Python"],
// };
// var obj2 = {
//   age: 30,
//   databases: ["Mysql", "MongoDb"],
// };

// function showValues(object, propName) {
//   var values = object[propName];
//   if (values) {
//     for (var i = 0; i < values.length; i++) {
//       console.log(values[i]);

//       // currentElement = values[i];
//       // console.log(currentElement);
//     }
//   }
//   // return values;
// }

// console.log(showValues(obj, "langs")); //Js, Java, Python
// console.log(showValues(obj2, "databases")); //Mysql, MongoDb

// ----------
// destytojo

// var obj = {
//   age: 25,
//   langs: ["Js", "Java", "Python"],
// };
// var obj2 = {
//   age: 30,
//   databases: ["Mysql", "MongoDb"],
// };

// function showValues(object, propName) {
//   var values = object[propName];
//   if (values) {
//     var langs = "";
//     for (var i = 0; i < values.length; i++) {
//       langs = langs + values[i];
//       if (i !== values.length - 1) {
//         langs = langs + ", ";
//       }
//     }

//     console.log(langs);
//   }
// }

// showValues(obj, "langs"); //Js, Jave, Python
// showValues(obj, "databases");
// showValues(obj2, "databases"); // Mysql, MongoDb

// ----------
// https://js.en.sdacademy.pro/_slides/object_oriented_programming_in_javascript/introduction.html#/1

// function Movie(title, year, director) {
//   this.title = title;
//   this.year = year;
//   this.director = director;
//   this.info = function () {
//     console.log(this.title + " by " + this.director);
//   };
// }

// var movie1 = new Movie("Filmas 1", 2020, "Petras");
// var movie2 = new Movie("Filmas 2", 2021, "Jonas");

// console.log(movie1);
// console.log(movie2);

// console.log(movie1 instanceof Movie);
// console.log(movie1 instanceof Object);

// ----------

// function Person(name, year) {
//   this.name = name;
//   this.year = year;
//   this.hello = function () {
//     console.log("Hello " + this.name + ", now is " + this.year + " year 🙂");
//   };
// }

// var person1 = new Person("Jonas", 2021);

// person1.hello();

// ----------
// po pertraukos

// function Person(name, year) {
//   this.name = name;
//   this.year = year;
//   this.hello = function () {
//     console.log("Hello " + this.name + ", now is " + this.year + " year 🙂");
//   };
//   this.setName = function (newName) {
//     this.name = newName;
//   };
// }

// var person1 = new Person("Jonas", 2021);
// person1.setName("Petras");
// person1.hello();

// ----------

var movie = function (newTitle, newDirector) {
  let title = newTitle;
  let director = newDirector;
  this.info = function () {
    console.log(title + " by " + director);
  };
  this.setNew = function (x, y) {
    title = x;
    director = y;
  };
  this.getTitle = function () {
    return title;
  };
};

var m = new movie("Titanic", "James Cameron");
m.info();

m.setNew("Hulk", "John");
m.info();

console.log(m.getTitle()); // "Hulk";

// ----------
// po pertraukos

// ----------
// console.log();
