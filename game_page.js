var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

var player1_score = 0;
var player2_score = 0;
var word="";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player1_name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2_name;

function send() {
    var getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("word=" + word);
    var charat1 = word.charAt(1);
    console.log(charat1);

    LengthDividedBy2 = Math.floor(word.length / 2);
    var charat2 = word.charAt(LengthDividedBy2);
    console.log(charat2);

    var lengthMinus1 = word.length - 1;
    charat3 = word.charAt(lengthMinus1);
    console.log(charat3);

    var removeCharAt1 = word.replace(charat1, "_");
    var removeCharAt2 = removeCharAt1.replace(charat2, "_");
    var removeCharAt3 = removeCharAt2.replace(charat3, "_");
    console.log("final word:" + removeCharAt3);

    var questionWord = "<h4 id='word_display'> Q. " + removeCharAt3 + "</h4>";
    var inputBox = "<br>Answer: <input id='input_text_box' type='text'>";
    var checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var question_turn = "Player1";
var answer_turn = "Player2";

function check() {
    var getAnswer = document.getElementById("input_text_box").value;
    answer = getAnswer.toLowerCase();
    console.log("Answer: " + answer);
console.log("Word="+word);
    if (answer == word) {
        console.log("CorrectAnswer");
        if (answer_turn == "Player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
            console.log("player1Score");
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
            console.log("player2score");
        }
    }
    else {
        console.log("inelse");
    }

    if (question_turn == "Player1") {
        question_turn = "Player2";
        document.getElementById("playerQuestion").innerHTML = "Question turn: " + player2_name;
    }
    else {
        question_turn = "Player1";
        document.getElementById("playerQuestion").innerHTML = "Question turn: " + player1_name;
    }

    if (answer_turn == "Player1") {
        answer_turn = "Player2";
        document.getElementById("playerAnswer").innerHTML = "Answer turn: " + player2_name;
    }
    else {
        answer_turn = "Player1";
        document.getElementById("playerAnswer").innerHTML = "Answer turn: " + player1_name;
    }
    document.getElementById("output").innerHTML = "";

}
