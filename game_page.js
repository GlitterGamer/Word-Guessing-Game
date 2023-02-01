player1_name= localStorage.getItem("player1_name")
player2_name= localStorage.getItem("player2_name")
player1_score= 0
player2_score= 0 
document.getElementById("player1_name").innerHTML=player1_name+ ": "
document.getElementById("player2_name").innerHTML=player2_name+ ": "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML= "Question turn= "+ player1_name
document.getElementById("player_answer").innerHTML= "Answer turn= "+ player2_name
function send(){
    getWord = document.getElementById("word").value
    word = getWord.toLowerCase() 
    char1 = word.charAt(1)
    lengthOf = Math.floor(word.length/2)
    char2 = word.charAt(lengthOf)
    lengthOfminus= word.length-1
    char3 = word.charAt(lengthOfminus)
    removechar1 = word.replace(char1, "_")
    removechar2 = removechar1.replace(char2, "_")
    removechar3 = removechar2.replace(char3, "_")

    questionWord = "<h4 id='wordDisplay'>"+removechar3+"</h4>"
    inputBox = "<br> answer = <input id ='checkBox'>"
    checkButton = "<br> <br> <button class= 'btn btn-primary' onclick = 'check()'>Check</button>"
    row = questionWord + inputBox + checkButton 
    document.getElementById("output").innerHTML= row
    document.getElementById("word").value = ""
}

questionTurn = "player1"
answerTurn = "player2"


function check(){
    answer = document.getElementById("checkBox").value
    answer1 = answer.toLowerCase()
    if (answer1== word) {
        if (answerTurn== "player1") {
            player1_score= player1_score + 1
            document.getElementById("player1_score").innerHTML=player1_score
        }
        else{
            player2_score= player2_score + 1
            document.getElementById("player2_score").innerHTML=player2_score
        }
    }
    if (questionTurn== "player1") {
        questionTurn = "player2"
        document.getElementById("player_question").innerHTML= "Question turn= "+ player2_name
    }
    else{
        questionTurn = "player1"
        document.getElementById("player_question").innerHTML= "Question turn= "+ player1_name
    }

    if (answerTurn== "player1") {
        answerTurn = "player2"
        document.getElementById("player_answer").innerHTML= "Answer turn= "+ player2_name
    }
    else{
        answerTurn = "player1"
        document.getElementById("player_answer").innerHTML= "Answer turn= "+ player1_name
    }
}
