


var text= document.getElementById("verified");
    var button=document.getElementById("button");
    var code=document.getElementById("inputbox");
    button.addEventListener("click",()=>{
        if(code.value=="CA/JA1/1811")
            {
              text.innerHTML="Your Student I'd is Verified";
            }else if(code.value==""){
                alert("Please enter a code");
            }else{
                text.innerHTML="Your Student I'd is not Verified";
            }
    });
    