function login() {
    var localStorageValueSetEmail = localStorage.setItem('gmail', 'quiz@gmail.com')
    var localStorageValueSetPass = localStorage.setItem('password', 'quizpassword')
    var loginEmail = document.getElementById('login-email').value
    var loginPassword = document.getElementById('login-password').value
    var localStorgeEmail = localStorage.getItem('gmail')
    var localStorgePassword = localStorage.getItem('password')
    if (loginEmail === localStorgeEmail && loginPassword === localStorgePassword) {
        window.location.href = 'quiz.html'
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Enter Valid Email or Password',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}

var html = [
    {
        question: 'Q.1 What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Q.2 Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Q.3 Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'Q.4 What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'Q.5 What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Q.6 Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Q.7 Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'Q.8 What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Q.9 Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'Q.10 How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Q.11 Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Q.12 Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        option2: 'do not know',
        correctOption: "True"
    },
    {
        question: "Q.13 How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        correctOption: "<ol>"
    },
    {
        question: 'Q.14 How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        correctOption: "<ul>"
    },
    {
        question: 'Q.15 What is the correct HTML for inserting an image?',
        option1: '<img alt="MyImage">image.gif</img>',
        option2: '<img href="image.gif" alt="MyImage">',
        option3: '<img src="image.gif" alt="MyImage">',
        correctOption: '<img src="image.gif" alt="MyImage">'
    },
    {
        question: 'Q.16 What is the correct HTML for making a checkbox?',
        option1: '<iput type="check">',
        option2: '<check>',
        option3: '<input type="checkbox">',
        correctOption: '<input type="checkbox">'
    },
    {
        question: "Q.17 What is the correct HTML for making a text input field?",
        option1: '<input type="textfield">',
        option2: '<input type="text">',
        option3: '<textfield>',
        correctOption: '<input type="text">'
    },
    {
        question: 'Q.18 What is the correct HTML for making a drop-down list?',
        option1: '<select>',
        option2: '<list>',
        option3: '<input type="list">',
        correctOption: '<select>'
    },
    {
        question: 'Q.19 What is the correct HTML for making a text area?',
        option1: '<input type="textbox">',
        option2: '<input type="textarea">',
        option3: '<textarea>',
        correctOption: '<textarea>'
    },
    {
        question: 'Q.20 What is the correct HTML for inserting a background image?',
        option1: '<background img="background.gif">',
        option2: '<body bg="background.gif">',
        option3: '<body style="background-image:url(background.gif)">',
        correctOption: '<body style="background-image:url(background.gif)">'
    }
]

var css = [
    {
        question: 'Q.1 What does CSS stand for?',
        option1: 'Colorful Style Sheet',
        option2: 'Computer Style Sheet',
        option3: 'Cascading Style Sheet',
        correctOption: 'Cascading Style Sheet'
    },
    {
        question: 'Q.2 What is the correct HTML for referring to an external style sheet?',
        option1: '<stylesheet>mystyle.css</stylesheet>',
        option2: '<style src="mystyle.css">',
        option3: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        correctOption: '<link rel="stylesheet" type="text/css" href="mystyle.css">'
    },
    {
        question: 'Q.3 Where in an HTML document is the correct place to refer to an external style sheet?',
        option1: 'In the <body> section',
        option2: 'In the <head> section',
        option3: 'At the end of the document',
        correctOption: 'In the <head> section'
    },
    {
        question: 'Q.4 Which HTML tag is used to define an internal style sheet?',
        option1: '<css>',
        option2: '<style>',
        option3: '<script>',
        correctOption: '<style>'
    },
    {
        question: 'Q.5 Which HTML attribute is used to define inline styles?',
        option1: 'styles',
        option2: 'font',
        option3: 'style',
        correctOption: 'style'
    },
    {
        question: 'Q.6 Which is the correct CSS syntax?',
        option1: 'body{color: black;}',
        option2: '{body:color=black;}',
        option3: 'body:color=black;',
        correctOption: 'body{color: black;}'
    },
    {
        question: 'Q.7 How do you insert a comment in a CSS file?',
        option1: '/*this is a comment*/',
        option2: '//this is a comment',
        option3: '//this is a comment//',
        correctOption: '/*this is a comment*/'
    },
    {
        question: 'Q.8 Which property is used to change the background color?',
        option1: 'bgcolor',
        option2: 'color',
        option3: 'background-color',
        correctOption: 'background-color'
    },
    {
        question: 'Q.9 How do you add a background color for all <h1> elements?',
        option1: 'h1 {background-color:#FFFFFF;}',
        option2: 'h1.all {background-color:#FFFFFF;}',
        option3: 'all.h1 {background-color:#FFFFFF;}',
        correctOption: 'h1 {background-color:#FFFFFF;}'
    },
    {
        question: 'Q.10 Which CSS property is used to change the text color of an element?',
        option1: 'color',
        option2: 'text-color',
        option3: 'fgcolor',
        correctOption: 'color'
    },
    {
        question: 'Q.11 Which CSS property controls the text size?',
        option1: 'font-size',
        option2: 'text-style',
        option3: 'text-size',
        correctOption: 'font-size'
    },
    {
        question: 'Q.12 What is the correct CSS syntax for making all the <p> elements bold?',
        option1: 'p {font-weight:bold;}',
        option2: '<p style="font-size:bold;">',
        option3: '<p style="text-size:bold;">',
        correctOption: 'p {font-weight:bold;}'
    },
    {
        question: 'Q.13 How do you display hyperlinks without an underline?',
        option1: 'a {underline:none;}',
        option2: 'a {decoration:no-underline;}',
        option3: 'a {text-decoration:none;}',
        correctOption: 'a {text-decoration:none;}'
    },
    {
        question: 'Q.14 How do you make each word in a text start with a capital letter?',
        option1: 'text-style:capitalize',
        option2: 'text-transform:capitalize',
        option3: 'You can not do that with CSS',
        correctOption: 'text-style:capitalize'
    },
    {
        question: 'Q.15 Which property is used to change the font of an element?',
        option1: 'font-style',
        option2: 'font-weight',
        option3: 'font-family',
        correctOption: 'font-family'
    },
    {
        question: 'Q.16 How do you make the text bold?',
        option1: 'style:bold;',
        option2: 'font:bold;',
        option3: 'font-weight:bold;',
        correctOption: 'font-weight:bold;'
    },
    {
        question: 'Q.17 Which property is used to change the left margin of an element?',
        option1: 'margin-left',
        option2: 'padding-left',
        option3: 'indent',
        correctOption: 'margin-left'
    },
    {
        question: 'Q.18 When using the padding property; are you allowed to use negative values?',
        option1: 'Yes',
        option2: 'No',
        option3: 'do not know',
        correctOption: 'do not know'
    },
    {
        question: 'Q.19 How do you make a list that lists its items with squares?',
        option1: 'list: square;',
        option2: 'list-type: square;',
        option3: 'list-style-type: square;',
        correctOption: 'list-style-type: square;'
    },
    {
        question: 'Q.20 How do you select an element with id "demo"?',
        option1: '#demo',
        option2: '.demo',
        option3: 'demo',
        correctOption: '#demo'
    }
]

var js = [
    {
        question: 'Q.1 Inside which HTML element do we put the JavaScript?',
        option1: '<scprit>',
        option2: '<javascript>',
        option3: '<js>',
        correctOption: '<script>'
    },
    {
        question: 'Q.2 Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section'
    },
    {
        question: 'Q.3 What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">'
    },
    {
        question: 'Q.4 The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        option3: 'do not know',
        correctOption: 'False'
    },
    {
        question: 'Q.5 How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        correctOption: 'alert("Hello World");'
    },
    {
        question: 'Q.6 How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()'
    },
    {
        question: 'Q.7 How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()'
    },
    {
        question: 'Q.8 How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        correctOption: 'if(i == 5)'
    },
    {
        question: 'Q.9 How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        correctOption: 'if(i != 5)'
    },
    {
        question: 'Q.10 How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)'
    },
    {
        question: 'Q.11 How does a FOR loop start?',
        option1: 'for (i = 0; i <= 5; i++)',
        option2: 'for (i <= 5; i++)',
        option3: 'for i = 1 to 5',
        correctOption: 'for (i = 0; i <= 5; i++)'
    },
    {
        question: 'Q.12 How can you add a comment in a JavaScript?',
        option1: '//This is a comment',
        option2: "'This is a comment",
        option3: '<!--This is a comment-->',
        correctOption: '//This is a comment'
    },
    {
        question: 'Q.13 What is the correct way to write a JavaScript array?',
        option1: 'var colors = "red", "green", "blue"',
        option2: 'var colors = (1:"red", 2:"green", 3:"blue")',
        option3: 'var colors = ["red", "green", "blue"]',
        correctOption: 'var colors = ["red", "green", "blue"]'
    },
    {
        question: 'Q.14 How do you round the number 7.25, to the nearest integer?',
        option1: 'round(7.25)',
        option2: 'Math.rnd(7.25)',
        option3: 'Math.round(7.25)',
        correctOption: 'Math.round(7.25)'
    },
    {
        question: 'Q.15 How do you find the number with the highest value of x and y?',
        option1: 'ceil(x, y)',
        option2: 'Math.max(x, y)',
        option3: 'Math.ceil(x ,y)',
        correctOption: 'Math.max(x, y)'
    },
    {
        question: 'Q.16 What is the correct JavaScript syntax for opening a new window called "w2" ?',
        option1: 'w2 = window.open("http://www.w3schools.com");',
        option2: 'w2 = window.new("http://www.w3schools.com");',
        option3: 'w2 = window.href("http://www.w3schools.com");',
        correctOption: 'w2 = window.open("http://www.w3schools.com");'
    },
    {
        question: 'Q.17 JavaScript is the same as Java.',
        option1: 'True',
        option2: 'False',
        option3: 'do not know',
        correctOption: "False"
    },
    {
        question: "Q.18 How can you detect the client's browser name?",
        option1: 'client.navName',
        option2: 'browser.name',
        option3: 'navigator.appName',
        correctOption: 'navigator.appName'
    },
    {
        question: 'Q.19 Which event occurs when the user clicks on an HTML element?',
        option1: 'onclick',
        option2: 'onmouseclick',
        option3: 'onchange',
        correctOption: 'onclick'
    },
    {
        question: 'Q.20 How do you declare a JavaScript variable?',
        option1: 'v carName;',
        option2: 'variable carName;',
        option3: 'var carName;',
        correctOption: 'var carName;'
    }
]

var index = 0;
var opt1 = document.getElementById('option1')
var opt2 = document.getElementById('option2')
var opt3 = document.getElementById('option3')
var ques = document.getElementById('question')
var btnCheck = document.getElementById('btn-check')
score = 0;
var selectedTopic;
var description = document.getElementById('main')
var quizzify = document.getElementById('quizzify')
var options = document.getElementsByName('answers')
var sec = 59;
var min = 1;

function quiz(language){
    document.documentElement.requestFullscreen()

    if(language === 'html'){
    selectedTopic = html
    }
    else if (language === 'css'){
    selectedTopic = css
    }
    else if (language === "js"){
        selectedTopic = js
    }
    for (var i = 0; i < options.length; i++){
      if( options[i].checked === true){
        btnCheck.disabled = true
        options[i].checked = false
var userAnswer = selectedTopic[index-1][`option${options[i].value}`]
var correctAnswer = selectedTopic[index - 1].correctOption
if(userAnswer === correctAnswer){
    score++
}

}
      
}
    var total = 20
    var resultCircle = document.getElementById('resultShow')
    var circle = document.getElementById('circle')
    var quizResult;
    var remarks1 = document.getElementById('remarks1')
    var remarks2 = document.getElementById('remarks2')
    var hideBtn = document.getElementById('btnShow')
    
    
    if(index >= total){
        document.exitFullscreen()
        hideBtn.style.display = 'block'
        quizzify.style.display = 'none'
        resultCircle.style.display = 'block'
        var percent = ((score / total) * 100).toFixed(2);
        circle.innerHTML = `
        <div class='result-align'>
        <h2 class='quiz-head'>Quiz Result</h2>
        <h1 class='quiz-per'> ${percent} </h1>
        </div>
        `
        if(percent >= 70 ){
 remarks1.style.display = 'block'
        }
 if(percent < 70){
     remarks2.style.display = 'block'
 }
    }
       else{
        description.innerHTML = ''
        quizzify.style.display = 'block'
        ques.innerText = selectedTopic[index].question
        opt1.innerText = selectedTopic[index].option1
        opt2.innerText = selectedTopic[index].option2
        opt3.innerText = selectedTopic[index].option3
        index++
        min = 1;
        sec = 59;
       }
       var timer = document.getElementById("timer")
       var interval = setInterval(function () {
           timer.innerHTML = `${min}:${sec}`
           sec--
           if (sec < 1) {
       
               if (min < 1) {
                   min = 1
                   sec = 59
                   quiz()
               }
               else {
                   min--
                   sec = 59
               }
       
           }
       }, 2000)
    }



function enabledBtn(){
    btnCheck.disabled = false
}

function logOut(){
    location.replace('index.html')
    
}





























function quizTopic(topic) {
    

    document.documentElement.requestFullscreen()
    var doSelect = document.getElementById('do-select')
    var quizzify = document.getElementById('Quizzify')
    // doSelect.style.display = 'none'
    // quizzify.style.display = 'block'
    if (topic === 'html') {
        selectTopic = html
    }
    else if (topic === 'css') {
        selectTopic = css
    }
    else if (topic === 'javascript') {
        selectTopic = js
    }

    if (index >= 20) {
        clearInterval()
        // document.exitFullscreen()
        var result = (score / 20 * 100)
        if (result < 70){
            var fail = 'You are Fail'
        }
        else {
            var passed = 'Congrats! Your Passed'
        }
    }
    var options = document.getElementsByName('answers')
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var selected = options[i].value
            var userAnswer = html[index - 1][`option${selected}`]
            var correctAnswer = html[index - 1].correctOption
            if (userAnswer === correctAnswer) {
                score++
            }
        }
        options[i].checked = false
        btnCheck.disabled = true
    }
    if (index > html.length - 1) {
        console.log(`You Scored ${score} points:`)
        // var percentage = `Your Percentage is ${score/200*100}`
        // if(percentage > 70){
        //     console.log(`Congrates you Passed With Percenatge of ${percentage}`)
        // }
        // else{
        //     console.log(`You Failed With Percentage of ${percentage}`)
        // }
    }
    else {
        ques.innerText = html[index].question
        opt1.innerText = html[index].option1
        opt2.innerText = html[index].option2
        opt3.innerText = html[index].option3
        index++;
    }
}
// nextQuestion()

function enabledBtn() {
    btnCheck.disabled = false

}