function _in() 
{
  return document.getElementById("txt_input").value || "";
}
function _out(s) 
{
  document.getElementById("txt_result").value = s;
}
function ex56_enter() 
{
  _out(_in());
}
function ex56_countUpper() 
{
  let matches = _in().match(/[A-Z]/g);
  _out("Uppercase count: " + (matches ? matches.length : 0));
}
function ex56_upper() 
{
  _out(_in().toUpperCase());
}
function ex56_oneWordPerLine() 
{
  let words = _in().trim().split(/\s+/).filter(Boolean);
  _out(words.join("\n"));
}
function ex56_lower() 
{
  _out(_in().toLowerCase());
}
function ex56_wordCount() 
{
  let words = _in().trim().match(/\S+/g);
  _out("Word count: " + (words ? words.length : 0));
}
function ex56_countLower() 
{
  let matches = _in().match(/[a-z]/g);
  _out("Lowercase count: " + (matches ? matches.length : 0));
}
function ex56_printVowelsConsonants() 
{
  let letters = _in().toLowerCase().match(/[a-z]/g) || [];
  let vowels = letters.filter(ch => "aeiou".includes(ch));
  let consonants = letters.filter(ch => !"aeiou".includes(ch));
  _out(
    "Vowels (" + vowels.length + "): " + vowels.join(" ") +
    "\nConsonants (" + consonants.length + "): " + consonants.join(" ")
  );
}
