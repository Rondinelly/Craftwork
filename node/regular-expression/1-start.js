 //find text
 module.exports = function (str) {
    return /LITERALLY/.test(str)
  }
  
 //start 
  module.exports = function (str) {
    return /^LITERALLY/.test(str)
  }
  
  //end
    module.exports = function (str) {
    return /BANANAS$/.test(str)
  }
  
  //start vowel or a digit(char).
   module.exports = function (str) {
    return /^[aeiou0-9]/.test(str)
  }
  
  //the first character is not a digit and the second character is not a capital letter.
    module.exports = function (str) {
    return /^[^0-9][^A-Z]/.test(str)
  }
  
  //start '.'
    module.exports = function (str) {
    return /\.$/.test(str)
  }
 -------------------------------------------------------------------------------------------------------
  //Is .jpg or .jpeg
   module.exports = function (str) {
    return /^\d+\.jpe?g$/.test(str)
  }
  
 // Here are some simple quantifiers:

 // *  zero or more times
 // +  one or more times
 // ?  zero or one times
 
 -------------------------------------------------------------------------------------------------------
 
 //split string whitespace
 
 module.exports = function (str) {
    return str.split(/\s*,\s*/)
  }
 
 // `\s` is a shortcut for whitespace characters `[ \t\r\n\f]`.
 
 -------------------------------------------------------------------------------------------------------
 
//find number after 'x='
 module.exports = function (str) {
    var m = /x=(\d+)/.exec(str)
    return m ? m[1] : null
  }
 
  
//find only match `x=`.
 module.exports = function (str) {
    var m = /\bx=(\d+)\b/.exec(str)
    return m ? m[1] : null
  }
 
//start with `cat`, `dog`, or `robot`
 module.exports = function (str) {
    return/^(cat|dog|robot)\d+$/.test(str)
  }

  -------------------------------------------------------------------------------------------------------

//contains exactly eight columns of hex codes formatted like: 0xFF 
  module.exports = function (str) {
	    return /^(0x[A-Fa-f\d]{2}\s+){8}$/.test(str);
  }

// There are more quantifiers aside from `+`, `*`, and `?`:

// {n,m}  must occur at least n times but no more than m times
// {n,}   must occur at least n times
// {n}    must occur exactly n times
  -------------------------------------------------------------------------------------------------------

//return array string with double quotes
//ex.: ['"beans"', '"beep boop"', '"yay"']
   module.exports = function (str) {
    	return  str.match(/"[^"]*"/g)
   }
   
//markdown as input and return a string of html output.
const marked = require('marked')

module.exports = function (str) {
	let md = marked(str)

	return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}
