function calculateTax(amount ) {
    return amount * 0.1; // Assuming a tax rate of 10%  
}
function convertToUpperCase(str) {
    return str.toUpperCase(); // Converts the input string to uppercase  
}
function findMaximum(num1, num2) {
    return Math.max(num1,num2); // Returns the maximum value from the array  
}
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join(''); // Checks if the string is a palindrome  
}
function calculateDiscountedPrice(price, discount) {
    return price - (price * (discount / 100)); // Calculates the discounted price based on the original price and discount percentage  
}   

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };