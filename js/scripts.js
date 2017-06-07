$( document ).ready(function() {
  var ruby = "Ruby/Rails";
  var php = "PHP/Drupal";
  var java = "Java/Android";
  var css = "CSS/Design or ";
  var cnet = "C#/.NET";
  var intro = "Intro to programming";
    $("#submitbtn").click(function(){
      var namesuggestion = $("#nameinput").val();
      var frontback = parseInt($("select#frontinput").val());
      var webbiz = parseInt($("select#webinput").val());
      var popularity = parseInt($("select#popularinput").val());
      var operating = parseInt($("select#osinput").val());
      var size = parseInt($("select#companyinput").val());
      var experience =
      parseInt($("select#experienceinput").val());
      if (size === 3){
        $("#suggestion2").text(cnet)
      };
      if (size === 2){
        $("#suggestion2").text(java)
      };
      if (size === 1){
        $("#suggestion2").text(ruby)
      };
      if (popularity === 1 && size >= 2){
        $("suggestion2").text(php)
      };
      if (frontback === 1){
        $("#suggestion2").prepend(css)
      };
      if (experience === 1){
        $("#suggestion2").text(intro)
      };
      $("#namesuggest").text(namesuggestion);
      $("#answer").show();
  });
});
