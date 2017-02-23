Person = require("./services/Person")
p = new Person("Bibby", "Chung", 20)

fullName = p.getFullName();
age = p.getAge();

console.log("My name is #{fullName} and #{age} years old.")
