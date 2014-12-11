(function($) {
	jQuery.fn.stopwatch = function() {
		var clock = $(this);
		var timer = 0;
		
		clock.addClass('stopwatch');
		
		// This is bit messy, but IE is a crybaby and must be coddled. 
		clock.html('<div class="display" style="font-size: 100px; font-weight: bold;" ><span class="min">00</span>:<span class="sec">00</span></div>');
		clock.append('<input type="button" class="start" value="Iniciar" style="border:solid; border-color:#CCCCCC; color:#CCCCCC; padding: 3px; border-width: 1px; width: 50px; background-color: #FFFFFF;"/>');
		clock.append('<input type="button" class="stop" value="Parar" style="border:solid; border-color:#CCCCCC; color:#CCCCCC; padding: 3px; border-width: 1px; width: 50px; background-color: #FFFFFF;"/>');
		clock.append('<input type="button" class="reset" value="Reiniciar" style="border:solid; border-color:#CCCCCC; color:#CCCCCC; padding: 3px; border-width: 1px; width: 50px; background-color: #FFFFFF; margin-left: 5px; margin-bottom: 5px;"/>');
		
		
		// We have to do some searching, so we'll do it here, so we only have to do it once.
		var h = clock.find('.hr');
		var m = clock.find('.min');
		var s = clock.find('.sec');
		var start = clock.find('.start');
		var stop = clock.find('.stop');
		var reset = clock.find('.reset')
		
		stop.hide();

		start.bind('click', function() {
			timer = setInterval(do_time, 1000);
			stop.show();
			start.hide();
		});
		
		stop.bind('click', function() {
			clearInterval(timer);
			timer = 0;
			start.show();
			stop.hide();
		});
		
		reset.bind('click', function() {
			clearInterval(timer);
			timer = 0;
			h.html("00");
			m.html("00");
			s.html("00");
			stop.hide();
			start.show();
		});
		
		function do_time() {
			// parseInt() doesn't work here...
			hour = parseFloat(h.text());
			minute = parseFloat(m.text());
			second = parseFloat(s.text());
			
			second++;
			
			if(second > 59) {
				second = 0;
				minute = minute + 1;
			}
			if(minute > 59) {
				minute = 0;
				hour = hour + 1;
			}
			
			h.html("0".substring(hour >= 10) + hour);
			m.html("0".substring(minute >= 10) + minute);
			s.html("0".substring(second >= 10) + second);
		}
	}
})(jQuery);