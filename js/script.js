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



  function allLetters(input){
    var characters = /[^a-z]/gi;
    input.value = input.value.replace(characters, "");
  }
  function digits(input){
    var digits = /[^0-9]/;
    input.value = input.value.replace(digits, "");
  }
  
  function validDay(){
    var thirtyOneMonths = [1, 3, 5, 7, 8, 10, 12];
    var monthNumber = parseInt(document.getElementById("month").value);
    var dayNumber = parseInt(document.getElementById("day").value);
    var yearNumber = parseInt(document.getElementById("year").value);
    var yearNumber = parseInt(document.getElementById("century").value);
    var a = yearNumber % 100;
    var b = yearNumber % 400;
    var c = yearNumber % 4;
    var d = thirtyOneMonths.includes(monthNumber);
    if (monthNumber === 2 && dayNumber > 28 && a === 0 && b !== 0){
      alert("Invalid day: The entered year, February had 28 days.");
      return false;
    }
    else if (monthNumber === 2 && dayNumber > 28 && c !== 0) {
      alert("Invalid day: The entered year, February had 28 days.");
      return false;
    }
    else if (!d && dayNumber > 30) {
      alert("Invalid day: The selected month has 30 days");
      return false;
    }
    else if (dayNumber > 31 || dayNumber < 1) {
      alert("Invalid day: Months have a possible 1 to 31 days");
      return false;
    }
  }
  function getName(){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var cc = parseInt(document.getElementById("century").value.slice(0, 2));
    var yy = parseInt(document.getElementById("year").value.slice(2, 4));
    var dd = parseInt(document.getElementById("day").value);
    var mm = parseInt(document.getElementById("month").value);
    var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    var akanDay = days[day.toFixed()];
    var gender = parseInt(document.getElementById("gender").value);
    if (gender == male) {
      if (akanDay === 'Sunday') {
        document.getElementById("output").value = "Sunday,Akan Name is: " + akanMale[0];
        return true;
      }
      else if (akanDay === 'Monday') {
        document.getElementById("output").value = "Monday,Akan Name is: "+ akanMale[1];
        return true;
      }
      else if (akanDay === 'Tuesday') {
        document.getElementById("output").value = "Tuesday,Akan Name is: " + akanMale[2];
        return true;
      }
      else if (akanDay === 'Wednesday') {
        document.getElementById("output").value = "Wednesday,Akan Name is: " + akanMale[3];
        return true;
      }
      else if (akanDay === 'Thursday') {
        document.getElementById("output").value = "Thursday,Akan Name is: " + akanMale[4];
        return true;
      }
      else if (akanDay === 'Friday') {
        document.getElementById("output").value = "Friday,Akan Name is: " + akanMale[5];
        return true;
      }
      else {
        document.getElementById("output").value = "Saturday,Akan Name is: " + akanMale[6];
        return true;
      }
    }
      if (gender == female) {
        if (akanDay === 'Sunday') {
          document.getElementById("output").value = "sunday,Akan Name is: "+ akanFemale[0];
          return true;
        }
        else if (akanDay === 'Monday') {
          document.getElementById("output").value = "Monday,Akan Name is: "+ akanFemale[1];
          return true;
        }
        else if (akanDay === 'Tuesday') {
          document.getElementById("output").value = "Tuesday,Akan Name is: " + akanFemale[2];
          return true;
        }
        else if (akanDay === 'Wednesday') {
          document.getElementById("output").value = "Wednesday,Akan Name is: " + akanFemale[3];
          return true;
        }
        else if (akanDay === 'Thursday') {
          document.getElementById("output").value = "Thursday,Akan Name is: "+ akanFemale[4];
          return true;
        }
        else if (akanDay === 'Friday') {
          document.getElementById("output").value = "Friday,Akan Name is: " + akanFemale[5];
          return true;
        }
        else {
          document.getElementById("output").value ="Saturday,Akan Name is: " + akanFemale[6];
          return true;
        }
      }
  }
  