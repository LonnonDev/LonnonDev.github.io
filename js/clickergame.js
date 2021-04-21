var Ahegaos = 0
var Censor = 0
var Currency = " Wholesome Bucks"

function CensorImage() {
	if (Censor == 0) {
		Censor = 1
		Currency = " Ahegaos"
		document.getElementById("censor").innerHTML = "Unlewd"
		document.getElementById("Image").src = "/images/aheago.jpg"
		var AhegaoText = "You have " + parseInt(Ahegaos) + Currency
		document.getElementById("AT").innerHTML = AhegaoText
	} else {
		Censor = 0
		Currency = " Wholesome Bucks"
		document.getElementById("censor").innerHTML = "Lewd"
		document.getElementById("Image").src = "/images/censored.png"
		var AhegaoText = "You have " + parseInt(Ahegaos) + Currency
		document.getElementById("AT").innerHTML = AhegaoText
	}
}

function Click() {
	Ahegaos++
	var AhegaoText = "You have " + parseInt(Ahegaos) + Currency
	document.getElementById("AT").innerHTML = AhegaoText
}