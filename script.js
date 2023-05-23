let boldText = document.querySelectorAll('strong');
function highlight() {
    //Write your code here
    // console.log("Hovered on element.")
    for(let i=0; i<boldText.length; i++){
        boldText[i].style.color = "green";
    }

}


function return_normal() {
    //Write your code here
    // removeEventListener(onmouseout, highlight())
    for(let i=0; i<boldText.length; i++){
        boldText[i].style.color = "black";
    }
    
}
