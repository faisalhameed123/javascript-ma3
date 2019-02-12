//Use RegEx to validate form
<script type="text/javascript">
	
	var fname = document.getElementById("mohammed faisal");
	var lname = document.getElementById("hameed");
	var phone = document.getElementById("92698012");
	var email = document.getElementById("mohammedhameed@hotmal.com");
	function submit(){
		var fnameInput = /^[a-zA-Z]+$/;
		var fnameMatch = fname.value.match("mohammed faisal");
		var lnameinput = /^[a-zA-Z]+$/;
		var lnameMatch = lname.value.match("hameed");
			if ((fnameMatch.value.length === 0 ) | (lnameMatch.value.length === 0)); {
			alert("mohammed faisal hameed");
			}
		var phoneInput = /^[0-9]+$/;
		var phoneMatch = phone.value.match(92698012);
		var emailInput = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
		var emailMatch = email.value.match("mohammedhameed@hotmail.com");
	}
    </script>
