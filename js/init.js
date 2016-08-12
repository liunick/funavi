/*
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});*/

$(document).ready(function(){
      $('.carousel').carousel();

      var options = [
        {selector: '#content1', offset: 50, callback: function(el) {
          $('#content1').fadeTo(2000, 1, function(){});
        } },
        {selector: '#content2', offset: 20, callback: function(el) {
          $('#content2').fadeTo(2000, 1, function(){});
        } },
        {selector: '#content3', offset: 80, callback: function(el) {
          $('#content3').fadeTo(2000, 1, function(){});
        } },
        {selector: '#content4', offset: 20, callback: function(el) {
          $('#content4').fadeTo(2000, 1, function(){});
        } },
        {selector: '#content5', offset: 50, callback: function(el) {
          $('#content5').fadeTo(2000, 1, function(){});
        } }
      ];
      Materialize.scrollFire(options);
});


(function($){
  $(function(){  
	    console.log("Hello"); 
	    $(".parallax").parallax();
	    $("#arrow-1").click(function (){
	    	$('html, body').animate({
        		scrollTop: $( $.attr(this, 'href') ).offset().top
    		}, 1000);
        }); 

  }); // end of document ready
})(jQuery); // end of jQuery name space

