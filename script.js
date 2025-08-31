let display = document.getElementById("disinput");
let button= document.querySelectorAll("#pallate button");

button.forEach(button => {
    button.addEventListener("click", function(){
        let value=button.textContent;
        if(value==="="){
            display.value=eval(display.value);
        }
        else if(value==="C"){
            display.value="";
        }
        else{
            display.value+=value;
        }
    })
    
});