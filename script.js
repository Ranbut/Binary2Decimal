function convertBinary() {
    binary = document.getElementById("binary_value").value;
    if(binary == ""){
      document.getElementById("decimal_value").innerHTML = "Insert a value (in binary obviously) and i will exibit here.";
    }
    else{
      for (let i = 0; i < binary.length; i++) {
        if (binary[i] == "0" || binary[i] == "1") {
          if (isNaN(binary) != true){
            var decimal = parseInt(binary, 2);
            document.getElementById("decimal_value").innerHTML = "WOW! " + "The decimal value is: "  + decimal;
          }
        } 
        else {
          document.getElementById("decimal_value").innerHTML = "Sorry buddy, binary value contain only 0 and 1.";
        }
      }
    }
  }