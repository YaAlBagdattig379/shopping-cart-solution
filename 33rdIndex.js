// a,,,,,,,,iphone calculation and cost of per piece
// 1....increse 
// update phone button 
function phoneNumber(isAdd){
    const phone = document.getElementById("phone-number");
    const needPhone = phone.value;
    if(isAdd == true){
        phone.value = parseInt(needPhone) + 1;
        // phonePlus.value = parseInt(phoneIncrease) + 1;
    }
    else if(needPhone > 0){
        phone.value = parseInt(needPhone) -1 ;
    }
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
// b....iphone case calculation and cost of per piece 
// 1,,,, increase
document.getElementById("case-plus").addEventListener("click",function(){
    console.log("the plus button of case are clicked by myself ! ")
})
// 2,,,, decrease
document.getElementById("case-minus").addEventListener("click",function(){
    console.log("the minus button of case are clicked by myself ! ")
})