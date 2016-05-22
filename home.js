$(function(){
	$('#title').hover(function(){
		$(this).animate({
			height: '100px'
		}, {
			queue: false,
			duration: 250
		});
	}, function(){
		$(this).animate({
			height: '90px'
		}, {
			queue: false,
			duration: 250
		});
	});
	$('#title').click(function(){
		$('#editor').animate({
			top: '0%'
		}, {
			queue: false,
			duration: 1000
		});
		$('#title').animate({
			top: '100%'
		}, {
			queue: false,
			duration: 1000
		});
	});
});