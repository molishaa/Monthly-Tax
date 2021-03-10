  
function getTax(){
    let monthlyIncome = document.getElementById("salary").value
    let annualSalary= monthlyIncome*12
  
    let maritalstatus = document.getElementById("status").value

    let Tax = 0
   
    
    if (maritalstatus === "unmarried"){
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
     else {
        if(annualSalary <= 450000){
            Tax= annualSalary * 0.01
        }
        else if (annualSalary > 450000 && annualSalary <= 550000 ){
            Tax = 450000*0.01 + (annualSalary -450000)*0.1
         
     }
     else if(annualSalary > 550000 && annualSalary <= 750000){
      Tax= 450000*0.01 + 100000*0.1 + (annualSalary -550000)*0.2
     }
     else if (annualSalary > 750000 && annualSalary <= 2000000)
     {
         Tax= 450000*0.01 + 100000*0.1 +200000*0.2 + (annualSalary -750000)*0.3
     }
     else if (annualSalary > 2000000 )
     {
         Tax= 450000*0.01 + 100000*0.1 +200000*0.2 + 1250000*0.3 +  (annualSalary -2000000)*0.36
     }
     alert(Tax)
     }
    

   // document.getElementById("TaxRate").value=Tax
// <script type = "text/javascript">
    // var TaxRate = Tax/annualSalary*100
    // document.write(TaxRate)

    // var annualTax= Tax
    // document.write(annualTax)

    // var monthlyTax= annualTax/12
    // document.write(monthlyTax)
 }
