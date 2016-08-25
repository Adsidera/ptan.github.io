$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
        $('.nav-tabs a').click(function(e) {
  		e.preventDefault();
  		$(this).tab('show');
	});
     $(function() {
         $("#button").delay(2000).fadeIn(500);
     });

