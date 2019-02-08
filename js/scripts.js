$(document).ready(function(){
  $("#formOne").submit(function(event){
    var person1Input = $("input#person1").val();
    var verbInput = $("input#verb").val();
    var actverbInput = $("input#actverb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".verb").text(verbInput);
    $(".actverb").text(actverbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();

  });

});
