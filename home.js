titleScale = 1.1;
titleSpeed = 250;

$(function(){
	$('#title').hover(function(){
		var newHeight = $(this).height() * titleScale;
		$(this).animate({
			height: newHeight + 'px'
		}, {
			queue: false,
			duration: titleSpeed
		});
	}, function(){
		var newHeight = $(this).height() / titleScale;
		$(this).animate({
			height: newHeight + 'px'
		}, {
			queue: false,
			duration: titleSpeed
		});
	});
	$('#title').click(function(){
		$('#editor').animate({
			top: '0%'
		}, {
			queue: false,
			duration: 'slow'
		});
		$('#title').animate({
			top: '100%'
		}, {
			queue: false,
			duration: 'slow'
		});
		window.location.hash = '#editor';
	});
});