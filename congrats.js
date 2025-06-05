/**
 * Congrats script that decodes a ROT13 encoded message
 */

// The ROT13 encoded message
const encodedMessage = 'Pbatenghyngvbaf ba ohvyqvat n pbqr-rqvgvat ntrag!';

/**
 * Decodes a ROT13 encoded string
 * @param {string} str - The ROT13 encoded string
 * @return {string} The decoded string
 */
function rot13Decode(str) {
  return str.replace(/[a-zA-Z]/g, function(char) {
    // Get the character code
    const charCode = char.charCodeAt(0);
    
    // Determine the base (97 for lowercase 'a', 65 for uppercase 'A')
    const base = char.toLowerCase() === char ? 97 : 65;
    
    // Perform the ROT13 decoding (which is the same as encoding since rotation is by 13)
    // (charCode - base + 13) % 26 + base would be for encoding
    // For decoding: (charCode - base + 13) % 26 + base is equivalent to (charCode - base + 13) % 26 + base
    // Because ROT13 applied twice returns the original text
    return String.fromCharCode((charCode - base + 13) % 26 + base);
  });
}

// Decode and print the message
const decodedMessage = rot13Decode(encodedMessage);
console.log(decodedMessage);