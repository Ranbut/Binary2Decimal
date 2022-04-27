function convertBinary() {
    binary = document.getElementById("binary_value").value;
    var decimal = parseInt(binary, 2);
    document.getElementById("decimal_value").innerHTML = "Decimal: "  + decimal;
  }