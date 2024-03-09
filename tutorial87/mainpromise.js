import fs from "fs/promises"
fs.readFile("bharat.txt")
let a = await fs.readFile("bharat.txt")
let b = await fs.writeFile("bharat.txt" , "/n this is amaxing promise")
console.log(a.toString())
console.log(path.dirname(myPath));
console.log(path.basename(myPath));