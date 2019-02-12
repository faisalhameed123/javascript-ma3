//Use RegEx to validate form:


//validate tlf nr
function validate(){
   var str="92698012";
   var pat=/^[0-9]{8}$/;
   var res=pat.test(str);
   console.log(res);
   if(res==true){
       console.log("the number is valid");
   }
   else{
       console.log("the number is invalid");
   }
}
validate();


//validate email

<p id="mymail"></p>

<script>
    function validateEmail(elementValue){
    var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }
    document.getElementById("mymail").innerHTML=validateEmail("mohammedhameed@hotmail.com");

</script>



//validate name
<p id="myname"></p>

<script>
    function validateName(elementValue){
    var namePattern=/^[a-zA-Z]+$/;
        return namePattern.test(elementValue);
    }
    document.getElementById("myname").innerHTML=validateName("faisal hameed");

</script>
