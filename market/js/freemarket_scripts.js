// Gets account number from local storage, or redirects user to login page if no account number is in local storage
function setAccountNumber() {
  if (sessionStorage.getItem("RSaccountNumber"))
  {
    var accountBalance = sessionStorage.getItem("accountBalance");
    var username = sessionStorage.getItem("RSaccountNumber");
    document.getElementById("username").innerHTML = username;
    var translatedAccountBalance = $.t("account_balance");
    var translatedAccountDetails = $.t("account_details");
    document.getElementById("accountBalance").innerHTML = translatedAccountBalance + '<br />' + accountBalance;
    document.getElementById("logintext").innerHTML = translatedAccountDetails;
    sessionStorage.setItem("loginStatus","loggedin");
    localStorage.setItem("uselessInformation","XXXXXXXXXX");
    sessionStorage.setItem("uselessInformation","XXXXXXXXXX");
  }
  else {
    sessionStorage.setItem("loginStatus","notloggedin");
  }
};

// Logout script
// Check browser support 
function logout(){
  if (typeof(Storage) != "undefined")
  {
    // Clear 	
    sessionStorage.removeItem("accountNumber");
    sessionStorage.removeItem("RSaccountNumber");
    sessionStorage.removeItem("numericalAccountNumber");
    //sessionStorage.removeItem("uselessInformation"); // Remove this once iframes are finished
    sessionStorage.removeItem("accountBalance");
    window.location.href = "login.html";
  }
  else
  {
    document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage.";
  }
};

// Get variables out of the URL
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
};

// Set the localstorage language parameter
function setLanguage() {
  var languageString=(getQueryVariable("setLng"));
  if (languageString == '') {
    languageString = 'en';
    localStorage.setItem("fmlang",languageString);
  }
  else {
    localStorage.setItem("fmlang",languageString);
  }
};

// Check to see if the localstorage language parameter is already set on launch, reload index page if it is
function checkInitialLanguage() {
  //var languageString=(getQueryVariable("setLng")); // See if user returned to index.html from another page
  if("fmlang" in localStorage){ // If not, and fmlang is set, use it and reload index.html
   var savedLanguage = localStorage.getItem("fmlang");
   window.location.href = "index2.html?setLng=" + savedLanguage;
  }
};

// For cleaning out any script injection attacks

var regex = /(<([^>]+)>)/ig; // Maybe don't need this

var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};		

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}