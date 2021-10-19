var queryString;
var changeDim = new Event('changeDimensions');
function validateLogin() {
    console.log("validateLogin");
  var formElement = document.forms.userForm;
  var formData = new FormData(formElement);
  var keypairs = [];
  let count = 0;
  for (var pair of formData.entries()) {
    if (pair[1] == "" || pair[1] < 0) {
      pair[1] = 0.00;
    }
    keypairs.push(pair[0] + "=" + pair[1]);
    count++;
  }
   queryString = keypairs.join("&");
  console.log(queryString);

  //prevent form submission
  sendToJava(queryString); 
};
 function sendToJava (str) {
    javaConnector.toJavaLogin(str);
}; 

var jsConnector = {
    showResult: function (result) {
        document.getElementById('output').innerHTML = result;
    },
    goToQueryPage: function() {
        //sends to Java code a call to reset screen size
        //window.location.assign("https://dpsoccerdude101.github.io/dpsoccerdude101.github.io/Lab07%20(Attempt%20%232)/Lab07.html");
        window.open("https://dpsoccerdude101.github.io/dpsoccerdude101.github.io/Lab07%20(Attempt%20%232)/Lab07.html","_self");
        dispatchDimChange();
        
    },
    loginFailed: function() {
        alert("You have entered an invalid User ID or Password.");
    }
};
function dispatchDimChange() {
    document.getElementById("back").dispatchEvent(changeDim);
}

function getJsConnector() {
    return jsConnector;
};



// Dispatch the event.
//dispatchEvent(event);