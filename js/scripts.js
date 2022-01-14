var python = 0;
var ruby = 0;
var javascript = 0;
var c = 0;

function addTo(input) {
  if (input === 1) {
    python += 1;
  } else if (input === 2) {
    ruby += 1;
  } else if (input === 3) {
    javascript += 1;
  } else if (input === 4) {
    c += 1;
  }
}

function compareLang(lang1, lang2, lang3, lang4) {
  $("#python").hide();
  $("#ruby").hide();
  $("#javascript").hide();
  $("#c").hide();
  if (lang1> lang2 && lang1 > lang3 && lang1 > lang4) { //does python have most
    $("#python").show();
  } else if (lang2 > lang1 && lang2 > lang3 && lang2 > lang4) { // does ruby have most
    $("#ruby").show();
  } else if (lang3 > lang1 && lang3 > lang2 && lang3 > lang4) { // does js have most
    $("#javascript").show();
  } else if (lang4 > lang1 && lang4 > lang2 && lang4 >lang3){ // does c# have most
    $("#c").show();
  } else if (lang1 === lang2 || lang1 === lang3 || lang1 === lang4) {
    $("#python").show();
  } else if (lang2 === lang3 || lang2 === lang4) {
    $("#ruby").show();
  } else if (lang3 === lang4) {
    $("#javascript").show();
  } else {
    return "Error"
  }
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    addTo(parseInt($("#biome").val()));
    addTo(parseInt($("#genre").val()));
    addTo(parseInt($("#time").val()));
    addTo(parseInt($("#fruit").val()));
    addTo(parseInt($("#activity").val()));

    compareLang(python, ruby, javascript, c);
    python = 0;
    ruby = 0;
    javascript = 0;
    c = 0;
  })
})