
      $('#slides').superslides();
      $(".btn-nav").on("click", function() {
        $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
        $(this).toggleClass("animated");
      });