var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    phrase: ""
  });
});

router.post('/', function(req,res){
  res.render('index',{
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
});



function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  temp.toLowerCase().replace(" ","");

  temp = temp.replace(".", "");
  temp = temp.replace(",", "");
  temp = temp.replace(":", "");
  temp = temp.replace(";", "");
  temp = temp.replace("!", "");
  temp = temp.replace("?", "");
  temp = temp.replace("'", "");

  if(phrase.toLowerCase().replace(" ","") === temp.toLowerCase().replace(" ","")){
    return true
  }
  else{
    return false
  }
}

function removePunctuation(phrase){
  let noPunctuation = phrase.replace(".","")
}


function getResultDescription (phrase){
  let reverse = phrase.split("");
  reverse = reverse.reverse();
  reverse = reverse.join("");
  reverse = reverse.replace(" ", "");
  reverse = reverse.replace(".", "");
  reverse = reverse.replace(",", "");
  reverse = reverse.replace(":", "");
  reverse = reverse.replace(";", "");
  reverse = reverse.replace("!", "");
  reverse = reverse.replace("?", "");
  reverse = reverse.replace("'", "");
  reverse.toLowerCase();
  if(checkPalindrome(phrase)){
    return `${phrase} is a palindrome, reverse is ${reverse}`
  }
  return `${phrase} is not a palindrome, reverse is ${reverse}`
}

module.exports = router;
