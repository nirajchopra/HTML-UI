document.write("<h3>Example of forinloop</h3>");
console.log("Example of forinloop");

var myObj = { "name": "Modi", "age": 70, "UP": null }

console.log(myObj.name);
document.write('<h1>' + myObj.name + '</h1>');

for (const x in myObj) {

    document.getElementById("demo").innerHTML += myObj[x] + '<br>';
   
}

var emp = {

    "name": "EmpName",
    "company": "NCS",
    "salary": 5000,
    "department":"developer"

}