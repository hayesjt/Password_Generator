//Defining values to check boxes//
var upper ="ACDEFGHIJKLMNOPQRSTUVWXYZ"
var lower ="abcdefghijklmnopqrstuvwxyz"
var special ="!@#$%^&*_"
var number = "123456789"
var master = "";

//GENERATE BUTTON - generates random password//
function generate(){
    
    var upperInput = document.getElementById("upper").checked
    var lowerInput = document.getElementById("lower").checked
    var specialInput = document.getElementById("special").checked
    var numberInput = document.getElementById("number").checked
   
    //set password length with slider//
    let lengthOfPassword = document.getElementById("sliderbar").value;

    //If statments to add values together and create a string of all characters we//
    let password = "";

    if (upperInput){
        master = master + upper
    }
    if (lowerInput){
        master = master + lower
    }
    if (specialInput){
        master = master + special
    }
    if (numberInput){
        master = master + number
    }
    
    //create for loop to go as long as lenth of slider using values//
    for(var i = 1; i <= lengthOfPassword; i++){
        password = password + master.charAt(Math.floor(Math.random() * Math.floor(master.length - 1)));
    }

    //add password to textbox at the bottom//
    document.getElementById("display").value = password;
}

//SLIDER BAR SETTINGS//
//set default length to 60 on slider//
document.getElementById("length").innnerHTML = "length: 68";
document.getElementById("length").innerHTML = "length: " + document.getElementById("sliderbar").value 

//fuction that listens to users slider position//
document.getElementById("sliderbar").oninput = function(){

    if(document.getElementById("sliderbar").value > 7 && document.getElementById("sliderbar").value < 129){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("sliderbar").value 
    }
}

//CALL THE GEN FUNCTION - ON CLICK//
        document.getElementById("generator").addEventListener("click",function(){
            //no default functions//
            event.preventDefault();
            generate()
    })

//COPY TO CLIPBOARD SECTION//
function copyClip () {
    var copyText = document.getElementById("display");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    alert("Your new password " + copyText.value + " has been copied!");
  }

//CALL THE COPY FUNCTION - ONCLICK//
document.getElementById("copy").addEventListener("click",function(){
    //no default functions//
    event.preventDefault();
    copyClip()
})
