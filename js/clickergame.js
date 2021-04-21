var Ahegaos = 0
var Censor = 0
var Currency = " Wholesome Bucks"

function randint(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max+1 - min) + min)
}

function ChangeImage(Text, Image) {
	document.getElementById("censor").innerHTML = Text
	document.getElementById("Image").src = "/images/" + Image
	var AhegaoText = "You have " + parseInt(Ahegaos) + Currency
	document.getElementById("AT").innerHTML = AhegaoText
}

function CensorImage() {
	var Chance = randint(1,100)
	if (Censor == 0 & Chance != 1) {
		Censor = 1
		Currency = " Ahegaos"
		ChangeImage("Unlewd", "aheago.jpg")
	} else if (Censor == 1  & Chance != 1) {
		Censor = 0
		Currency = " Wholesome Bucks"
		ChangeImage("Lewd", "censored.png")
	} else if (Chance == 1) {
		Censor = !Censor
		Currency = " Wholesome Bucks"
		ChangeImage("Unlewd", "fynn.png")
	}
}

function Click() {
	Ahegaos++
	var AhegaoText = "You have " + parseInt(Ahegaos) + Currency
	document.getElementById("AT").innerHTML = AhegaoText
}