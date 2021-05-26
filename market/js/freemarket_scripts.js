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

// Set all URLs to use the setLng querystring
function setLanguageQueryStrings() {
	var languageQueryString = localStorage.getItem("fmlang");
	var currentLocation = location;
	var currentURL = currentLocation.pathname;
	
	var logo_link = "index2.html?setLng="+ languageQueryString;
	document.getElementById("logo_link").setAttribute("href",logo_link);

	var home_link = "index2.html?setLng="+ languageQueryString;
	document.getElementById("home_link").setAttribute("href",home_link);

	var view_all_link = "ViewAll.html?setLng="+ languageQueryString;
	document.getElementById("view_all_link").setAttribute("href",view_all_link);

	var view_pending_link = "ViewYourPendingSales.html?setLng="+ languageQueryString;
	document.getElementById("view_pending_link").setAttribute("href",view_pending_link);

	var view_active_link = "ViewYourActiveItems.html?setLng="+ languageQueryString;
	document.getElementById("view_active_link").setAttribute("href",view_active_link);

	var view_sold_link = "ViewYourSoldItems.html?setLng="+ languageQueryString;
	document.getElementById("view_sold_link").setAttribute("href",view_sold_link);

	var view_expired_link = "ViewYourExpiredItems.html?setLng="+ languageQueryString;
	document.getElementById("view_expired_link").setAttribute("href",view_expired_link);

	var search_title_link = "SearchByTitle.html?setLng="+ languageQueryString;
	document.getElementById("search_title_link").setAttribute("href",search_title_link);

	var search_category_link = "SearchByCategory.html?setLng="+ languageQueryString;
	document.getElementById("search_category_link").setAttribute("href",search_category_link);

	var search_tag_link = "SearchByTag.html?setLng="+ languageQueryString;
	document.getElementById("search_tag_link").setAttribute("href",search_tag_link);

	var search_seller_link = "SearchBySellerID.html?setLng="+ languageQueryString;
	document.getElementById("search_seller_link").setAttribute("href",search_seller_link);

	var search_item_link = "SearchByItemID.html?setLng="+ languageQueryString;
	document.getElementById("search_item_link").setAttribute("href",search_item_link);

	var view_purchases_link = "ViewYourPurchases.html?setLng="+ languageQueryString;
	document.getElementById("view_purchases_link").setAttribute("href",view_purchases_link);

	var new_item_link = "ListNewItem.html?setLng="+ languageQueryString;
	document.getElementById("new_item_link").setAttribute("href",new_item_link);

	var converter_link = "convert.html?setLng="+ languageQueryString;
	document.getElementById("converter_link").setAttribute("href",converter_link);

	var shapeshift_link = "shapeshift.html?setLng="+ languageQueryString;
	document.getElementById("shapeshift_link").setAttribute("href",shapeshift_link);

	var coinousd_link = "coinousd.html?setLng="+ languageQueryString;
	document.getElementById("coinousd_link").setAttribute("href",coinousd_link);

	var sendnxt_link = "callNxt.html?setLng="+ languageQueryString;
	document.getElementById("sendnxt_link").setAttribute("href",sendnxt_link);

	var about_link = "about.html?setLng="+ languageQueryString;
	document.getElementById("about_link").setAttribute("href",about_link);

	var help_link = "help.html?setLng="+ languageQueryString;
	document.getElementById("help_link").setAttribute("href",help_link);

	var english_link = currentURL + "?setLng=en";
	document.getElementById("english_link").setAttribute("href",english_link);

	var chinese_link = currentURL + "?setLng=zh";
	document.getElementById("chinese_link").setAttribute("href",chinese_link);

	var spanish_link = currentURL + "?setLng=es";
	document.getElementById("spanish_link").setAttribute("href",spanish_link);

	var italian_link = currentURL + "?setLng=it";
	document.getElementById("italian_link").setAttribute("href",italian_link);

	var german_link = currentURL + "?setLng=de";
	document.getElementById("german_link").setAttribute("href",german_link);

	var japanese_link = currentURL + "?setLng=ja";
	document.getElementById("japanese_link").setAttribute("href",japanese_link);

	var russian_link = currentURL + "?setLng=ru";
	document.getElementById("russian_link").setAttribute("href",russian_link);

	var french_link = currentURL + "?setLng=fr";
	document.getElementById("french_link").setAttribute("href",french_link);

	var hebrew_link = currentURL + "?setLng=he";
	document.getElementById("hebrew_link").setAttribute("href",hebrew_link);

	var lithuanian_link = currentURL + "?setLng=lt";
	document.getElementById("lithuanian_link").setAttribute("href",lithuanian_link);

	var greek_link = currentURL + "?setLng=el";
	document.getElementById("greek_link").setAttribute("href",greek_link);

	var danish_link = currentURL + "?setLng=da";
	document.getElementById("danish_link").setAttribute("href",danish_link);

	var croatian_link = currentURL + "?setLng=hr";
	document.getElementById("croatian_link").setAttribute("href",croatian_link);

	var login_link ="login.html?setLng="+ languageQueryString;
	document.getElementById("login_link").setAttribute("href",login_link);
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