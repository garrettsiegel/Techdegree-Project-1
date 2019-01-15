//TEAM TREEHOUSE TECHDEGREE PROJECT 1, RANDOM QUOTE GENERATOR, BY: GARRETT SIEGEL
//STUDY GUIDE LINK- https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//QUOTES OBJECTS ARRAY
var quotes = [
  {
    quote: 'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    citation: 'Goodreads.com',
    category: 'Coding'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'You might not think that programmers are artists, but programming is an extremely creative profession. It\'s logic-based creativity.',
    source: 'John Romero',
    citation: 'Brainyquote.com',
    category: 'Programming'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'Learning to code is useful no matter what your career ambitions are.',
    source: 'Arianna Huffington',
    citation: 'Founder, The Huffington Post',
    category: 'Coding'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'Good design adds value faster than it adds cost.',
    source: 'Thomas C. Gale',
    citation: '',
    category: 'Design'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    source: 'Confucius',
    citation: 'Motivationping.com',
    category: 'Motivation'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'Your decisions from today forward will affect not only your life, but also your entire legacy.',
    source: 'Dave Ramsey',
    citation: 'Daveramsey.com',
    category: 'Money'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'If you don’t decide what your priorities are in life, everyone else will decide for you.',
    source: 'Christy Wright',
    citation: 'Daveramsey.com',
    category: 'Money'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'Success is not counted by how high you have climbed but by how many people you brought with you.',
    source: 'Wil Rose',
    citation: 'Twitter',
    category: 'Success'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'You are confined only by the walls you build yourself.',
    source: '',
    citation: 'Lifehack.org',
    category: 'Motivation'
  }, //OBJECTS SEPARATED W/COMMA
  {
    quote: 'First, solve the problem. Then, write the code.',
    source: 'John Johnson',
    citation: 'Devtopics.com',
    category: 'Coding'
  }
];


//GET RANDOM QUOTE FUNCTION
function getRandomQuote(quotes){
  //GENERATES RANDOM NUMBER FROM LENGTH OF OBJECTS IN QUOTES ARRAY
  var randomNumber = Math.floor(Math.random() * quotes.length);
  //USES RANDOM NUMBER TO GRAB ITEM FROM QUOTES ARRAY
  var randomQuote = quotes[randomNumber];
  //RETURNS ABOVE ITEM
  return randomQuote;
};


//PRINT QUOTE FUNCTION
function printQuote(){
  //CALL AND STORE RANDOM QUOTE
  var callRandomQuote = getRandomQuote(quotes);
  //CALLS QUOTE OBJECT VARIABLES
  //************* STILL NEED TO SET CONDITIONALS
  var htmlString =
  //CALLS QUOTE FROM CHOSEN OBJECT
  '<p class="quote">' + callRandomQuote.quote + '</p>';
  //CONDITIONAL CHECK FOR SOURCE
  if (callRandomQuote.source) {
      htmlString += '<p class="source">' + callRandomQuote.source;
  //CONDITION FOR NO SOURCE
  } else {
      htmlString += '<p class="source">' + 'Source Unknown';
  }
  //CONDITIONAL CHECK FOR CITATION
  if (callRandomQuote.citation) {
      htmlString += '<span class="citation">' + callRandomQuote.citation + ', ' + '</span>';
  //CONDITION FOR NO CITATION
  } else {
      htmlString += '<span class="citation">' + 'Unknown Origin, ' + '</span>';
  }
  //CONDITIONAL CHECK FOR CATEGORY
  if (callRandomQuote.category) {
      htmlString += '<span class="category">' + 'Category: ' + callRandomQuote.category + '</span>'
  }
  //ENDS PARAGRAPH TAG
  htmlString += '</p>';
  //SET VARIABLE TO HTML ID
  document.getElementById('quote-box').innerHTML = htmlString;
};
//PRINTS INITIAL QUOTE UPON LOADING PAGE
printQuote();
//TIMER INTERVAL AUTO-CHANGING QUOTES EVERY 5.5 SECONDS
setInterval(printQuote, 5500);


//RANDOM BACKGROUND COLOR
//FUNCTION SETTING RANDOM RGB NUMBER VALUE
function colorValue() {
  var randomColor = Math.floor(Math.random() * 256);
  return randomColor;
}
//RANDOM BACKGROUND COLOR FUNCTION
function randomRGBValue() {
    //SETS RANDOM RED VALUE
    var red = colorValue();
    //SETS RANDOM GREEN VALUE
    var green = colorValue();
    //SETS RANDOM BLUE VALUE
    var blue = colorValue();
    //ADDS RGB VALUES TOGETHER SETS VARIABLE
    var backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    //SETS STYLE AS BACKGROUND
    document.body.style.background = backgroundColor;
  };
//SETS RANDOM BACKGROUND COLOR UPON LOAD
randomRGBValue();
//TIMER INTERVAL AUTO-CHANGING BACKGROUND COLOR EVERY 5.5 SECONDS
setInterval(randomRGBValue, 5500);


//DO NOT MAKE ANY CHANGES TO CODE BELOW THIS COMMENT
//SHOW ANOTHER QUOTE BUTTON CLICK LISTENER
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);
