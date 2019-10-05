
//Defining values to check boxes//
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower ="abcdefghijklmnopqrstuvwxyz"
var special ="!@#$%^&*_"
var number = "123456789"

//Functions and statments//

//Genorate Button - generates random password//
function generate(){
    //console.log(num1,num2,num3,num4);
    //no default functions//
    event.preventDefault();

    //set password length with slider//
    let complexity = document.getElementById("sliderbar").value;
    //console.log(complexity)

    //possible password values//
    let values = "";

    //what gets set when user hits generate button//
    let password = "";

    //create for loop to go as long as lenth of slider using values//
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox at the bottom//
    document.getElementById("display").value = password;
    
}

//set default length to 60 on slider//
document.getElementById("length").innnerHTML = "length: 60";

//fuction that listens to users slider position//
document.getElementById("sliderbar").oninput = function(){

    if(document.getElementById("sliderbar").value > 7 && document.getElementById("sliderbar").value < 129){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("sliderbar").value 
    }
    else {
        document.getElementById(length).innerHTML = "length: 8"
    }

}

//copy to clipboard function//
function copyPassword(){

    document.getElementById("display").select();
    document.execCommand("copy");
    alert("Password is ready for use.")
}

//call the generate function//
        document.getElementById("generator").addEventListener("click",function(){
        var upperInput = document.getElementById("upper").checked;
        var lowerInput = document.getElementById("lower").checked;
        var specialInput = document.getElementById("special").checked;
        var numberInput = document.getElementById("number").checked;
        var possibleSelections = "";
        //console.log(firstinput);

        switch (possibleSelections){
            case upperInput,lowerInput,specialInput,numberInput:
                generate(upper,lower,special,number);
                break;
            case upperInput,lowerInput,specialInput:
                generate(upper,lower,special);
                break;
            case upperInput,specialInput,numberInput:
                generate(upper,special,number);
                break;
            case upperInput,lowerInput,numberInput:
                generate(upper,lower,number);
                break;
            case lowerInput,specialInput,numberInput:
                generate (lower,special,number);
                break;
            case upperInput,lowerInput:
                generate(upper,lower);
                break;
            case upperInput,specialInput:
                generate(upper,special);
                break;
            case upperInput,numberInput:
                generate(upper,number);
                break;
            case upperInput,numberInput:
                generate(upper,number);
                break;
            case lowerInput,specialInput:
                generate(lower,special);
                break;
            case lowerInput,numberInput:
                generate(lower,number);
                break;
            case specialInput,numberInput:
                generate(special,number);
                break;
            case upperInput:
                generate(upper);
                break;
            case lowerInput:
                generate(lower);
                break;
            case specialInput:
                generate(special);
                break;
            case numberInput:
                generate(number);
                break;
        }
    })