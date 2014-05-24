/*!
 * jQuery Countdown Plugin v1.0
 * https://github.com/eAdnan007/jquery-countdown
 *
 * Copyright 2014 Mohaimenul Haque Adnan
 * Released under the GPL license
 */
(function($){
	$.fn.countdown = function(options){
		var dwcd_day, dwcd_hour, dwcd_minute, dwcd_second, dwcd_start_time, dwcd_end_time, dwcd_complete = false;
		
		var settings = $.extend({
			start_time		: null,
			end_time		: null,
			show_day		: true,
			show_hour		: true,
			show_minute		: true,
			show_second		: true,
			update_int		: 1,
			progress		: false,
			onComplete		: function(){},
			wrapper 		: function(unit){
				var wrapper = $('<div class="'+unit.toLowerCase()+'_wrapper" />');
				wrapper.append('<span class="counter" />');
				wrapper.append('<span class="title">'+unit+'</span>');

				return wrapper;
			},
			update_progress	: function(progress, element){
				element.attr('aria-valuenow', Math.floor(progress));
				element.css('width', Math.floor(progress)+'%');
				element.text(Math.floor(progress)+'%');
			}
		}, options);

		if(settings.start_time == null) dwcd_start_time = new Date();
		else dwcd_start_time = new Date(settings.start_time);

		if(settings.end_time == null) dwcd_end_time = new Date(new Date() + 25 * 60 * 60 * 1000);
		else dwcd_end_time = new Date(settings.end_time);

		if(settings.show_day)
			dwcd_day = settings.wrapper('Day');
		if(settings.show_hour)
			dwcd_hour = settings.wrapper('Hour');
		if(settings.show_minute)
			dwcd_minute = settings.wrapper('Minute');
		if(settings.show_second)
			dwcd_second = settings.wrapper('Second');

		update();
		setInterval(update, settings.update_int*1000);

		this.append(dwcd_day);
		this.append(dwcd_hour);
		this.append(dwcd_minute);
		this.append(dwcd_second);

		function update(){

			var now		= new Date();
			var left	= dwcd_end_time - now;

			left = Math.floor(left / 1000);
			if(left < 1) left = 0;

			if(!dwcd_complete){
				if(left == 0){
					dwcd_complete = true;
					settings.onComplete();
				}
			}

			var days	= Math.floor(left / (60 * 60 * 24));
			if(settings.show_day){
				dwcd_day.children('.counter').text(days);
				left = left % (60 * 60 * 24);
			}
			
			var hours	= Math.floor(left / (60 * 60));
			if(settings.show_hour){
				dwcd_hour.children('.counter').text(hours);
				left = left % (60 * 60);
			}
			
			var minutes	= Math.floor(left / 60);
			if(settings.show_minute){
				dwcd_minute.children('.counter').text(minutes);
				left = left % 60;
			}
			
			var seconds	= Math.floor(left);
			if(settings.show_second){
				dwcd_second.children('.counter').text(seconds);
			}

			if(settings.progress != false){
				var total_time	= Math.round(dwcd_end_time - dwcd_start_time);
				var spent_time	= Math.round(now - dwcd_start_time);
				var progress	= spent_time/total_time*100;
				if(progress > 100)progress = 100;
				
				settings.update_progress(progress, settings.progress);
			}
		}
	}
})(jQuery);