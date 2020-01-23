var dutch = document.getElementById("nl_click"),
  english = document.getElementById("en_click"),
  nl_txt = document.querySelectorAll("#nl"),
  en_txt = document.querySelectorAll("#en"),
  nb_nl = nl_txt.length,
  nb_en = en_txt.length;

dutch.addEventListener(
  "click",
  function() {
    language(dutch, english);
    console.log("Nederlands!");
  },
  false
);

english.addEventListener(
  "click",
  function() {
    language(english, dutch);
    console.log("English!");
  },
  false
);

function language(languageOn, languageOff) {
  if (!languageOn.classList.contains("current_lang")) {
    languageOn.classList.toggle("current_lang");
    languageOff.classList.toggle("current_lang");
  }
  if (languageOn.innerHTML === "Nl") {
    console.log("Nederlandse text op het scherm");
    show(nl_txt, nb_nl);
    hide(en_txt, nb_en);
  } else if (languageOn.innerHTML === "En") {
    console.log("English text on screen");
    show(en_txt, nb_en);
    hide(nl_txt, nb_nl);
  }
}

function show(txt, nb) {
  for (var i = 0; i < nb; i++) {
    txt[i].style.display = "block";
  }
}
function hide(txt, nb) {
  for (var i = 0; i < nb; i++) {
    txt[i].style.display = "none";
  }
}
function init() {
  language(dutch, english);
}
init();
