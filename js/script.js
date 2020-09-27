var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function selectGender() {
  var gender = document.getElementById("gender").value;
  if (gender == "") {
    alert("Choose your gender");
    return false;
  }
}
function giveCentury() {
  var century = document.getElementById("century").value;
  if (century == "") {
    alert("Enter century");
    return false;
  }
 }
  function giveYear() {
    var year = document.getElementById("year").value;
    if (year == "") {
      alert("Enter year");
      return false;
    }
  }
  function giveMonth() {
    var month = document.getElementById("month").value;
    if (month == "0") {
      alert("Enter month");
      return false;
    }
  }
  function giveDay(){
    var day = document.getElementById("day").value;
    if (day == ""){
      alert("Enter day");
      return false;
    }
  }



  function allLetters(input){
    var characters = /[^a-z]/gi;
    input.value = input.value.replace(characters, "");
  }
  function digits(input){
    var digits = /[^0-9]/;
    input.value = input.value.replace(digits, "");
  }
  
  function validDay(){

    var dayNumber = parseInt(document.getElementById("day").value);
    if (dayNumber > 31 || dayNumber < 1) {
      alert("Invalid day! enter between 1 and 31 days");
      return false;
    }
    
  }

  function getName(){
    var weekDays = ['0', '1', '2', '3', '4', '5', '6'];
    var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var cc = parseInt(document.getElementById("century").value.slice(0, 2));
    var yy = parseInt(document.getElementById("year").value.slice(2, 4));
    var dd = parseInt(document.getElementById("day").value);
    var mm = parseInt(document.getElementById("month").value);
    var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    var weekDays = days[day.toFixed()];
    var gender = parseInt(document.getElementById("gender").value);
    if (gender == male) {
      if (weekDays === '0') {
        document.getElementById("output").value = "Sunday,Akan Name is: " + maleNames[0];
        return true;
      }
      else if (weekDays === '1') {
        document.getElementById("output").value = "Monday,Akan Name is: "+ maleNames[1];
        return true;
      }
      else if (weekDays === '2') {
        document.getElementById("output").value = "Tuesday,Akan Name is: " + maleNames[2];
        return true;
      }
      else if (weekDays === '3') {
        document.getElementById("output").value = "Wednesday,Akan Name is: " + maleNames[3];
        return true;
      }
      else if (weekDays === '4') {
        document.getElementById("output").value = "Thursday,Akan Name is: " + maleNames[4];
        return true;
      }
      else if (weekDays === '5') {
        document.getElementById("output").value = "Friday,Akan Name is: " + maleNames[5];
        return true;
      }
      else {
        document.getElementById("output").value = "Saturday,Akan Name is: " + akanMale[6];
        return true;
      }
    }
      if (gender == female) {
        if (weekDays === '0') {
          document.getElementById("output").value = "sunday,Akan Name is: "+ femaleNames[0];
          return true;
        }
        else if (weekDays === '1') {
          document.getElementById("output").value = "Monday,Akan Name is: "+ femaleNames[1];
          return true;
        }
        else if (weekDays === '2') {
          document.getElementById("output").value = "Tuesday,Akan Name is: " + femaleNames[2];
          return true;
        }
        else if (weekDays === '3') {
          document.getElementById("output").value = "Wednesday,Akan Name is: " + femaleNames[3];
          return true;
        }
        else if (weekDays === '4') {
          document.getElementById("output").value = "Thursday,Akan Name is: "+ femaleNames[4];
          return true;
        }
        else if (weekDays === '5') {
          document.getElementById("output").value = "Friday,Akan Name is: " + femaleNames[5];
          return true;
        }
        else {
          document.getElementById("output").value ="Saturday,Akan Name is: " + femaleNames[6];
          return true;
        }
      }
  }
  