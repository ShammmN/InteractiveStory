//Calling all my variables from the html
const begintxt = document.getElementById("begintxt");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const begin = document.getElementById("begin");
const imgg = document.getElementById("imgg");

function start(){
    // imgg.addEventListener('mouseover', () => {
    //     imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-KbMb9YNEhvhbiGv.png"
    // })
    // imgg.addEventListener('mouseout', () => {
    //     imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-V5kndewbeNZ71zf.png"
    // })
    begintxt.textContent = "The bill has come however, you and your friends are unable to pay it! What will yall do?"
    button1.textContent = "Dine and Dash";
    button2.textContent = "Call Mommy and Daddy";
    button1.onclick = DineDashfunc
    button2.onclick = mndfunc
}
function hidebuttons(){
    button1.style.display ="none"
    button2.style.display ="none"
}
function hidebutton(){
    button1.style.display ="none"

}
function mndfunc(){
    imgg.src ="https://hotpotmedia.s3.us-east-2.amazonaws.com/8-ZsBNjvYVxz1PcFQ.png"
    begintxt.textContent = "Yall were able to pay the bill and went back home to thank your mommy and daddy"
    hidebuttons()
}
function DineDashfunc(){    
    var dishdeath = "The dishwasher thought you were trying to steal his job and killed you:/"

    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-QuJANYLivmmXm0z.png"
    begintxt.textContent = "You have been caught but the chef is kind enough to give you two choices:"
    button1.textContent = "Do the dishes";
    button2.textContent = "Help out in the kitchen";
    button1.onclick = function(){
        deathfunc(dishdeath)
    }
    button2.onclick = recipefunc
}

// function deathfunc(deathsent){
//     imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-vGemZShDOV05J16.png"
//     begintxt.textContent = deathsent
//     hidebuttons()
// }
// function anscheck(ans, usrin){
//     for (i =0; 6; i++){
//         i +=1
//         if anscheck
//     }
// }
function recipefunc(){
    imgg.src= "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-i6NK8wDzKUlCfNO.png"
    begintxt.textContent = "The recipe is: 12 inch italian 4-grain bread, 6 buffalo c____ tenders, 4 slices of chipotle gouda cheese, Cup of lettuce, ¼ cup of r__ onions, ¼  cup garlic and dill pickles, ¼ cup of green peppers, 1 tbsp of mayo, 1 tbsp of chipotle mayo, Chips"
    begintxt.textContent = "fill in the blanks by typing out the full word (you have 5 tries or else the chef kills you)"
    button1.textContent = "First word";
    button2.textContent = "Call Mommy and Daddy";
    button1.onclick = DineDashfunc
    button2.onclick = mndfunc

}
function chipfunc(){
    begintxt.textContent = "The recipe calls for chips is it: "
    button1.textContent = "British chips (fries)";
    button2.textContent = "American chps (crisps)";
    button1.onclick = prepfunc1()
    button2.onclick = prepfunc2()
}

function prepfunc1(){
    var chefdeath = "The chef killed you for being stupid:/"
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-xFskYcECse1c79q.png"
    begintxt.textContent = "How will you cut the pickles"
    button1.textContent = "Slice pickles into circles using a knife";
    button2.textContent = "Roughly chop using a knife";
    button1.onclick = prep2func1()
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
}
function prepfunc2(){
    var chefdeath = "The chef killed you for being stupid:/"
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-xFskYcECse1c79q.png"
    begintxt.textContent = "How will you cut the pickles?"
    button1.textContent = "Slice pickles into circles using a knife";
    button2.textContent = "Roughly chop using a knife";
    button1.onclick = prep2func2()
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
}

function prep2func1(){
    var chefdeath = "The chef killed you for being stupid:/"
    imgg.src = "https://hotpotmedia.s3.us-east-2.amazonaws.com/8-s0BmdZVhrgKuapy.png"
    begintxt.textContent = "How will you cut the onions and green peppers?"
    button1.textContent = "Slice pickles into circles using a knife";
    button2.textContent = "Roughly chop using a knife";
    button1.onclick = prep2func1()
    button2.onclick = function(){
        deathfunc(chefdeath)
    }
}

start();