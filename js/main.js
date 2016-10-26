$(".faq li h2").click(function() {
	$(this).parent().toggleClass("active");
	$(this).parent().children("p").slideToggle("fast");
});