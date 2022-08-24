// a,,,,,,,,iphone calculation and cost of per piece
// 1....increse 
// update phone button 
function phoneNumber(isAdd){
    //  debugger; 
    const phone = document.getElementById("phone-number");
    let needPhone = phone.value;
    if(isAdd == true){
        needPhone = parseInt(needPhone) + 1;
    }
    else if(needPhone > 0){
        needPhone = parseInt(needPhone) -1 ;
    }
    phone.value = needPhone;
    const phoneCost = document.getElementById("phone-total");
    phoneCost.innerText = needPhone * 1219;
}
document.getElementById("phone-plus").addEventListener("click",function(){
    // debugger;
    // const phonePlus = document.getElementById("phone-number");
    // const phoneIncrease = phonePlus.value;
    // phonePlus.value = parseInt(phoneIncrease) + 1;
     phoneNumber(true)
})
// 2....decrese 
document.getElementById("phone-minus").addEventListener("click",function(){
    // const phoneMinus = document.getElementById("phone-number");
    // const phoneDecrease = phoneMinus.value;
    // phoneMinus.value = parseInt(phoneDecrease) -1 ;
    phoneNumber(false)
})



// b function for mobile case  
// b function for mobile case
function mobileCase(addCase){
    // debugger;
    const caseId = document.getElementById("case-number");
    let caseValue = caseId.value;
    if(addCase == true){
        caseValue = parseInt(caseValue) + 1;
    }
    else if( caseValue > 0){
        caseValue = parseInt(caseValue) - 1;
    }
    caseId.value = caseValue
    const caseTotalCost = document.getElementById("case-total");
    caseTotalCost.innerText = caseValue * 59;
}  
// b....iphone case calculation and cost of per piece 
// 1,,,, increase
document.getElementById("case-plus").addEventListener("click",function(){
    // case plus 
    // const casePlus = document.getElementById("case-number");
    // const casePlusValue = casePlus.value;
    // casePlus.value = parseInt(casePlusValue) + 1;
    mobileCase(true);
})
// 2,,,, decrease
document.getElementById("case-minus").addEventListener("click",function(){
      // case plus 
    // const caseMinus = document.getElementById("case-number");
    // const caseMinusValue = caseMinus.value;
    // caseMinus.value = parseInt(caseMinusValue) - 1;
    mobileCase(false)
})



// a,,,,,subtotal 
document.getElementById("sub-total").addEventListener("click",function(){
    console.log("hello don't click me so much !")
});

// b.........tax 
document.getElementById("tax-amount").addEventListener("click",function(){
    console.log("hello don't touch me so much !")
});
// c......total 
document.getElementById("total-price").addEventListener("click",function(){
    console.log("hello world from my side !")
});