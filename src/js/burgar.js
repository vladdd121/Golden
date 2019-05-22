$(document).on("ready",function() {
  // 0 = hide, 1 = visible
  var menuState = 0;
  //if($(".mini-menu-options").is(":hidden")) {
    /* Add a Click event listener to btn-select */
    $(".btn-select").on("click",function() {
      if(menuState === 0) {
        $(".mini-menu-options").slideDown("slow");
        menuState = 1;
      } else {
        $(".mini-menu-options").slideUp("slow");
        menuState = 0;
      }
    });
  //}
  $(".mini-menu-options li").on("click", function() {
    var numHijos = $(this).children().length;
    if(numHijos < 2) {
      // hide the menu
      $(".mini-menu-options").hide("fast");

      var texto = $(this).text();

      $(".menu-select .menu-actual").text(texto);
    }
    menuState = 0;
  });
});