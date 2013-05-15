$(document).ready(function(){
	window.timerseconds = 0;
	window.timersecondstotal = 0;
	window.roundtime = new Array();
	$('body').prepend('<h2 class="timertotal">Total Time: <span>0:00</span></h2><h2 class="timer">Round Time: <span>0:00</span></h2>');
	$('.timertotal').css({'position':'absolute','top':'5px','right':'10px'});
	$('.timer').css({'position':'absolute','top':'25px','right':'10px'});

	var secondscalc = function(time){
		if( (time%60) < 10 ){
			return '0'+ (time%60);
		}else{
			return time%60;
		}
	}

	window.laptimer = function(){
		window.roundtime.push(window.timerseconds);
		window.timerseconds=0;
	}

	setInterval(function(){
		window.timerseconds++;
		window.timersecondstotal++;
		$('.timertotal span').html( Math.floor( (window.timersecondstotal/60) ) + ':' + secondscalc(window.timersecondstotal) );
		$('.timer span').html( Math.floor( (window.timerseconds/60) ) + ':' + secondscalc(window.timerseconds) );
	}, 1000);

	$('.correct button').click(function(){
		window.laptimer();
	});

	var konami = function(){
		var konamiKeys = new Array();
		konamiKeys = [38,38,40,40,37,39,37,39,65,66,13]
		$('body').bind('keydown', function(e){
			console.log(e.keyCode);
			if(konamiKeys[0] == e.keyCode){
				konamiKeys.shift();
				console.log(konamiKeys);
				if(konamiKeys.length < 1){
					setInterval(function(){ $('.correct button').click();},50);
				}
			}
		});
	}
	konami();


	

});