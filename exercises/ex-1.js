"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "49.00",
  },
];

//for loop
// for (let index = 0; index < courses.length; index++) {
//   const course = courses[index];
//   console.log(course);
// }

//for of loop
// for (const course of courses) {
//   console.log(course);
// }

// When does the PROG200 course start?
let prog200Course = courses.find(function(course) {
  return course.CourseId === "PROG200";
});
console.log(`The PROG200 course starts: ${prog200Course.StartDate}`);

// for (const course of courses) {
//   if (course.CourseId === "PROG200") {
//     console.log(`The PROG200 course starts:  ${course.StartDate}`);
//   }
// }


// What is the title of the PROJ500 course?
let proj500Course = courses.find(course => course.CourseId === "PROJ500");
console.log(`The title of the PROJ500 course is ${proj500Course.Title}`);

// for (const course of courses) {
//   if (course.CourseId === "PROJ500") {
//     console.log(`The title of the PROJ500 course is ${course.Title}`);
//   }
// }


// What are the titles of the courses that cost $50 or less? 
let inexpensiveCourses = courses.filter(course => Number(course.Fee) <= 50);
console.log("Inexpensive courses:");
inexpensiveCourses.forEach(course => console.log(course.Title));


// for (const course of courses) {
//   if (Number(course.Fee) <= 50) {
//     console.log(`Inexpensive course: ${course.Title}`);
//   }
// }

// let inexpensiveCourseTitles = [];

// for (const course of courses) {
//   if (Number(course.Fee) <= 50) {
//     inexpensiveCourseTitles.push(course);
//   }
// }

// console.log("Inexpensive course list: ",inexpensiveCourseTitles);

// let filmName = "Bobbie Boots";
// let result = filmName.indexOf("Bob");
// console.log(result);

// What classes meet in "Classroom 1"?
let classroom1Courses = courses.filter(course => course.Location === "Classroom 1");
console.log("Courses in Classroom 1:");
classroom1Courses.forEach(course => console.log(course.Title));