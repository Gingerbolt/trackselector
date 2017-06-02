$( document ).ready(function() {
  console.log("ready");
  // Output result variables
  var ruby = "Ruby/Rails";
  var php = "PHP/Drupal";
  var java = "Java/Android";
  var css = "CSS/Design";
  var cnet = "C#/.NET";
  var intro = "intro to programming"
    $("#submitbtn").click(function(){
      console.log("clicked")


      // var suggestion1 =
      // var suggestion2 =
      var namesuggestion = $("#nameinput").val();

      // Functional/back end variables
      var frontback = parseInt($("select#frontinput").val());
      var webbiz = parseInt($("select#webinput").val());
      var popularity = parseInt($("select#popularinput").val());
      var operating = parseInt($("select#osinput").val());
      var size = parseInt($("select#companyinput").val());

      console.log(frontback);
      console.log(webbiz);
      console.log(popularity);
      console.log(operating);
      console.log(size);
      //  separate design condition
      if (frontback === 1) {
        $("#suggestion1").text(css)
      };
      if (size === 3 && frontback === 2 && operating === 1 || operating === 3 ) {
        $("#suggestion2").text(cnet)
      } else if (size === 2 && frontback === 2){
        $("#suggestion2").text(java)
      } else if (size === 3 &&& frontback === 2) {
        $("suggestion2").text(ruby)
      } else if (frontback === 2 && popularity === 1 && size >= 2){
        $("suggestion2").text(php)
      } else {
        $("suggestion2").text(intro)
      };
      $("#namesuggest").text(namesuggestion);
      $("#answer").show();
    console.log("end")
  });
});
