// /
function Add()
{


 var val1Str = document.getElementById("operand1").value;
  var val2Str = document.getElementById("operand2").value;
    var val1 = parseFloat(val1Str);
var val2 = parseFloat(val2Str);
     var result = val1+val2;
           document.getElementById("output").innerText = val1Str.concat(" + ", val2Str," = ",result.toString());
            }

 function Multiply() {
 var val1Str = document.getElementById("operand1").value;
 var val2Str = document.getElementById("operand2").value;
 var val1 = parseFloat(val1Str);   var val2 = parseFloat(val2Str);
   var result= val1*val2;
  document.getElementById("output").innerText = val1Str.concat(" * ", val2Str, " = ", result.toString());
            }

 function Divide() {
  var val1Str = document.getElementById("operand1").value;
  var val2Str = document.getElementById("operand2").value;
    var val1 = parseFloat(val1Str);
   var val2 = parseFloat(val2Str);
     var result = val1 / val2;
                document.getElementById("output").innerText = val1Str.concat(" / ", val2Str, " = ", result.toString());
            }

            
 function Clear() {
   document.getElementById("output").innerText = "";
  document.getElementById("operand1").innerText = "";
  document.getElementById("operand2").innerText = "";
  }
       