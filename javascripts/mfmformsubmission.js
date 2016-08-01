jQuery( document ).ready(function( $ ) {
	// variable to hold request
	var request;
	// bind to the submit event of our form
	$("#foo").submit(function(event){
		// abort any pending request
		if (request) {
			request.abort();
		}
		// setup some local variables
		var $form = $(this);
		// let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $form.serialize();
		// let's disable the inputs for the duration of the ajax request
		// Note: we disable elements AFTER the form data has been serialized.
		// Disabled form elements will not be serialized.
		$inputs.prop("disabled", true);
		$('#result').text('Sending data...');
		// fire off the request to /form.php
		request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbywNjQrh9-r0h0iApf9UrddPov7nu5nBadkUaYiqZ_Hd7956pJZ/exec",
			type: "post",
			data: serializedData
		});
		// callback handler that will be called on success

		// callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// reenable the inputs
			$inputs.prop("disabled", false);
		});
		// prevent default posting of form
		event.preventDefault();
	});
});
