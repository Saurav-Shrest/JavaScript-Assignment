// Question 1 (Perffect number)

function perfectNumber() {
    let n = 33550336;
    let sum = 0;

    for(let i = 1; i <= n/2; i++) {
        if(n % i == 0) {
            sum = sum + i;
        }
    }
    if(sum == n && (sum+n)/2 == n) {
        console.log(n + " IS a perfecct number.");
    }else {
        console.log(n + " is NOT a perfecct number.");
    }
}

// perfectNumber();

// Question 2 (Money to Coins)

function moneyChanges() {
    let money = 8;
    let tem = money;
    let arr= [];

    while(tem != 0) {
        if(tem >= 10) {
            tem = tem - 10;
            arr.push(10);
        }else if(tem >= 5){
            tem =  tem - 5;
            arr.push(5);
        }else if(tem >= 2) {
            tem = tem - 2;
            arr.push(2);
        }else if (tem == 1) {
            tem = tem - 1;
            arr.push(1);
        }
    }
    let display = "";

    for(let i = 0; i < arr.length; i++) {
        display  += arr[i] + ", "
    }

    console.log(display.slice(0, display.length-2))

}

// moneyChanges();

// Question 3 (Different ways to view date)

function viewDate(sep) {
    let date = new Date;
    console.log(date.getDate() + sep + date.getMonth() + sep + date.getFullYear());
}

// viewDate("-");

// Question 4 (Remaining Date and time from future and past)

function reamingTime() {

    let newDate = new Date("May 20, 2022 00:00:00");
    let time = newDate.getTime();

    let nowTime = new Date().getTime();

    let remainingTime;

    if(time < nowTime) {
        remainingTime = nowTime - time;
    }else {
        remainingTime = time - nowTime;
    }


    let second = Math.floor(remainingTime / 1000);
    let remainingSecond = second % 60;

    let min = Math.floor(second / 60);
    let remainingMin = min % 60;
    
    let hour = Math.floor(min / 60);
    let remainingHour = hour % 24;

    let day = Math.floor(hour / 24);

    if(time < nowTime) {
        console.log("Time has past by: " + day + " Day " + remainingHour + " Hour " + remainingMin + " Minutes " + remainingSecond + " Seconds");
    }else {
        console.log("Time is yet to come: " + day + " Day " + remainingHour + " Hour " + remainingMin + " Minutes " + remainingSecond + " Seconds");
    }
}   

// reamingTime();

// Question 5 (Find the latest date)

function latestDate() {
    let dateArray = ['2019/02/01', '2018/09/22', '2019/08/15', '2019/10/03', '2020/12/6'];

    let time = new Date(dateArray[0]).getTime();
    let result = new Date(dateArray[0]);

    for(let i = 1; i < dateArray.length; i++) {
        let tem = new Date(dateArray[i]).getTime();
        if(tem > result) {
            time = tem;
            result = new Date(dateArray[i]);
        }
    }

    console.log("Latest Date: " + result.getFullYear() + "/" + (parseInt(result.getMonth()) + 1) + "/" + result.getDate())
}

// latestDate();

// Question 6 (First Character is upper case or not)

function upperOrNot() {
    let str = "Rello My name is Saurav shrestha."

    let pattern = /^[A-Z]/;

    if(pattern.test(str)) {
        console.log("The first character is UPPER case.");
    }else {
        console.log("The first character is LOWER case.");
    }
}

// upperOrNot();

// Question 7 (Email is valid or not)

function validEmail() {
    let pattern = /^(([a-zA-z]{1})[A-Za-z0-9!#$%&'*-=+/?^`{|}~_]+@)((gmail)|(hotmail)|(outlook)).com/

    let email = "saura@vsshr~`12384}{esth___#$%^a19@gmail.com";

    if(pattern.test(email) == true) {
        console.log("Email is valid.")
    }else {
        console.log("Email is NOT valid.")
    }

}
// validEmail();

// Question 8 (Check if the string contains date in Specefic order)

function checkDate() {
    let str = "Avengers Endgame was released on 12-04-2019";
    let arr = str.split(' ');

    d = "2020/02/27"

    for(let i = 0; i < arr.length; i++) {
        if(!(arr[i].indexOf('-') < 0)) {
            let arr2 = arr[i].split('-');

            if((arr2[0] <= 12 && arr2[0].length == 2) && arr2[1].length == 2 && arr2[2].length == 4) {
                console.log("The given date is in order mm-dd-yyyy");
            }else {
                console.log("The given date is NOT in order mm-dd-yyyy");
            }
        }
    }
}

// checkDate();

// Question 9 (Count the number of words in the string)

function countWords() {
    let str = "“You can check this string\nWhich contains this new line.\nBut it also consider the points in Note given above.";

    let count = 0;

    let arr = str.split('\n');

    for(let i = 0; i < arr.length; i++) {
        let words = arr[i].split(' ');

        count += words.length
    }

    console.log("Total words are: " + count);
}

// countWords();

// Question 10 (Get attribute from eliments)

function getAttribute() {
    let type = document.getElementById('paraLink').getAttribute('type');
    let hrefLang = document.getElementById('paraLink').getAttribute('hreflang');
    let rel = document.getElementById('paraLink').getAttribute('rel');
    let target = document.getElementById('paraLink').getAttribute('target');
    let link = document.getElementById('paraLink').getAttribute('href');
    let text = document.getElementById('paraLink').textContent;

    console.log(type);
    console.log(hrefLang);
    console.log(rel);
    console.log(target);
    console.log(link);
    console.log(text);
}

// getAttribute();

// Question 11 (Inserting row to HTML usng javaScript)

function insertingRow() {
    let table = document.getElementById('sampleTable');

    let newRow = table.insertRow(2);

    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(0);

    newCell1.innerHTML = "RowC Cell1";
    newCell2.innerHTML = "RowC Cell2";
}

// insertingRow();

// Question 12 (Wokin of function call in console)

function mul(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}

// console.log(mul(1)(2)(3));
// console.log(mul(4)(3)(4));


// Question 13 (Limiting the number of characters entered in textarea and showing the remaining count)

function textLimit() {
    // let remainingLength;
    let f = 1;
    $('#textbox').on({
        'input': (e) => {
            if(f == 0) return;

            let str = e.target.value;
            let remainingChar = 30 - str.length;

            $('#remainingText').text(`${remainingChar} Character(s) remaining`);
            if(remainingChar == 0) {
                f = 0;
            }

        },
        'keypress': (e) => {
            if(f == 0) {
                if(e.keyCode != 8) {
                    e.preventDefault();
                }
            }
        },
        'keyup': (e) => {
            if(e.keyCode == 8) {
                let str = e.target.value;
                let remainingChar = 30 - str.length;

                if(remainingChar > 0) {
                    f = 1;
                    $('#remainingText').text(`${remainingChar} Character(s) remaining`);
                }
            }
        }
    })
}

// textLimit();

// Question 14 (Count the no of paragraph);

function countPara() {
    let para = $('#selected p');
    let count = 0;
    
    for(let i = 0; i < para.length; i++) {
        count++;
        console.log(para[i].textContent)
    }
    // console.log("The total paragraph is " + count);
}

// countPara();

// Question 15 (Generate random string)

function randomString(len) {
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&-";

    let string = '';

    for(let i = 0; i < len; i++) {
        let randomNum = Math.floor((Math.random() * 70))
        string += charList[randomNum];
    }
    console.log(string)
}

randomString(2);

