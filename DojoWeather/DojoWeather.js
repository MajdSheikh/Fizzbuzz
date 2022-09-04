
function message() {
    alert("Loading weather report...");
}


function hide() {
    var element = document.querySelector(".lastbox");
    element.remove();  
}

    function CelToFeh() {
        var element = document.getElementById("number");
        var cTemp = document.querySelectorAll("#number") //array of spans#number, length = 8
        console.log(cTemp);
        for (var i = 0; i<cTemp.length; i++) {
            var value = (cTemp[i].innerHTML * 9 / 5) + 32
            console.log(value);
            cTemp[i].innerHTML = value;
        }
        
}
