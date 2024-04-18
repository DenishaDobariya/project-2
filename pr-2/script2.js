function reverseWords(str) {
    const trimmedStr = str.trim();
    
    const wordsArray = trimmedStr.split(/\s+/);
    
    const reversedArray = wordsArray.reverse();

    const reversedString = reversedArray.join(" ");
    
    return reversedString;
}

const inputString = "Hello world how are you";
const reversedString = reverseWords(inputString);
console.log("Reversed string with spaces intact:", reversedString);
