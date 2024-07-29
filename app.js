// OPERATORS
// Arithmetic Operators
// document.write(50 % 6);

// Comparison Operators
// let num1 = 50;
// let num2 = 40;
// let num3 = 150;
// // let int_num2 = parseInt(num2);

// // document.write(num1 + int_num2);

// if(num1 > num2){
//            document.write('True');
// }else if(num1 < num2){
//            document.write('False');
// }else{
//            document.write('Equal');
// }

document.getElementById('light').style.display = "none";

dark.addEventListener('click', function(){
           document.body.style.backgroundColor = "#343a40";
           document.getElementById('h1').style.color = "#eee";
           document.getElementById('dark').style.display = "none";
           document.getElementById('light').style.display = "inline";
});
light.addEventListener('click' ,function(){
           document.body.style.backgroundColor = "#f8f9fa";
           document.getElementById('h1').style.color = "#000";
           document.getElementById('dark').style.display = "inline";
           document.getElementById('light').style.display = "none";
});



let my_date = new Date();
// document.write(my_date);

//Get Year
let currentYear = my_date.getFullYear();
document.write(currentYear);

//Get Month
let currentMonth = my_date.getMonth()+1;
document.write(currentMonth);

//Get Days of the Month
let currentDaysOfMonth = my_date.getDate();
document.write(currentDaysOfMonth);

//Get Days of the Week
let currentDaysOfWeek = my_date.getDay();
let myDaysOfWeek = Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday');

document.write(myDaysOfWeek[currentDaysOfWeek]);

let currentSeconds = my_date.getSeconds();
document.write(currentSeconds);

let currentMinute = my_date.getMinutes();
document.write(currentMinute);

let currentHours = my_date.getHours();
document.write(currentHours);




//MY TIME
setInterval(myTimer, 1000);

function myTimer(){
           let my_time = new Date();
           let display_time = my_time.toLocaleTimeString();
           document.getElementById('ctime').innerHTML = display_time;
}



// if(currentHours >= 10 && currentMinute <= 45){
//            document.body.style.display = 'none';
//            document.getElementById('body').style.display = 'none';
// }

function confirmation(){
           if(confirm('Are you sure you want to apply?')){
                      
           }else{

           }
}


function validateForm(){
           let fullname = document.forms["myForm"] ["fname"].value;
           let email = document.forms["myForm"] ["email"].value;

           if(fullname == ""){
                      // alert('Input fullname');
                      document.getElementById('fname-error').innerHTML = "Input fullname";
                      return false;
           }
           
           if(email == ""){
                      // alert('Input fullname');
                      document.getElementById('email-error').innerHTML = "Input email address";
                      return false;
           }
}

// let other_course = document.forms["myForm"] ["course"].value;

// if(other_course === "others"){
//            document.getElementById('hidden-div').style.display = "block";
// }else{
//            document.getElementById('hidden-div').style.display = "none";
// }

// LOOP
// While Loop


// Do While Loop
// For Loop
