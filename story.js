//Calling all my variables from the html
const userinput = document.getElementById("userinput");
const begintxt = document.getElementById("begintxt");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const begin = document.getElementById("begin");
const imgg = document.getElementById("imgg");
// const cafemusic = new Audio("restaurant-ambience-24720.mp3");
// cafemusic.loop = true
// window.onload = () => {
//     backmusic.play();}

//function to hide the user input box when not needed
function hideuserin(){
    userinput.style.display = "none" 
}
//fucntion to display user input box when needed
function showuserin(){
    userinput.style.display ="block"
}
//the start function to begin the interactive story
function start(){
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
    hideuserin()
}
// Function to removes the hover over image effect
// function removehover() {
//     imgg.removeEventListener('mouseover');
//     imgg.removeEventListener('mouseout');
// }
//this is a function to hide both of the buttons I can use whenever there are no options for user to click
function hidebuttons(){
    button1.style.display ="none"
    button2.style.display ="none"
}
//this is a function to hide only one of the buttons I can use whenever there is only one option like a submit button
function hidebutton(){
    button1.style.display = "none"

}
//function if the user picks to call their mommy and daddy
function mndfunc(){
    imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-ZsBNjvYVxz1PcFQ.png" //changes the image 
    begintxt.textContent = "Yall were able to pay the bill and went back home to thank your mommy and daddy"
    hidebuttons() //calls the function to hide the buttons since there no options/is a ending
    hideuserin() //calls the function to hide the users input
    removehover() //calls the function to remove the hover effect
}
//function if the user picks to dine and dash
function DineDashfunc(){    
    var dishdeath = "The dishwasher thought you were trying to steal his job and killed you:/" //assigns a variable for what will be said when the death function runs 
    hideuserin() //calls the function to hide the user input
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

    button2.onclick = recipefunc

}
//function for anytime the user gets killed and what it says can be changed as the function is called through the parameter deathsent
 function deathfunc(deathsent){
    //changes variables to fit the story
     imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-vGemZShDOV05J16.png" //changes image
     begintxt.textContent = deathsent //assigns what the text will say to the the death sentence assigned outside the function when the function is called
     hidebuttons() //hides the buttons because there is no options
     hideuserin() //calls the function to hide the user input
}

function anscheck(ans, ){
    let userinlower = userinput.tolowercase() //makes the user input into a variable that is the user input lowercase to make it easier to compare it to the answer
    for (clicknum =0; 6; clicknum++){
        clicknum +=1
        if (userinput == ans){
            begintxt.textContent = 'Correct, ${ans} is the word!'
            break
        }
        else {
            begintxt.textContent = "Try again! You have up to 5 tries tho:/"
        }
    }
}
function recipefunc(){
    //changes variables to fit the story
    imgg.src= "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-i6NK8wDzKUlCfNO.png" //changes the image
    begintxt.textContent = "The recipe is: 12 inch italian 4-grain bread, 6 buffalo c____ tenders, 4 slices of chipotle gouda cheese, Cup of lettuce, ¼ cup of onions, ¼  cup garlic and dill pickles, ¼ cup of green p____, 1 tbsp of mayo, 1 tbsp of chipotle mayo, and Chips. Fill in the blanks by typing out the full word! (you only have 5 tries!)"
    showuserin()
    button2.textContent = "Guess First word";
    hidebutton()
    button2.onclick = function(){
        anscheck("chicken")
    }

}
function chipfunc(){
    hideuserin() //hides user input box
    //changes variables to fit the story
    begintxt.textContent = "The recipe calls for chips is it: "
    button1.textContent = "British chips (fries)";
    button2.textContent = "American chips (crisps)";
    button1.onclick = freshveg1()
    button2.onclick = freshveg2()
}
//function to ask if veggies should be precut or not to see if the user will cut the veggies hidden ending
function freshveg1(){
    hideuserin() //hides user input box
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-KfjiMyvXsHF05Fy.png" //replace image
    begintxt.textContent = "How about the veggies will they be: "
    button1.textContent = "Precut";
    button2.textContent = "Fresh";
    button1.onclick = Ending1() 
    button2.onclick = prepfunc1()
}
//function to ask if veggies should be precut or not to see if the user will cut the veggies 
function freshveg2(){
    hideuserin() //hides user input box
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-KfjiMyvXsHF05Fy.png" //replace image
    begintxt.textContent = "How about the veggies will they be: "
    button1.textContent = "Precut";
    button2.textContent = "Fresh";
    button1.onclick = Ending2()
    button2.onclick = prepfunc2()
}
function prepfunc1(){
    var chefdeath = "The chef killed you for being stupid:/" //makes a variable for what will be said when death fucntion runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-xFskYcECse1c79q.png"
    begintxt.textContent = "How will you cut the pickles"
    button1.textContent = "Slice pickles into circles using a knife";
    button2.textContent = "Roughly chop using a knife";
    button1.onclick = prep2func1()
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
    button1.onclick = prep2func2()
    //embed death function to be able to run it with the assigned death sentence
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
}

function prep2func1(){
    hideuserin() //hides user input box
    var chefdeath = "The chef killed you for being stupid:/" //add a variable for what will be said when the death function runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-s0BmdZVhrgKuapy.png"
    begintxt.textContent = "How will you cut the onions and green peppers?"
    button1.textContent = "Slice Julienne style";
    button2.textContent = "Dice into small cubes";
    button1.onclick = prep2func1()
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
    hidebuttons()
    hideuserin()
}
//function for the happy ending
function Ending2(){
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-HyAbpM2vfGU3esh.png"
    begintxt.textContent = "The customer and chef are pleased. You are free!"
    //hides unncesseray things
    hidebuttons()
    hideuserin()
}

start(); //runs the start function which starts the whole game