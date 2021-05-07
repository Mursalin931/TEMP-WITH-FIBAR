// alert('hello')
var btn = document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
    var farn = document.getElementById('farn').value;
    var calcias = (farn - 32) * (5 / 9);
    calcias = parseFloat(calcias.toFixed(2))

    // alert("Calcias is : " + calcias + " Deg");
    var cals = document.getElementById("pid");
    cals.innerHTML = "Calcius Is : " + calcias + " deg";

})
var btn = document.getElementById('btn1').addEventListener('click', (event) => {
    event.preventDefault();
    var calsy = document.getElementById('cals').value;
    var farenHeight = (calsy * 9 / 5) + 32;
    farenHeight = parseFloat(farenHeight.toFixed(4))

    if (farenHeight <= 98) {
        var farns = document.getElementById("pid");
        farns.innerHTML = "Its Normal : " + farenHeight + " deg";

    } else if (farenHeight >= 98 && farenHeight <= 100) {

        var farns = document.getElementById("pid");
        farns.innerHTML = "fibar : " + farenHeight + " deg";
    } else if (farenHeight >= 100 && farenHeight <= 104) {

        var farns = document.getElementById("pid");
        farns.innerHTML = "you need to dr. it's high : " + farenHeight + " deg";
    } else {
        var farns = document.getElementById("pid");
        farns.innerHTML = "faren-Height Is : " + farenHeight + " deg";
    }


    // alert("Calcias is : " + calcias + " Deg");


})