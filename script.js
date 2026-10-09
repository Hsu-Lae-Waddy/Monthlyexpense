const monthly_income =document.getElementById("monthly-income");
const extra_income =document.getElementById("extra-income");
const update_income = document.getElementById("update-income");
const totalIncomeForThisMonth = document.getElementById("totalincomeforthismonth");
let balanceUpdate = 0;
update_income.addEventListener("click", () => {

    const monthlyIncome =
        Number(monthly_income.value);

    const extraIncome =
        Number(extra_income.value);

    balanceUpdate =monthlyIncome + extraIncome;

    console.log(balanceUpdate);

    totalIncomeForThisMonth.innerText =
        balanceUpdate;

});

const electricitybill=document.getElementById("electricity");
const waterbill=document.getElementById("water");
const rentbill=document.getElementById("rent");
const totalmonlthybillsforthismonth= document.getElementById("totalmonlthybillsforthismonth");
const update_monthlybills=document.getElementById("update-monthlybills");
let thismonthbills=0;
update_monthlybills.addEventListener("click",()=>{
    const electricitybillamount=Number(electricitybill.value);

    const waterbillamount= Number(waterbill.value);

    const rentbillamount=Number(rentbill.value);

    thismonthbills= electricitybillamount+waterbillamount+rentbillamount
    console.log(thismonthbills);

    totalmonlthybillsforthismonth.innerText=
    thismonthbills;

})

const shopping_amount=document.getElementById("shopping-amount");
const update_doshopping =document.getElementById("update-doshopping");
const totalgroceryExpensesforthismonth= document.getElementById("totalgroceryExpensesforthismonth");

let update_doshoppingamount;
update_doshopping.addEventListener("click",()=>{
    update_doshoppingamount=Number(shopping_amount.value)
    totalgroceryExpensesforthismonth.innerHTML=update_doshoppingamount;
})

