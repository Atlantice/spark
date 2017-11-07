$("li").each(function() {
  $(this).click(function(){
    $(this).find("p").toggle();
  })
});
