function bubbleSort(arr){
    for (let i=0; i < arr.length; i++){
        for (j=0; j < arr.length -i -1; j++){
            if (arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
            console.log(arr);  
        } 
    }
return arr;
}

document.getElementById("frm1").addEventListener("submit", function(e){
    let arr = [];
    const inp1 = document.getElementById("inp1").value;
    const inp2 = document.getElementById("inp2").value;
    const inp3 = document.getElementById("inp3").value;
    const inp4 = document.getElementById("inp4").value;
    const inp5 = document.getElementById("inp5").value;
    const inp6 = document.getElementById("inp6").value;
    const inp7 = document.getElementById("inp7").value;
    const inp8 = document.getElementById("inp8").value;
    const inp9 = document.getElementById("inp9").value;
    const inp10 = document.getElementById("inp10").value;

    arr.push(inp1,inp2,inp3,inp4,inp5,inp6,inp7,inp8,inp9,inp10);

    console.log(inp1);

    console.log(arr);

    bubbleSort(arr);
    console.log(arr);
    }
)


