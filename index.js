function isPalindrome(word) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare the cleaned word with its reverse
  return cleanedWord === cleanedWord.split('').reverse().join('');
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man, a plan, a canal: Panama"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello world"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("12321"));
}

module.exports = isPalindrome;