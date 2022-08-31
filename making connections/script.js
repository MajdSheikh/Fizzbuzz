console.log("page loaded...");

function hide() {
    var element = document.querySelector(".card-list-item1");
element.remove();
    }
    

function decementvalue() {
    var element = document.getElementById("badge");
    var value = element.innerHTML;
    --value;
    console.log(value);
    document.getElementById("badge").innerHTML = value;

    }



function hide2() {
    var element = document.querySelector(".card-list-item2");
    element.remove();
        
    }

function decementvalue1() {
    var element = document.getElementById("badge");
    var value = element.innerHTML;
    --value;
    console.log(value);
    document.getElementById("badge").innerHTML = value;
    
    }


    function changename(element) {
        var element = document.querySelector(".name");
        element.innerText = "bla bla";
    }
   

    function incrementvalue() {
        var element = document.getElementById("badge1");
        var value = element.innerHTML;
        ++value;
        console.log(value);
        document.getElementById("badge1").innerHTML = value;
    }
        

