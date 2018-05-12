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
 -----------------------------------------------------------------------------------------------------
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
  
