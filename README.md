jquery-countdown
================

It is a very simple and light weight jQuery countdown plugin that supports progressbar and count from days to seconds.

#Usage

##Files to load
You only need to load jQuery and this plugin. For example:

```html
<script src="//code.jquery.com/jquery.js"></script>
<script src="https://rawgit.com/eAdnan007/jquery-countdown/master/jquery.countdown.min.js"></script>
```

##Invoke
On a dom element, call method countdown() with/without your preferences.

```js
$('div').countdown({
	end_time: "2016/06/21 14:27:28 +0600"
});
```

#Supported Properties
Following properties are supported:
`start_time`, `end_time`, `show_day`, `show_hour`, `show_minute`, `show_second`, `update_int`, `progress`, `onComplete`, `wrapper`, `update_progress`

##start_time
Specifies a time where the progressbar should have no progress(zero). You can pass any datetime string that is supported by javascript Data() object. However, I recommend the format, `YYYY/MM/DD hh:mm:ss +TZD`. Where,
YYYY	= Year
MM		= Month
DD		= Day of month
hh		= Hour in 24 hour format
mm		= Minutes
ss		= Minutes
TZD		= Timezone UTC offset

Example:
`2016/06/21 14:27:28 +0600`

##end_time
The countdown completes at this point and progressbar fills 100%. It support same input is `start_time`.

##show_day
Wheather to show day count or not.

##show_hour
Wheather to show hour count or not.

##show_minute
Wheather to show minute count or not.

##show_second
Wheather to show second count or not.

##update_int
Interval between each updates of progressbar and timer.

##progress
There dom element which should display the progressbar. False if you don't want to display.

##onComplete
Function to trigger when countdown is done.

##wrapper
Modify the outer html of each countdown unit. This function receives a single argument, the name of the unit(Day, Hour, Minute, Second).
`Note: It must have an element with class counter; where the count will be displayed.`

##update_progress
Function to process the progress for the preogress bar. It receives two arguments, `Percentage of progress (0-100)` and `The dom element containing the progressbar`.