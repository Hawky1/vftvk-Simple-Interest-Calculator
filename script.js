function computeInterest()
{
     var principal = document.getElementById("principal").value;

     //Check if principal  is 0 or negative
    if(principal < 1){
        alert("Please enter a positive value");
        document.getElementById("principal").focus();
        return false;
    }
     var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
     //Calculate Interest
     var interest = (principal * years * rate) /100;
     var year = new Date().getFullYear()+parseInt(years) ;
     var amount = Number(principal) + Number(interest)
     //show the result
    el = document.getElementById("result");
    el.innerHTML = "If you deposit <span class='highlight'>" + principal + "</span><br/>";
    el.innerHTML += "at an interest rate of <span class='highlight'>" + rate + "%" + "</span><br/>";
    el.innerHTML += "you will receive an amount of <span class='highlight'>" + interest + "</span>,<br/>";
    el.innerHTML += "in the year <span class='highlight'>" + year + "</span>.<br/>";

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
}