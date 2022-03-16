$(document).ready (function(){
    $(".hello").click(function(){
        $(".bulbul").toggle('hide');
        $(".HIDD1").toggle('show');

    });
});
$(document).ready (function(){
    $(".hello").click(function(){
        $(".bulbul2").toggle('hide');
        $(".HIDD2").toggle('show');

    });
});
$(document).ready (function(){
    $(".hello").click(function(){
        $(".bulbul3").toggle('hide');
        $(".HIDD3").toggle('show');

    });
});








const btn = document.getElementById("btn");

function formReset(){
    document.getElementById("form").reset();
}

btn.addEventListener("click", function(event){
    event.preventDefault();
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");

    if (Name === "" || Email === "") {
       return error.innerHTML = "please enter your name and email!";
    }else if ((Name) && (Email)){
        result.innerHTML = Name + ", we have received your message, thank you for reaching out to us";
    }
    error.innerHTML = "";
    formReset();
});
