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
  if (lang1> lang2 && lang1 > lang3 && lang1 > lang4) {
    $("#python").show();
  } else if (lang2 > lang1 && lang2 > lang3 && lang2 > lang4) {
    $("#ruby").show();
  } else if (lang3 > lang1 && lang3 > lang2 && lang3 > lang4) {
    $("#javascript").show();
  } else if (lang4 > lang1 && lang4 > lang2 && lang4 >lang3){
    $("#c").show();
  }
}