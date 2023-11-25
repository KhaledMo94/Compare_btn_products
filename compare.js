let checkBoxes = document.querySelectorAll(".product-image-price input");
let productsColumn = document.querySelectorAll(".single-column-compare");
let filterBtn = document.getElementById("filterBtn");
let resetBtn = document.getElementById("resetBtn");
let checkNum = 0;

filterBtn.addEventListener("click",function(){
    for(let i=0 ; i<checkBoxes.length ; i++){
        if (checkBoxes[i].checked == true){
            checkNum++;
        }
    }
    if (checkNum>=2){
        for(let i=0 ; i<checkBoxes.length ; i++ ){
            if(checkBoxes[i].checked !== true){
                productsColumn[i].style.display = "none";
            }
        };
    };
});


resetBtn.addEventListener("click",function(){
    for (let i=0 ; i<checkBoxes.length ; i++){
        if (checkBoxes[i].checked == true){
            checkBoxes[i].click();
        }
        productsColumn[i].style.display = "block";
    };
});