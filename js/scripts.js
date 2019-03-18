$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var blanks = ["person1", "verb", "actverb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();



  });

});
