const message=document.getElementById("message");
const count=document.getElementById("count");
const error=document.getElementById("error")

message.addEventListener("input",function()
{
    if(message.value.length > 200){
        message.value=message.value.substring(0,200);
        error.textContent="Your character count is over! Maximum 200 characters allowed.";
    }
    else{
        error.textContent="";
    }
    count.textContent=message.value.length;
});