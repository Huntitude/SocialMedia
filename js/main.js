// My Groups 
function myGroups() {
    var x = document.getElementById("activities-dropdown");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// My Events
function myEvents() {
    var x = document.getElementById("activities-dropdown2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//My Photos
function myPhotos() {
    var x = document.getElementById("activities-dropdown3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// alert box
function hide(target) {
    document.getElementById(target).style.display = 'none';
}

// hamburger menu
function HamburgerFunction(x) {
    x.classList.toggle("change");
}

// responsive navigation bar
let toggleNavStatus = false;

let toggleNav = function () {
    let getNavBar = document.querySelector(".ResponsiveNav");

    if (toggleNavStatus == false) {
        getNavBar.style.display = "block";
        toggleNavStatus = true;
    }
    else if (toggleNavStatus == true) {
        getNavBar.style.display = "none";
        toggleNavStatus = false;
    }
}

//News Page read more extend
function myNews1() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}


