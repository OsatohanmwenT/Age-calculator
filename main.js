/**
 * This code calculates a person's age based on the input of their birthdate.
 * It performs validations on the input values and calculates the age in milliseconds, minutes, days, months, and years.
 */

const AgeButton = document.getElementById("Age")
const form = document.getElementById("age")
const inputDay = document.getElementById("day")
const inputMonth = document.getElementById("month")
const inputYear = document.getElementById("year")
let yearText = document.getElementById("year-text")
let monthText = document.getElementById("month-text")
let dayText = document.getElementById("day-text")
let date = new Date()
var error = false;

AgeButton.addEventListener("click",() =>{
    var pattern = /^[0-9]+$/;
    if(inputDay.value == "") {
        inputDay.classList.add("error-border")
        inputDay.previousElementSibling.classList.add("error")
        inputDay.nextElementSibling.innerHTML = "This field is required";
        error = true;
    }
    else if(!pattern.test(inputDay.value)) {
       inputDay.classList.add("error-border");
       inputDay.previousElementSibling.classList.add("error");
       inputDay.nextElementSibling.innerHTML = "Must be a valid number";
       error = true;
    }
    else if(inputDay.value.length > 2){
        inputDay.classList.add("error-border");
        inputDay.previousElementSibling.classList.add("error");
        inputDay.nextElementSibling.innerHTML = "Only two digits";
        error = true;
    }
    else if(inputMonth.value == "04" || inputMonth.value == "06" || inputMonth.value == "09" || inputMonth.value == "11"){
        if(inputDay.value > 30) {
            inputDay.classList.add("error-border");
            inputDay.previousElementSibling.classList.add("error");
            inputDay.nextElementSibling.innerHTML = "Must be a valid day";
            error = true;
        }
        else{
          inputDay.classList.add("error-border");
          inputDay.previousElementSibling.classList.add("error");
          inputDay.nextElementSibling.innerHTML = "Must be a valid number";
          error = false;
        }
    } 
    else if(inputMonth.value == "01" || inputMonth.value == "03" || inputMonth.value == "05" || inputMonth.value == "07" || inputMonth.value == "08" ||
    inputMonth.value == "10" || inputMonth.value == "12") {
        if(inputDay.value > 31) {
            inputDay.classList.add("error-border");
            inputDay.previousElementSibling.classList.add("error");
            inputDay.nextElementSibling.innerHTML = "Must be a valid day";
            error = true;
        }
        else {
          inputDay.classList.add("error-border");
          inputDay.previousElementSibling.classList.add("error");
          inputDay.nextElementSibling.innerHTML = "";
          error = false;
        }
}
   if(inputMonth.value == ""){
    inputMonth.classList.add("error-border");
    inputMonth.previousElementSibling.classList.add("error");
    inputMonth.nextElementSibling.innerHTML= "This field is required"
    error = true;
   }
   else if(!pattern.test(inputMonth.value)){
    inputMonth.classList.add("error-border");
    inputMonth.previousElementSibling.classList.add("error");
    inputMonth.nextElementSibling.innerHTML = "Must be a valid number";
    error = true;
   }
   else if(inputMonth.value.length > 2){
    inputMonth.classList.add("error-border");
    inputMonth.previousElementSibling.classList.add("error");
    inputMonth.nextElementSibling.innnerHTML = "Only two digits";
    error = true;
   }
   if(inputYear.value.length > 4){
    inputYear.classList.add("error-border")
    inputYear.previousElementSibling.classList.add("error");
    inputYear.nextElementSibling.innerHTML = "Only four digit"
    error = true;
   }
   else if(!pattern.test(inputYear.value)){
    inputYear.classList.add("error-border");
    inputYear.previousElementSibling.classList.add("error");
    inputYear.nextElementSibling.innerHTML = "Must be a valid number";
    error = true;
   }
   else if(inputYear.value == ""){
    inputYear.classList.add("error-border");
    inputYear.previousElementSibling.classList.add("error");
    inputYear.nextElementSibling.innerHTML = "This is field required"
    error = true;
   }
   if(!error) {
    calculate()
   }
   reset()
})

function reset() {
    inputDay.value = ""
    inputMonth.value = ""
    inputYear.value = ""
}
function calculate() {
     let day = date.getDate()
     let month = date.getMonth()
     let year = date.getFullYear()

     let dayDiff = day - inputDay.value
     let monthDiff = month - inputMonth.value

     let yearDiff = year - inputYear.value

     if (yearDiff < 0) {
        console.log("invalid date");
     } 
    else if (monthDiff > 0) { 
        console.log(yearDiff);
    }
     else if (monthDiff === 0 && dayDiff >= 0) { 
        console.log(yearDiff); 
    } else { 
        yearDiff = yearDiff - 1; 
        if (monthDiff <= 0) 
            if (dayDiff > 0) monthDiff = 12 + monthDiff; 
            else monthDiff = 11 - monthDiff; 
    } 
    if (dayDiff < 0) { 
        dayDiff = 30 + dayDiff; 
        monthDiff -= 1; 
    } 
    else if(monthDiff >= 12){
        error = true
    }
    // Show calculated age as output 
    // and invalid if wrong input is given 

    yearText.innerHTML = `${yearDiff}`
    monthText.innerHTML = `${monthDiff}`
    dayText.innerHTML = `${dayDiff}`
} 
