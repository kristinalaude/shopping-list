// select products purchased
$(document).ready(function() {
	$('.itemlist').on('click', '.checkbox i', function() {
		$(this).closest(".item").toggleClass('strikethrough');
		$(this).closest(".fa").toggleClass('fa-check-square');
	});

// add items
	$('.additem').on('click', '.addbutton', function() {
	//$('.addbutton').click(function() {
		if ( $('input#myText').val().trim().length == 0 ) {
			alert ('Please enter text');
		} else {
			$(".itemlist").append('<li class="item"><div class="checkbox"><i class="fa fa-square-o"></i></div>' + $('input#myText').val() + '<i class="fa fa-trash"></i></li>');
			$('input#myText').val(""); //make sure box is clean after new addition 
		};
		
	});

// delete items
	$('.itemlist').on('click', '.fa-trash', function() {
		$(this).closest(".item").remove();
	});

});