$(document).on('ready',function(){

	$(window).on('load',function(){
		var $container = $('#sets');
		// initialize
		$container.masonry({
		  itemSelector: '.set'
		});

		var msnry = $container.data('masonry');
	
		

	});


});