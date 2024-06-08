
function sum(a, b) {

    console.log("Sum = " + (a + b));
    
    return a+b;

}


var a = 5;
var b = 10;
var s = sum(a, b);
console.log('return = ' + (s));

function login(loginId, password) {

    if (loginId == null && password == null) {

        document.write('<h1 style="color:red">loginId is required</h1>' + '<h1 style="color:red">Password is required</h1>')

    } else if (loginId == 'abc@gmail.com' && password == 'pass123') {

        document.write('<h1 style="color:green">Login successfully</h1>');

    } else if (loginId == null || password == 'pass123') {

        document.write('<h1 style="color:red">loginId is required</h1>');

    }else if (loginId == 'abc@gmail.com' || password == null) {

        document.write('<h1 style="color:red">Password is required</h1>');

    }



}

var loginId = null;
var password = 'pass123';

login(loginId, password);
