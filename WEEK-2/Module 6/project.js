function handleDeposit() {
    var inputValue = document.getElementById('deposit-input').value;
    var convertedInputValue = convertToNumber(inputValue);

    var depositAmount = document.getElementById('deposit-amount').innerText;
    var convertedDepositAmount = convertToNumber(depositAmount);

    // console.log(typeof convertedInputValue);
    // console.log(typeof convertedDepositAmount);

    var sum = convertedInputValue + convertedDepositAmount;


    setInnerText('deposit-amount',sum);

    var totalAmount = document.getElementById('total-amount').innerText;
    var convertedTotalAmount = convertToNumber(totalAmount);

    var totalSum = convertedInputValue + convertedTotalAmount;

    
    setInnerText('total-amount',totalSum);

    document.getElementById('deposit-input').value ="";
}


function convertToNumber(value) {
    return parseFloat(value);
}


function handleWithdraw(){
    var inputWithdraw = document.getElementById('withdraw-input').value;

    var convertedInputWithdraw = convertToNumber(inputWithdraw);
    var withdrawAmount = document.getElementById('withdraw-amount').innerText;
    var convertedWithdrawAmount = convertToNumber(withdrawAmount);
    var sum = convertedInputWithdraw + convertedWithdrawAmount;
    

    setInnerText('withdraw-amount',sum);

    var totalAmount = document.getElementById('total-amount').innerText;
    var convertedTotalAmount = convertToNumber(totalAmount);

    var totalSum = convertedTotalAmount - convertedInputWithdraw;
    
    setInnerText('total-amount',totalSum);

    document.getElementById('withdraw-input').value='';

    


}





function setInnerText(id,value){
    document.getElementById('id').innerText=value;
}



// ************************************************************************************
// Gias Uddin Vaiya's
/*
function handleDeposit() {
    var convertedInputValue = getConvertedValue("deposit-input", "value");
  
    var converteddepostiteAmount = getConvertedValue(
      "deposit-amount",
      "innerText"
    );
    var sum = convertedInputValue + converteddepostiteAmount;
    setInnerText("deposit-amount", sum);
  
    var convertedTotalAmount = getConvertedValue("total-amount", "innerText");
    var totalSum = convertedInputValue + convertedTotalAmount;
    setInnerText("total-amount", totalSum);
    document.getElementById("deposit-input").value = "";
  }
  
  function getConvertedValue(id, element) {
    if (element == "innerText") {
      var value = document.getElementById(id).innerText;
      return parseFloat(value);
    } else {
      var value = document.getElementById(id).value;
      return parseFloat(value);
    }
  }
  
  function handleWithdraw() {
    var convertedInputWithdraw = getConvertedValue("withdraw-input", "value");
    var convertedWithdrawAmount = getConvertedValue(
      "withdraw-amount",
      "innerText"
    );
    var sum = convertedInputWithdraw + convertedWithdrawAmount;
    setInnerText("withdraw-amount", sum);
    var convertedTotalAmount = getConvertedValue("total-amount", "innerText");
    var totalSum = convertedTotalAmount - convertedInputWithdraw;
    setInnerText("total-amount", totalSum);
    document.getElementById("withdraw-input").value = "";
  }
  function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }
*/

//*************************************************************************************************** 