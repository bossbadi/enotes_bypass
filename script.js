// unblur answers
document.querySelectorAll('div').forEach((div) => {
    if (div.className.match(/^_[0-9a-z]{8}$/)) {
        div.removeAttribute("class");
    }
});

// remove answer preview
document.getElementsByClassName("c-answer__body")[0].getElementsByTagName("p")[0].remove();

// remove paywall message
document.getElementById("enotes-paywall").parentNode.remove();
