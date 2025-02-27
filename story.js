//Calling all my variables from the html
const begintxt = document.getElementById("begintxt");
const extratxt = document.getElementById("extratxt");
const userin = document.getElementById("userin");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const begin = document.getElementById("begin");
const imgg = document.getElementById("imgg");
const recipe =document.getElementById("recipe");

userin.style.display ="none" //hides user input because it is not needed will unhide when needed

//this is a function to hide both of the buttons I can use whenever there are no options for user to click
function hideallbuttons(){
    button1.style.display ="none"
    button2.style.display ="none"
    button3.style.display ="none"
    button4.style.display ="none"
}

//this is a function to hide 2 of the buttons I can use whenever there is only two options
function hidebuttons(){
    button3.style.display ="none"
    button4.style.display ="none"
}

//function to show all buttons in line block to make them centered as well
function showallbuttons(){
    button1.style.display ="inline-block"
    button2.style.display ="inline-block"
    button3.style.display ="inline-block"
    button4.style.display ="inline-block"
}

recipe.style.display ="none" //hides the recipe

//function for anytime the suer gets killed with a parameter for the death sentence to change
function deathfunc(deathsent){
    recipe.style.display ="none" //hides the recipe
    userin.style.display = "none" //hides the user input box
    //changes variables to fit the story
     imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-vGemZShDOV05J16.png" //changes image
     begintxt.textContent = deathsent //assigns what the text will say to the the death sentence assigned outside the function when the function is called
     hideallbuttons() //hides the buttons because there is no options
}

//the start function to begin the interactive story
function start(){
    hidebuttons() //hides unnecessary buttons
    begintxt.textContent = "The bill has come however, you and your friends are unable to pay it! What will yall do?" //puts text into website
    //changes what the buttons say and assigns them to run a function if the user clicks
    button1.textContent = "Dine and Dash"; 
    button2.textContent = "Call Mommy and Daddy";
    button1.onclick = DineDashfunc
    button2.onclick = mndfunc

}

//function if the user picks to call their mommy and daddy
function mndfunc(){
    imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-ZsBNjvYVxz1PcFQ.png" //changes the image 
    begintxt.textContent = "Yall were able to pay the bill and went back home to thank your mommy and daddy." //changes text put into website
    hideallbuttons() //calls the function to hide the buttons since there no options/is a ending
}

//function if the user picks to dine and dash
function DineDashfunc(){   
    hidebuttons() //hides unnecessary buttons
    var dishdeath = "The dish washer thought you were trying to steal his job and killed you:/" //assigns a variable for what will be said when the death function runs 
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-QuJANYLivmmXm0z.png" //changes image
    begintxt.textContent = "You have been caught but the chef is kind enough to give you two choices:"
    //changes what the buttons say and assigns them to functions
    button1.textContent = "Do the dishes";
    button2.textContent = "Help out in the kitchen";
    //inbeds a function to run the death function with a parameter
    button1.onclick = function(){
        deathfunc(dishdeath)
    }
    button2.onclick = chickenfunc //sends them to next part
}

function chickenfunc(){
    var chefdeath = "The chef killed you for being stupid:/" //makes a variable for what will be said when death function runs
    recipe.style.display = "block" //shows the recipe
    showallbuttons()
    //changes variables to fit the story
    imgg.src= "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-i6NK8wDzKUlCfNO.png" //changes the image
    begintxt.textContent = "The recipe is above. What is the first word: "
    button1.textContent = "Cauliflower";
    button2.textContent = "Corn";
    button3.textContent = "Chicken";
    button4.textContent = "Cheese";
    //sends them to death ending if they choose wrong 
    button1.onclick = function(){
        deathfunc(chefdeath)
    }
    button2.onclick = function(){
        deathfunc(chefdeath)
    }

    button3.onclick = pepperfunc //sends them to next part

    button4.onclick = function(){
        deathfunc(chefdeath)
    }
}

function pepperfunc(){
    var chefdeath = "The chef killed you for being stupid:/" //makes a variable for what will be said when death function runs
    //changes variables to fit the story
    recipe.style.display = "block" //shows the recipe
    imgg.src= "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-i6NK8wDzKUlCfNO.png" //changes the image
    begintxt.textContent = "The recipe is above. what is the second word? "
    button1.textContent = "Chili";
    button2.textContent = "Golden";
    button3.textContent = "Garlic";
    button4.textContent = "Green";
    //sends them to death ending if they choose wrong
    button1.onclick = function(){
        deathfunc(chefdeath)
    }
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
    button3.onclick = function(){
        deathfunc(chefdeath)
    }
    button4.onclick = chipfunc //sends them to next part
}
function chipfunc(){
    hidebuttons() //hides unnecessary buttons
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
    button1.onclick = Ending1 //sends them straight to  secret ending
    button2.onclick = onionpepperfunc1 //sends them prepping veggies since they are fresh
}
//function to ask if veggies should be precut or not to see if the user will cut the veggies 
function freshveg2(){
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-KfjiMyvXsHF05Fy.png" //replace image
    begintxt.textContent = "How about the veggies will they be: "
    button1.textContent = "Precut";
    button2.textContent = "Fresh";
    button1.onclick = Ending2 //sends them straight to ending
    button2.onclick = onionpepperfunc2 //sends them to prepping veggies since they are fresh
}
//function to cut the onions and peppers using key event listeners with secret ending
function onionpepperfunc1(){
    hideallbuttons() //hides all buttons because they are not needed
    var chefdeath = "The chef killed you because you didnt use the correct cutting style:/" //makes a variable for what will be said when death function runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-e84Ggx04w9023Za.png"
    begintxt.textContent = "Click the A key to dice the onion and pepper or click the B key to julienne the onion and pepper"
    document.addEventListener("keydown", function(event) {  //adds an event listener for when a key is pressed down and makes a function
        if (event.key === "a" || event.key === "A") {  //function checks if key is the a or A key 
            deathfunc(chefdeath) //sends to death function if a or A key
        }
        else if (event.key === "b" || event.key === "B") {  //checks if key is the b or B key
            lettucefunc1() //sends to next part if the key is b or B 
 
        }
    });
}

//function to cut the onions and peppers using key event listeners without secret ending
function onionpepperfunc2(){
    hideallbuttons() //hides all buttons because they are not needed
    var chefdeath = "The chef killed you because you didnt use the correct cutting style:/" //makes a variable for what will be said when death function runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-e84Ggx04w9023Za.png"
    begintxt.textContent = "Click the A key to dice the onion and pepper or click the B key to julienne the onion and pepper"
    document.addEventListener("keydown", function(event) { //adds an event listener for when a key is pressed down and makes a function
        if (event.key === "a" || event.key === "A") { //function checks if key is the a or A key 
            deathfunc(chefdeath) //sends to death function if a or A key
        }
        else if (event.key === "b" || event.key === "B") { //checks if key is the b or B key
            lettucefunc2() //sends to next part if the key is b or B 
        }
    });
}

//function to cut the lettuce but with hidden ending
function lettucefunc1(){
    button1.style.display ="inline-block" //shows one of the buttons
    var chefdeath = "The chef killed you for not cutting the lettuce well:/" //add a variable for what will be said when the death function runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-IysFOqRuj73xZ9b.png"
    begintxt.textContent="Lets cut the lettuce head now! How many times should you cut the lettuce head? (hint: a lot of slices) "
    userin.style.display= "inline-block" //shows the user input box in line block so it is centered
    let num; //establishes num variable
    button1.textContent= "submit" //changes the button text to submit because it is a submit button
    button1.onclick= function(){ // function runs at button click so when the user submits
        num = userin.value // establishes that num is the user inputs value 
        let slices = Number(num) //establishes that slices is the num value as a number so it can be used to iterate in the for loop
        let chops = " " //establishes chops as an empty string variable 
        if (isNaN(slices) || slices <= 0) { //checks if slices is not a number or less than 0 because that will cause errors and is invalid response
            deathfunc(chefdeath); //sends the user to death
        }
        for(i=0; i<slices; i++){ //iterates through the number given by the user at an increment of +1 
            chops += "CHOP " // adds a CHOP per iteration 
        }
        extratxt.textContent = chops // displays to the user the amount of chops that was said
        if(num < 50){ //checks if num is less than 50
            deathfunc(chefdeath) //sends to death
        }
        else if(num> 125){ //checks if num is greater than 125 
            deathfunc(chefdeath) //sends to death
        }
        else if(num >=50 ){ //checks if num is greater than or equal to 50 after it makes sure it isnt above 125
            Ending1() //sends to secret ending
        }
        //extra error handling
        else{  //anything else
            deathfunc(chefdeath) //sends to death
        } 
    } 
}

//function to cut the lettuce but without hidden ending
function lettucefunc2(){
    button1.style.display ="inline-block" //shows one of the buttons
    var chefdeath = "The chef killed you for not cutting the lettuce well:/" //add a variable for what will be said when the death function runs
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-IysFOqRuj73xZ9b.png"
    begintxt.textContent="Lets cut the lettuce head now! How many times should you cut the lettuce head? (hint: a lot of slices) "
    userin.style.display= "inline-block" //shows the user input box in line block so it is centered
    let num; //establishes num variable
    button1.textContent= "submit" //changes the button text to submit because it is a submit button
    button1.onclick= function(){ // function runs at button click so when the user submits
        num = userin.value // establishes that num is the user inputs value 
        let slices = Number(num) //establishes that slices is the num value as a number so it can be used to iterate in the for loop
        let chops = " " //establishes chops as an empty string variable 
        if (isNaN(slices) || slices <= 0) { //checks if slices is not a number or less than 0 because that will cause errors and is invalid response
            deathfunc(chefdeath); //sends the user to death
        }
        for(i=0; i<slices; i++){ //iterates through the number given by the user at an increment of +1 
            chops += "CHOP " // adds a CHOP per iteration 
        }
        extratxt.textContent = chops // displays to the user the amount of chops that was said
        if(num < 50){ //checks if num is less than 50
            deathfunc(chefdeath) //sends to death
        }
        else if(num> 125){ //checks if num is greater than 125 
            deathfunc(chefdeath) //sends to death
        }
        else if(num >=50 ){ //checks if num is greater than or equal to 50 after it makes sure it isnt above 125
            Ending2() //sends to happy ending
        }
        //extra error handling
        else{  //anything else
            deathfunc(chefdeath) //sends to death
        } 
    } 
}

//function for hidden ending
function Ending1(){
    //changes variables to fit the story
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-jCKxRavjXbIQRht.png"
    begintxt.textContent = "You finished making the sandwich and served it to the customer. However the customer died of a peanut allergy attack from the peanut oil in the fries! YOU GOT IMPRISONED FOR MURDER!!"
    extratxt.textContent = "The End"    
    //hides unnecessary things
    hideallbuttons() 
    userin.style.display = "none"
}

//function for the happy ending
function Ending2(){
    //chamges variables to match part
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-HyAbpM2vfGU3esh.png"
    begintxt.textContent = "You finished making the sandwich and served it to the customer. The customer and chef are pleased! You are free!"
    extratxt.textContent = "The End"
    //hides unncesseray things
    hideallbuttons()
    userin.style.display = "none"  
}

start(); //runs the start function which starts the whole game