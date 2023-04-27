var count = 1;
var sym;
var winner;
var player1 = 0;
var player2 = 0;
var time = document.querySelector(".timer");
var counter = 0;

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

p1.innerHTML = player1;
p2.innerHTML = player2;

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

let mouseContainer = document.querySelector(".cursor");
let mouse = document.querySelector(".cursor-color");
let gameBoard = document.querySelector(".board");

const btn = document.querySelectorAll(".ripple");

btn.forEach(button => {
    button.addEventListener("click", function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
    
        let ripple = document.createElement("span");
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        this.appendChild(ripple);
    
        setTimeout(() => {
            ripple.remove();
        }, 300);
    });
});

gameBoard.addEventListener("mousemove", (e) => {
    mouseContainer.style.left = e.pageX + "px";
    mouseContainer.style.top = e.pageY + "px";
});

function symChange() {
    if(count % 2 == 0) {
        sym = "O";
        count = count + 1;
    } else {
        sym = "X";
        count = count + 1;
    }
}

//timer
function start() {
    var counterBtn = document.querySelector(".timer");
    var m1 = 0;
    var m2 = 0;
    var s1 = 0;
    var s2 = 0;

    function increase() {
        counter++;
        if(counter > 9 && counter <= 59) {
            time.innerHTML = m1 + "" + m2 + ":" + (s2 + counter);
        } else if(m2 > 9 && m2 <= 59 && counter > 9){
            s2 = 0;
            counter = 0;
            m2 = m2 + 1;
            m1 = "";
            time.innerHTML = m2 + ":" + s1 + "" + (s2 + counter);
        } else if(counter > 59){
            s2 = 0;
            counter = 0;
            m2 = m2 + 1;
            time.innerHTML = m1 + "" + m2 + ":" + s1 + "" + (s2 + counter);
        } else {
            time.innerHTML = m1 + "" + m2 + ":" + s1 + "" + (s2 + counter);
        }
    }

    if(counterBtn.classList.contains("active")){
        console.log("Timer Stoped!");
        counterBtn.classList.toggle("active");
    } else {
        setInterval(increase, 1000);
    }
}

//win check
function horizontalCheck() {
    if(box1.innerHTML == sym && box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML || 
       box4.innerHTML == sym && box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML ||
       box7.innerHTML == sym && box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML) {
        if(sym == "X") {
            winner = "Player-1 ";
            player1 = player1 + 1;
            p1.innerHTML = player1;
        } else {
            winner = "Player-2 ";
            player2 = player2 + 1;
            p2.innerHTML = player2;
        }
        document.querySelector(".winner-alert").style.display = "flex";
        document.querySelector(".winner").innerHTML = winner + "is the winner!";
    }
}

function verticalCheck() {
    if(box1.innerHTML == sym && box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML || 
       box2.innerHTML == sym && box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML ||
       box3.innerHTML == sym && box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML){
        if(sym == "X") {
            winner = "Player-1 ";
            player1 = player1 + 1;
            p1.innerHTML = player1;
        } else {
            winner = "Player-2 ";
            player2 = player2 + 1;
            p2.innerHTML = player2;
        }
        document.querySelector(".winner-alert").style.display = "flex";
        document.querySelector(".winner").innerHTML = winner + "is the winner!";
    }
}

function diagonalCheck() {
    if(box1.innerHTML == sym && box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML || 
       box3.innerHTML == sym && box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML){
        if(sym == "X") {
            winner = "Player-1 ";
            player1 = player1 + 1;
            p1.innerHTML = player1;
        } else {
            winner = "Player-2 ";
            player2 = player2 + 1;
            p2.innerHTML = player2;
        }
        document.querySelector(".winner-alert").style.display = "flex";
        document.querySelector(".winner").innerHTML = winner + "is the winner!";
    }
}

function tieCheck() {
    if(box1.innerHTML != "" && box2.innerHTML != "" && box3.innerHTML != "" && box4.innerHTML != "" && box5.innerHTML != "" && box6.innerHTML != "" && box7.innerHTML != "" && box8.innerHTML != "" && box9.innerHTML != "") {
        winner = "Game ";
        document.querySelector(".winner-alert").style.display = "flex";
        document.querySelector(".winner").innerHTML = winner + "is Tie";
    }
}

var clicked = document.querySelectorAll(".click");
clicked.forEach(clickBtn => {
    clickBtn.addEventListener("click", function() {
        if(this.innerHTML == "") {
            symChange();
            this.innerHTML = sym;
            if(sym == "X") {
                this.style.color = "red";
                mouse.style.fill = "#0000bb";
            } else {
                this.style.color = "blue";
                mouse.style.fill = "#ff0000";
            }
            tieCheck();
            horizontalCheck();
            verticalCheck();
            diagonalCheck();
        };
    });
});

const resetBtn = document.querySelectorAll("#reset");
resetBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        var attr;
        for(var i = 1; i <= 9; i++) {
            attr = "box" + i;
            document.getElementById(attr).innerHTML = "";
            count = 1;
        }
        mouse.style.fill = "#ff0000";
        player1 = 0;
        player2 = 0;
        p1.innerHTML = player1;
        p2.innerHTML = player2;
        counter = 0;
        s2 = 0;
    });
});


document.querySelector(".next").addEventListener("click", function() {
    var attr;
    for(var i = 1; i <= 9; i++) {
        attr = "box" + i;
        document.getElementById(attr).innerHTML = "";
        count = 1;
    }
    mouse.style.fill = "#ff0000";
    counter = 0;
    s2 = 0;
});

document.getElementById("clear").addEventListener("click", function() {
    var attr;
    for(var i = 1; i <= 9; i++) {
        attr = "box" + i;
        document.getElementById(attr).innerHTML = "";
        count = 1;
    }
    mouse.style.fill = "#ff0000";
    counter = 0;
    s2 = 0;
});