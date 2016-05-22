textColor = 'white';
mainColor = '#00b4ff';
editorColor = '#4b4b4b';

$(function(){
	// Set colors
	$('*').css('color', textColor);
	$('body').css('background', mainColor);
	$('#begin, #editor').css('background', editorColor);
	
	// Grow when hovered
	$('#begin').hover(function(){
		$(this).animate({
			height: '110px'
		}, {
			queue: false,
			duration: 250
		});
	}, function(){
		$(this).animate({
			height: '100px'
		}, {
			queue: false,
			duration: 250
		});
	});
	
	// Move editor when clicked
	$('#begin').click(function(){
		$('#editor').animate({
			bottom: '0%'
		}, {
			queue: false,
			duration: 1000
		});
		$('#begin').animate({
			bottom: '100%'
		}, {
			queue: false,
			duration: 1000
		});
	});
});