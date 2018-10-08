var RandomNumber;
var ArrowIndex;
var Row;
//Timer Variables
var StartTime;
var ClickTime;
var ReactionTime;
//SettingsVariables
var RoundLength = 3000;
var FadeTime = 1000;
var FadeTimer;
var CorrectTime = 300;
var CorrectTimer;



function KillInterval() {
    ClearBottom();
    ClearTop();
    clearInterval(inter);
    clearInterval(FadeTimer);

    inter = setInterval(function(){ RowLoad(); }, RoundLength)
}


function Start(){
    setTimeout(function(){
        document.getElementById("Plus").src = "img/3.png"
        setTimeout(function(){
            document.getElementById("Plus").src = "img/2.png"
            setTimeout(function(){
                document.getElementById("Plus").src = "img/1.png"
                    //initial interval setting
                    var inter = setInterval(function(){ RowLoad(); }, RoundLength);
                    //initial round load
                    setTimeout(function(){ RowLoad(); }, CorrectTime)
            }, 1000);
        }, 1000);
    }, 1000);
};

//Left/Right Button Presses
window.onkeydown = function(event) {
    if (event.keyCode == 37) {
        //reaction time stuff
        ClickTime = Date.now()
        document.getElementById("react").innerHTML = ClickTime
        document.getElementById("Plus").src = "img/plus.png"
        document.getElementById("Result").innerHTML = (ClickTime - StartTime) / 1000 + "seconds"
        
        KillInterval();
        //RowLoad();
    }
    if (event.keyCode == 39) {
        //reaction time stuff
        ClickTime = Date.now()
        document.getElementById("react").innerHTML = ClickTime
        document.getElementById("Plus").src = "img/plus.png"
        document.getElementById("Result").innerHTML = (ClickTime - StartTime) / 1000 + "seconds"
        
        KillInterval();
        //RowLoad();
    }
    if (event.keyCode == 27) {
        KillInterval();
    }
 };

function changeImage(img) {
    document.getElementById("TR1").src = "img/plus.png";
};

function RNG() { RandomNumber = Math.floor(Math.random() * (0 - 2) + 2) }

function RowLoad() {
    ClearTop();
    ClearBottom();
    RNG();
    if ( RandomNumber == 0 ){
        Row = RandomNumber
        document.getElementById("Success").innerHTML = Row
        TopRow();
    }
    if (RandomNumber == 1){
        Row = RandomNumber
        document.getElementById("Success").innerHTML = Row
        BottomRow();
    }
    document.getElementById("Plus").src = "img/blank.png"
};

//Randomize the TopRow
function TopRow() {
    StartTime = Date.now()
    document.getElementById("Start").innerHTML = StartTime
    RNG();
    if (RandomNumber == 0) {document.getElementById("TR1").src = "img/arrow_left.png"}
    else {document.getElementById("TR1").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("TR2").src = "img/arrow_left.png"}
    else {document.getElementById("TR2").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("TR3").src = "img/arrow_left.png"}
    else {document.getElementById("TR3").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("TR4").src = "img/arrow_left.png"}
    else {document.getElementById("TR4").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("TR5").src = "img/arrow_left.png"}
    else {document.getElementById("TR5").src = "img/arrow_right.png"}
    ClearBottom();
    FadeTimer = setTimeout(function(){ ClearTop(); }, FadeTime);
};

//Randomize the BottomRow
function BottomRow() {
    StartTime = Date.now()
    document.getElementById("Start").innerHTML = StartTime
    RNG();
    if (RandomNumber == 0) {document.getElementById("BR1").src = "img/arrow_left.png"}
    else {document.getElementById("BR1").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("BR2").src = "img/arrow_left.png"}
    else {document.getElementById("BR2").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("BR3").src = "img/arrow_left.png"}
    else {document.getElementById("BR3").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("BR4").src = "img/arrow_left.png"}
    else {document.getElementById("BR4").src = "img/arrow_right.png"}
    RNG();
    if (RandomNumber == 0) {document.getElementById("BR5").src = "img/arrow_left.png"}
    else {document.getElementById("BR5").src = "img/arrow_right.png"}
    ClearTop();
    FadeTimer = setTimeout(function(){ ClearBottom(); }, FadeTime);
};

function ClearTop() {
    document.getElementById("TR1").src = "img/blank.png"
    document.getElementById("TR2").src = "img/blank.png"
    document.getElementById("TR3").src = "img/blank.png"
    document.getElementById("TR4").src = "img/blank.png"
    document.getElementById("TR5").src = "img/blank.png"
};

function ClearBottom() {
    document.getElementById("BR1").src = "img/blank.png"
    document.getElementById("BR2").src = "img/blank.png"
    document.getElementById("BR3").src = "img/blank.png"
    document.getElementById("BR4").src = "img/blank.png"
    document.getElementById("BR5").src = "img/blank.png"
};