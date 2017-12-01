// setInterval(function(){

// })

var secondHand = document.getElementById('second');
var hourHand = document.getElementById('hour');
var minuteHand = document.getElementById('minute');

// var degrees = 45;
var hour = 0
var minute = 0
var second = 10

var secondCounter = function(){
	second++;
	var secondDegree = (second/ 60) * 360
	secondHand.style.transform = "rotate(" + secondDegree + "deg)";
}

var hourCounter = function(){
	hour++;
	var hourDegree = (hour/12) * 360;
	hourHand.style.transform = "rotate(" + hourDegree + "deg)"
}

var minuteCounter = function(){
	minute++;
	var minuteDegree = (minute/60) * 360;
	minuteHand.style.transform = "rotate(" + minuteDegree + "deg)";
}


setInterval (secondCounter, 1000)
setInterval (hourCounter, 1000)
setInterval (minuteCounter, 1000)
