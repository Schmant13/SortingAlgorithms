document.getElementById("frm1").addEventListener("submit", function(e){
    let inputs = document.getElementsByClassName("text");
    console.log("inputs:"+inputs);
    var unsortedList = [];
    for (let i = 0; i<inputs.length; i++){
        unsortedList.push(inputs[i].value);
        console.log(unsortedList[unsortedList.length - 1]);
        }
    }
)

