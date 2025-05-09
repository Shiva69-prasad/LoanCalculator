document.getElementById("loan-form").addEventListener("submit",function(e){


    document.getElementById("results").style.display="none"
    document.getElementById("loading").style.display="block";

    setTimeout(calculate,2000);
    e.preventDefault();
})

function calculate(e){
    const amount=document.getElementById("loan_amount")
    const interest=document.getElementById("interest")
    const years=document.getElementById("year")
    const MonthlyPayment=document.getElementById("Monthly Payment")
    const TotalAmount=document.getElementById("Total Amount")
    const TotalInterest=document.getElementById("Total interest")

   

    const principal=parseFloat(amount.value)
    const calculateInterest=parseFloat(interest.value)/100/12;
    const calculatePayment=parseFloat(Year.value)*12;
    const x=Math.pow(1+calculateInterest,calculatePayment);
    const monthly=(principal*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
        MonthlyPayment.value=monthly.toFixed(2);
        TotalAmount.value=(monthly*calculatePayment).toFixed(2);
        TotalInterest.value=(monthly*calculatePayment-principal).toFixed(2);

        
        document.getElementById("results").style.display="block";
        document.getElementById("loading").style.display="none"

    }else{
        showAlert("please enter the amounts");
    }
    e.preventDefault();
}
function showAlert(error){
const errorDiv=document.createElement("div");

errorDiv.className="alert alert-danger";
errorDiv.appendChild(document.createTextNode(error));
const card=document.querySelector(".card")
const heading=document.querySelector(".heading");


card.insertBefore(errorDiv,heading)
setTimeout(function(){
document.querySelector(".alert").remove();
},3000)
}



//console.log(calculatePayment)
 // console.log(amount.value)
