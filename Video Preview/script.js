console.log("page loaded...");

function myFunction() {
document.getElementById("waves").src = "file.mp4"; 

}
function over(element) {
    document.getElementById("waves").play("mouseover");    
}
    
function out(element) {
    document.getElementById("waves").pause("mouseout");    
}
