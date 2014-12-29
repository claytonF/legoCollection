$('#filter-toggle').on('click',function(){

	var setsClass = $('#filters').css('display');
	console.log(setsClass);
	if(setsClass == "none") {
		$('#filters').slideDown();
	}
	else {
		$('#filters').slideUp();
	}
	
	//var setsPosition = $('#sets').css('left');
	
	// var setsClass = $('#sets').attr('class');
	// console.log(setsClass);

	// if(setsClass == "slide-back" || !setsClass) {
	// 	$('#sets').addClass("slide-out");
	// 	$('#sets').removeClass("slide-back");
	// 	$('#filters').addClass("slide-out");
	// }
	// else {
		
	// 	$('#sets').removeClass("slide-out");
	// 	$('#sets').addClass("slide-back");
	// 	$('#filters').fadeOut(300);
	// }
	
		
	
	
	
});