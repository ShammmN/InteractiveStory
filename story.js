//Calling all my variables from the html
const begintxt = document.getElementById("begintxt");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const begin = document.getElementById("begin");
const imgg = document.getElementById("imgg");
const recipe =document.getElementById("recipe");
// const cafemusic = new Audio("restaurant-ambience-24720.mp3");
// cafemusic.loop = true
// window.onload = () => {
//     backmusic.play();}

//this is a function to hide both of the buttons I can use whenever there are no options for user to click
function hideallbuttons(){
    button1.style.display ="none"
    button2.style.display ="none"
    button3.style.display ="none"
    button4.style.display ="none"
}
//this is a function to hide only one of the buttons I can use whenever there is only two options
function hidebuttons(){
    button3.style.display ="none"
    button4.style.display ="none"
}
function showallbuttons(){
    button1.style.display ="inline-block"
    button2.style.display ="inline-block"
    button3.style.display ="inline-block"
    button4.style.display ="inline-block"
}
recipe.style.display ="none" //hides the recipe

//function for anytime the suer gets killed with a parameter for the death sentence to change
function deathfunc(deathsent){
    //changes variables to fit the story
     imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-vGemZShDOV05J16.png" //changes image
     begintxt.textContent = deathsent //assigns what the text will say to the the death sentence assigned outside the function when the function is called
     hideallbuttons() //hides the buttons because there is no options

}
//the start function to begin the interactive story
function start(){
    hidebuttons() //hides unnecessary buttons
    // imgg.addEventListener('mouseover', () => {
    //     imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-KbMb9YNEhvhbiGv.png"
    // })
    // imgg.addEventListener('mouseout', () => {
    //     imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-V5kndewbeNZ71zf.png"
    // })
    begintxt.textContent = "The bill has come however, you and your friends are unable to pay it! What will yall do?" //puts text into website
    //changes what the buttons say and assigns them to run a function if the user clicks
    button1.textContent = "Dine and Dash"; 
    button2.textContent = "Call Mommy and Daddy";
    button1.onclick = DineDashfunc
    button2.onclick = mndfunc

}
// Function to removes the hover over image effect
// function removehover() {
//     imgg.removeEventListener('mouseover');
//     imgg.removeEventListener('mouseout');
// }


//function if the user picks to call their mommy and daddy
function mndfunc(){
    imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-ZsBNjvYVxz1PcFQ.png" //changes the image 
    begintxt.textContent = "Yall were able to pay the bill and went back home to thank your mommy and daddy"
    hideallbuttons() //calls the function to hide the buttons since there no options/is a ending
    // removehover() //calls the function to remove the hover effect
}
//function if the user picks to dine and dash
function DineDashfunc(){   
    hidebuttons() //hides unnecessary buttons
    var dishdeath = "The dish washer thought you were trying to steal his job and killed you:/" //assigns a variable for what will be said when the death function runs 
    // removehover() //calls the function to remove the hover effect
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-QuJANYLivmmXm0z.png" //changes image
    begintxt.textContent = "You have been caught but the chef is kind enough to give you two choices:"
    //changes what the buttons say and assigns them to functions
    button1.textContent = "Do the dishes";
    button2.textContent = "Help out in the kitchen";
    //inbeds a function to run the death function with a parameter
    button1.onclick = function(){
        deathfunc(dishdeath)
    }
    button2.onclick = chickenfunc
}

function chickenfunc(){
    var chefdeath = "The chef killed you for being stupid:/" //makes a variable for what will be said when death fucntion runs
    recipe.style.display = "block" //shows the recipe
    showallbuttons()
    //changes variables to fit the story
    imgg.src= "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-i6NK8wDzKUlCfNO.png" //changes the image
    begintxt.textContent = "The recipe is above. What is the first word: "
    button1.textContent = "Cauliflower";
    button2.textContent = "Corn";
    button3.textContent = "Chicken";
    button4.textContent = "Cheese";
    button1.onclick = function(){
        deathfunc(chefdeath)
    }
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
    button3.onclick = pepperfunc
    button4.onclick = function(){
        deathfunc(chefdeath)
    }
}

function pepperfunc(){
    //changes variables to fit the story
    recipe.style.display = "block" //shows the recipe
    imgg.src= "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-i6NK8wDzKUlCfNO.png" //changes the image
    begintxt.textContent = "The recipe is above. what is the second word?"
    button1.textContent = "Chili";
    button2.textContent = "Pickled";
    button3.textContent = "Jalepeno";
    button4.textContent = "Green";
    button1.onclick = chipfunc
    button2.onclick = chipfunc
    button3.onclick = chipfunc
    button4.onclick = chipfunc
}
function chipfunc(){
    recipe.style.display ="none"
    //changes variables to fit the story
    begintxt.textContent = "The recipe calls for chips is it: "
    button1.textContent = "British chips (fries)";
    button2.textContent = "American chips (crisps)";
    button1.onclick = freshveg1
    button2.onclick = freshveg2
}
//function to ask if veggies should be precut or not to see if the user will cut the veggies hidden ending
function freshveg1(){
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-KfjiMyvXsHF05Fy.png" //replace image
    begintxt.textContent = "How about the veggies will they be: "
    button1.textContent = "Precut";
    button2.textContent = "Fresh";
    button1.onclick = Ending1 
    button2.onclick = prepfunc1
}
//function to ask if veggies should be precut or not to see if the user will cut the veggies 
function freshveg2(){
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-KfjiMyvXsHF05Fy.png" //replace image
    begintxt.textContent = "How about the veggies will they be: "
    button1.textContent = "Precut";
    button2.textContent = "Fresh";
    button1.onclick = Ending2
    button2.onclick = prepfunc2
}
function prepfunc1(){
    var chefdeath = "The chef killed you for being stupid:/" //makes a variable for what will be said when death fucntion runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-xFskYcECse1c79q.png"
    begintxt.textContent = "How will you cut the pickles"
    button1.textContent = "Slice pickles into circles using a knife";
    button2.textContent = "Roughly chop using a knife";
    button1.onclick = prep2func1
    //embeds the death function to run it 
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
}
function prepfunc2(){
    var chefdeath = "The chef killed you for being stupid:/" //makes a variable for what will be said when death fucntion runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-xFskYcECse1c79q.png"
    begintxt.textContent = "How will you cut the pickles?"
    button1.textContent = "Slice pickles into circles using a knife";
    button2.textContent = "Roughly chop using a knife";
    button1.onclick = prep2func2
    //embed death function to be able to run it with the assigned death sentence
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
}

function prep2func1(){
    var chefdeath = "The chef killed you for being stupid:/" //add a variable for what will be said when the death function runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-s0BmdZVhrgKuapy.png"
    begintxt.textContent = "How will you cut the onions and green peppers?"
    button1.textContent = "Slice Julienne style";
    button2.textContent = "Dice into small cubes";
    button1.onclick = prep2func1
    //embeds the death function to run it
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
}
//function for hidden ending
function Ending1(){
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-jCKxRavjXbIQRht.png"
    begintxt.textContent = "The customer died of a peanut allergy attack from the peanut oil in the fries! YOU GOT IMPRISONED FOR MURDER!!"
    //hides unnecessary things
    hideallbuttons() 
}
//function for the happy ending
function Ending2(){
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-HyAbpM2vfGU3esh.png"
    begintxt.textContent = "The customer and chef are pleased. You are free!"
    //hides unncesseray things
    hideallbuttons()
}

start(); //runs the start function which starts the whole game