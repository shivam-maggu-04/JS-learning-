// singleton  (In constructor sigleton create)
// object.create

// object literals

const mySym = Symbol("Key1");

const jsUser = {
    name : "Shivam",
    [mySym] : "myKey1",
    age : 25,
    loation : "Rajasthan",
    email: "shivam@gmail.com",
    isLogged: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]); // correct way because if we give {"name": "shivam"}
console.log(jsUser[mySym]);

jsUser["age"] = 26;
Object.freeze(jsUser);
jsUser["name"] = "shivam Maggu";

console.log(jsUser);
