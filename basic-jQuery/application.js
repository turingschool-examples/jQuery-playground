$(document).ready(function(){
	// alerting the text within the div with the id alert-text
	$("#alert").click(function(){
		alert($("#alert-text").text())
	});

	// replacing text within the div with the id replace-text
	$("#replace").click(function(){
		$("#replace-text").text("Here is the NEW text!")
	});

	// hiding an element
	$("#hide").click(function(){
		$("#red").hide();
	});

	// toggling hide/show on an element
	$("#toggle").click(function(){
		$("#blue").toggle();
	});

	// adding a class to an element
	$("#add-class").click(function(){
		$("#add-class-target").addClass('round');
	});

	// toggling the class of an element
	$("#toggle-class").click(function(){
		$("#toggle-class-target").toggleClass('round');
	});

	// appending to an element
	$("#append").click(function(){
		$("#append-target").append('\<h1>hey!\</h1>')
	});

	// prepending to an element
	$("#prepend").click(function(){
		$("#prepend-target").prepend('\<h1>hey!\</h1>')
	});

	// finding something within an element
	$("#find").click(function(){
		var text = $("#find-target").find('#second').text()
		alert(text)
	});

	// toggling fade of an element
	$("#fade").click(function(){
		$("#fade-target").fadeToggle(1000)
	});

	// sliding an element open/closed
	$("#slide").click(function(){
		$("#slide-target").slideToggle(1000)
	});

	// adding css properties to an element
	$("#change-css").click(function(){
		$("#change-css-target").css({'font-size': 50, 'color': 'purple'})
	});

	// animating an element
	$("#animate").click(function(){
		$("#animate-target").animate({
		    opacity: 0.25,
		    left: "+=500",
		  }, 3000);
	})

	//animate height of an element
	$( "#grow" ).click(function() {
	  $( "#grow-target" ).animate({
	    width: "70%",
	    opacity: 0.4,
	    marginLeft: "0.6in",
	    fontSize: "3em",
	    borderWidth: "10px"
	  }, 1000 );
	});
});
