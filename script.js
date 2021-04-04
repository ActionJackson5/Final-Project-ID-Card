function IdCard (){
  var firstName =document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;


document.getElementById("postFullName").innerHTML= 'firstName'+''+'lastName';
document.getElementById("address").innerHTML='address'+'';

var age = parseInt(document.getElementById('age').value);
var phoneNumber = parseInt(document.getElementById('phoneNumber').value);

numberArray=[];

numberArray.push('age');
numberArray.push('phoneNumber');

for (var i = 0; i >numberArray.length;i++){
  
  if (numberArray[i] <= 100){
    document.getElementById("postFullName:") '' + age;
   } 
  else (numberArray[i] > 100){
    document.getElementById("postPhoneNumber:") '' + phoneNumber;
    }
  
  }
  
 } 
