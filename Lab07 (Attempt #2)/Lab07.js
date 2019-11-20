var queryString;
function validateForm() {
  var formElement = document.forms.Invoice;
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
    javaConnector.toJava(str);
}; 

var jsConnector = {
    showResult: function (result) {
        document.getElementById('output').innerHTML = result;
    }
};
function getJsConnector() {
    return jsConnector;
};
/* function Reset() {
    document.getElementById("notDream").setAttribute("disabled", "");
    document.getElementById("dream").setAttribute("type", "submit");
    document.getElementById("notDream").removeAttribute("type", "submit");
    document.getElementById("dream").removeAttribute("disabled", "");
};
function remove() {
  document.getElementById("notDream").removeAttribute("disabled");
  document.getElementById("notDream").setAttribute("type", "submit");
  called = true;
};
const form = document.getElementById("RealEstateForm");
form.onreset = Reset; */