let outputScreen = document.getElementById("outputscreen");

function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }  catch (error) {
        outputScreen.value = "Error";
    }
}

function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}