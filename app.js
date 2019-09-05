$(document).ready(function(){
    contador = 0
    $("#addMaker").on("click", function(){
      $("#makers").append("<li id=" + contador +"> Juanito </li>")
    })
    $("ul").on("click","li", function(){
      $(this).remove()
    })

})
