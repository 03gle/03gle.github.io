window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    var header = this.document.getElementById("header")
    var navItems = this.document.getElementById("nav").children;
    var name = this.document.getElementById("personName")

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r)

    var scrollGate = 40 //starts transition when you passed this amount of pixels

    var lightColor = rs.getPropertyValue("--main-bg-color")
    var darkColor = rs.getPropertyValue("--dark-text-color")

    //console.log(scroll)
    //if (scroll > scrollGate) {
    //    header.style.backgroundColor = lightColor
    //    header.style.color = darkColor
    //    header.style.position = "sticky";


    //    //change the color of the name
    //    name.style.color = darkColor
    //    //change link color
    //    for (let item of navItems) {
    //        item.style.color = darkColor
    //    }
    //}

    //else {
    //    header.style.backgroundColor = "transparent"
    //    header.style.color = lightColor
    //    header.style.position = "sticky";

    //    name.style.color = lightColor
    //    //change link color
    //    for (let item of navItems) {
    //        item.style.color = darkColor
    //    }
    //}
})