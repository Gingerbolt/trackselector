$( document ).ready(function() {
  console.log("ready");
    $("#submitbtn").click(function(){
      console.log("clicked")


      // var suggestion1 =
      // var suggestion2 =
      var namesuggestion = $("#nameinput").val();

      // Functional/back end variables
      var frontback = parseInt($(".frontinput").val());
      var webbiz = parseInt($("select#webinput").val());
      var popularity = parseInt($("select#popularinput").val());
      var operating = parseInt($("select#osinput").val());
      var size = parseInt($("#companyinput").val());
      console.log(frontback)
      console.log(webbiz)
      console.log(popularity)
      console.log(operating)
      console.log(size)
      //  separate design condition
      if (frontback === 1) {
        $("#suggestion1").text(css)
      }
      // c# condition
      if (size >= 2 && frontback === 2 && webbiz === 2 && operating === 1 || operating === 3 ) {
        $("#suggestion2").text(cnet)
        // java condition
      } else if (size <= 2 && operating === 3 && webbiz === 1 && popularity === 1){
        $("#suggestion2").text(java)
      }

      // Output result variables
      var ruby = "Ruby/Rails";
      var php = "PHP/Drupal";
      var java = "Java/Android";
      var css = "CSS/Design";
      var cnet = "C#/.NET";




      $("#namesuggest").text(namesuggestion)
    console.log("end")
  });
});
