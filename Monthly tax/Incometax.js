  
function getTax(){
    let monthlyIncome = document.getElementById("salary").value
    let annualSalary= monthlyIncome*12
  
    let maritalstatus = document.getElementById("status").value

    let Tax = 0
   
    
    if (maritalStatus === "unmarried"){
        if (annualSalary <= 400000){
           Tax = annualSalary * 0.01
            
    
        }else if (annualSalary > 400000 && annualSalary <= 500000){
            Tax  = 400000*0.01 + (annualSalary - 400000)*0.1
           
        }
        else if (annualSalary > 500000 && annualSalary <= 700000){
            Tax  = 400000*0.01 + 100000*0.1 + (annualSalary - 500000)*0.2
            
        }
        else if (annualSalary > 700000 && annualSalary <= 2000000){
            Tax  = 400000*0.01 + 100000*0.1 + 200000*0.2 + (annualSalary - 700000)*0.3  
            
        }
        else if (annualSalary > 2000000){
            Tax  = 400000*0.01 + 100000*0.1 + 200000*0.2 + 1300000*0.3 + (annualSalary - 2000000)*0.36 
           
        }
        alert(Tax)
    }
    // else (maritalStatus === "unmarried"){
    

    document.getElementById("TaxRate").value=Tax
 }