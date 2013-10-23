$(document).ready(function(){
	// Background animation
	$("#CalenderTitle").mouseenter(function(){
		$("#Calender").css("background-color", "#C0C");
	});
	$("#CalenderTitle").mouseleave(function(){
		$("#Calender").css("background-color", "#90C");
	});
	
	// Element animation
	$(".CalenderElement").mouseenter(function(){
		$(this).css("background-color", "#0FF");
	});
	$(".CalenderElement").mouseleave(function(){
		$(this).css("background-color", "#0FC");
	});
});
