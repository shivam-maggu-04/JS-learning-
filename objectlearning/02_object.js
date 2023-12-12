// const user = new Object(); sigleton

const user = {} // non-sigleton

user.id = "1234";
user.name = "Shivam";
user.isLoggedIn = false;

console.log(user);

const user1 = {
    email: "Shivam@gmail.com",
    fullName: {
        firstName: "Shivam",
        lastName: "Maggu"
    }
}

console.log(user1.fullName)

// it give output in array format
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user)); //[[key,value]]

// check key present in object or not
console.log(user.hasOwnProperty('isLoggedIn'));

const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'd', 5: 'e' };

// const obj3 = {obj1 , obj2};

// const obj3 = Object.assign({},obj1,obj2);

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const arrobj = [
    {
        id: "1234",
        name: "Shivam",
        isLoggedIn: false
    },
    {
        id: "22",
        name: "Ram",
        isLoggedIn: true
    }
];

console.log(arrobj[1].id);

const course = {
    courseName: "Js in Hindi",
    price : 999,
    courseInstructor : "Hitesh"
};
//  destructure the object
const {courseInstructor : instructor} = course;
console.log(instructor);


// Json
// {
//     "id" : "04",
//     "name": "Shivam",
//     "email": "shivam@gmail.com"
// }
// ------- or ----
// [
//     {},
//     {}
// ]




