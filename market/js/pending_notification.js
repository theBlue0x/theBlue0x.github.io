	  // Get the Pending sales count if the user is logged in
	  // Is the user logged in?
	  var loginStatus = sessionStorage.getItem("loginStatus");
	  if (loginStatus == 'loggedin') {// User is logged in, so check to see if there are any Pending Sales
  		// Create localized text for use in the notification menu
  		var translatedPendingSales = $.t("pending_sales_menu_header");
  		var displayPendingMenu = "no";
		var fmlang = localStorage.getItem("fmlang");
        // Yell at the console
        console.log ("User is logged in, checking Pending Sales.");
        $(document).ready(function() {
        //var secretPhrase=sessionStorage.getItem("uselessInformation");
        var secretPhrase = parent.passphrase;
         $.post( "http://127.0.0.1:17776/nxtpass", { requestType:'own_listings', usersSecretPhrase: secretPhrase },              
          function(data) {
                  if (data.query_status == "bad")// If no results are returned
                  {// Open if statement
					  document.getElementById("error-message").innerHTML = "<p class=\"validation_message\">Error: Please ensure that BLX is running.</p><p></p>";
                  }// Close if statement
                  else {// Open else statement - own_listings query did not fail
	                  
                    for (var i = 0; i < data['items'].length; i++) {
                      var pending_count = data.items[i].pending_count;
                      var originalQuantity = data.items[i].quantity; // For use below to see if quantity ordered equals the original quantity listed
					  // Calculate expired or not expired status, since the item_statuses API does not report expired status correctly
					  // Get end datestamp
					  var endDate = escapeHtml(data.items[i].end_timestamp);
					  // Get the current datestamp for comparison
					  var currentTime = Date.now();
					  // Use moment library to convert current time to NXT timestamp
					  var unixEpoch = moment("Thu, 01 Jan 1970 00:00:00 GMT");
					  var nxtEpoch = moment(unixEpoch).add('seconds', 1385294400);
					  var recalculatedEndDate = moment(nxtEpoch).add('seconds', endDate);
					  
						  // Compare the item's end date to the current time
						  if (recalculatedEndDate < currentTime) {
						  // Also set a variable to keep up from looking for buying_ids below, since it's not needed for expired items
						  var expired = "yes";
				            }
				            else { // If item is not expired
							var expired = "no";
				            }
			            			            							                  			                    
	                  // Now see if this item has any Pending sales
	                  if (pending_count > 0 && expired == "no") { // If 1 or more pending sales, each sale gets a separate table row
		                  	  // Set a variable to indicate that the menu will be displayed, because there is at least one pending sale
		                  	  displayPendingMenu = "yes";
                      } // End if pending count > 0
                  };// Close for loop - for each item returned by own_listings
                  }// Close else statement - this all happens if own_listings does not return an error
					// Maybe here is the place to display the Pending Notification if the variable is set to Yes
						if (displayPendingMenu == "yes") {
					      // Yell at the console
					      console.log ("Better display that notification!");
					      var notificationMenuContents = "<div class=\"nav notify-row\" id=\"pending_notice\"><a href=\"ViewYourPendingSales.html?setLng=";
					      notificationMenuContents += fmlang;
					      notificationMenuContents += "\"><button class=\"btn btn-white\"><i class=\"fa fa-shopping-cart text-info\"></i> ";
					      notificationMenuContents += translatedPendingSales;
					      notificationMenuContents += "</button></a></div>";
					      document.getElementById("pendingNotification").innerHTML = notificationMenuContents;
						  }
						else {
					      // Yell at the console
					      console.log ("No need to display that pending notification!");
						  }
                  
				  }, "json"); // Specifies JSON as the expected result
} );
}
else {
      // Yell at the console
      console.log ("User is not logged in, no need to report Pending Sales.");
	
} 