function reverse() {
    let num = parseInt(document.getElementById("num").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(num)) {
        resultDiv.innerText = "Please enter a valid number";
        resultDiv.style.color = "red";
        return;
    }
     let result = 0;
    while (num > 0) {
        let digit = num % 10;
      result =result * 10 + digit;
        num = Math.floor(num / 10);
    }
resultDiv.innerText = `Converted value: ${result}`;
}
    
