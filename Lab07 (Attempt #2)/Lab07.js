var queryString;
var changeDim = new Event('changeDimensions');
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
    javaConnector.toJavaData(str);
}; 
function dispatchDimChange() {
  document.getElementById("back").dispatchEvent(changeDim);
}
var jsConnector = {
    showResult: function (result) {
        document.getElementById('output').innerHTML = result;
    }
};
function getJsConnector() {
    return jsConnector;
};
 function reset() {
            //window.location.assign("https://dpsoccerdude101.github.io/dpsoccerdude101.github.io/Lab07%20(Attempt%20%232)/LoginView.html");
            window.open("https://dpsoccerdude101.github.io/dpsoccerdude101.github.io/Lab07%20(Attempt%20%232)/LoginView.html","_self");
            dispatchDimChange();
};
