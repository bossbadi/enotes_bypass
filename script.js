// unblur answers
document.querySelectorAll("div").forEach((div) => {
  if (div.className.match(/^_[0-9a-z]{8}$/)) {
    div.removeAttribute("class");
  }
});

// remove answer preview
var paras = document.getElementById("enotes-paywall").parentElement.childNodes;
for (var i = 0; i < paras.length; i++) {
  if (paras[i].tagName == "P") {
    paras[i].remove();
  }
}

// remove paywall message
document.getElementById("enotes-paywall").remove();
