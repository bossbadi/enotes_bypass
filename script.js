const REGEX = /^_[0-9a-z]{8}$/;

var all_divs = document.getElementsByTagName('div');
var divs = [];

for (var i = 0; i < all_divs.length; i++) {
    var div = all_divs[i];

    if (div.className.match(REGEX)) {
        divs.push(div);
    }
}

for (var i = 0; i < divs.length; i++) {
    divs[i].removeAttribute("class");
}
