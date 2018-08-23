function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function slide(dest) {
    var elmnt = document.getElementById(dest);
    window.scrollTo({top: elmnt.offsetTop - 55, behavior: 'smooth'})
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
