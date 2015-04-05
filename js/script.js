$(document).ready(function() {
	$("li").on("mouseenter", function() {
		$(this).addClass("highlight");
	}).on("mouseleave", function() {
		$(this).removeClass("highlight");
	});

	$(".project img").on("mouseenter", function() {
		$(this).animate({"opacity": ".5"});
	}).on("mouseleave", function() {
		$(this).animate({"opacity": "1"});
	});
});