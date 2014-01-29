(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#start').click(clickOnStart);
  }

  
  var timer;
  var counter = 0;
  var globalArray = [];

  function clickOnStart(){
    var initString = $('#inputText').val();
    var noPunctuation = initString.replace(/,/g, '');
    var noPunct= noPunctuation.replace(/\./g, '');
    globalArray.push(noPunct);
    globalArray = noPunct.split(' ');
    globalArray = _.shuffle(globalArray);

//loop needs to start here
    timer = setInterval(loopStart, 1000);
  }
  
  function loopStart(){
    var word = selectRandomWord(globalArray);
    globalArray = _.rest(globalArray);
    console.log(globalArray);

    if((word.length) % 2 === 0){
      runIfEven(word);
    }else{
      runIfOdd(word);
    }
    counter++;

    if(globalArray.length < 1){
      clearInterval(timer);
    }
  }

  function selectRandomWord(array){
    var word =  array[0];
    return word;
  }




  function runIfEven(word){
    var originalWord = word;
    var wordLength = word.length;
    word = word.toLowerCase();
    var $div = $('<div>');
    var $wordSpan = $('<span>');
    var $numSpan = $('<span>');
    var letter = word[0];
    word = word.slice(1);
    word = word + letter + 'a';
    var total = 0;
    for(var i = 0; i <= (wordLength + 1); i++){
      total = total + i;

    }
    console.log(originalWord);

    $wordSpan.text(word).addClass('evenWord');
    $numSpan.text(total).addClass('evenNum');
    var $a = $('<a href=https://www.google.com/#q='+ originalWord + '>');
    $div.append($a);
    $a.append($wordSpan, $numSpan);
    $('#even').append($div);
  }

  function runIfOdd(word){
    word = word.toUpperCase();
    var originalWord = word;
    word = word.replace(/[aeiou]/ig,'');
    var wordLength = word.length;
    if(wordLength < 2){
      return;
    }

    var $div = $('<div>');
    var $wordSpan = $('<span>');
    var $numSpan = $('<span>');
    var total = 1;


    for(var i = 1; i <= wordLength; i++){
      total = total * i;
    }
    console.log(originalWord);
    $wordSpan.text(word).addClass('oddWord');
    $numSpan.text(total).addClass('oddNum');

    var $a = $('<a href=https://www.google.com/#q='+ originalWord + '>');
    $div.append($a);
    $a.append($wordSpan, $numSpan);
    $('#odd').append($div);
  }

})();

