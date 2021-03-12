var answerOptions = ['yellow', 'blue', 'green', 'red', 'brown', 'orange'];
var ans = ['','','',''];
var attempt = ['','','',''];
var marks = ['','','',''];
var target

ans = shuffle(answerOptions);
ans.pop();ans.pop()
console.log(ans);

$('.check').click(function (e) {target = e.target; check()})

function check() {
    var atmtNo = (target.id).charAt(1);
    // var attempt = ['','','',''];
    for (let blnkNo = 0; blnkNo <= 3; blnkNo++) {
        attempt[blnkNo] = document.getElementById(`a${atmtNo}${blnkNo}`).style.backgroundColor
    }
    console.log(attempt);
    mark(atmtNo);
}

function mark(atmtNo) {
    for (let i = 0; i <= 3; i++) {
        if (attempt[i] == ans[i]) {
            marks[i] = 'white';
        }
        else if (checkblack(attempt[i])) {
            marks[i] = 'black';
        }
        else {
            marks[i] = 'none';
        }
    }
    marks = shuffle(marks);
    for (let markBlankNo = 0; markBlankNo <= 3; markBlankNo++) {
        document.getElementById(`m${atmtNo}${markBlankNo}`).style.backgroundColor = marks[markBlankNo]
    }
}

function checkblack(colour) {
    for (let j = 0; j <= 3; j++) {
        if(colour == ans[j]){
            return true;
            break;
        }else if (j == 3){
            return false;
        }
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}