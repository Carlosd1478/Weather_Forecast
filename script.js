function alertMe() {
    alert("Loading Weather Report...")
}

function deleteMe(){
    var cookieMessage = document.querySelector('.cookie-section')
    cookieMessage.remove()
}

function tempChange() {
    var tempValue = document.getElementById("temp-selector").value;
    console.log(tempValue)


temp1 = document.querySelector('#temp1')
temp2 = document.querySelector('#temp2')
temp3 = document.querySelector('#temp3')
temp4 = document.querySelector('#temp4')
temp5 = document.querySelector('#temp5')
temp6 = document.querySelector('#temp6')
temp7 = document.querySelector('#temp7')
temp8 = document.querySelector('#temp8')

if(tempValue == "farenheit"){
    temp1.innerHTML = "75"
    temp2.innerHTML = "65"
    temp3.innerHTML = "80"
    temp4.innerHTML = "66"
    temp5.innerHTML = "69"
    temp6.innerHTML = "61"
    temp7.innerHTML = "78"
    temp8.innerHTML = "70"
}
else if(tempValue == "calcius") {
    temp1.innerHTML = "24"
    temp2.innerHTML = "18"
    temp3.innerHTML = "27"
    temp4.innerHTML = "19"
    temp5.innerHTML = "21"
    temp6.innerHTML = "16"
    temp7.innerHTML = "26"
    temp8.innerHTML = "21"
}
}
