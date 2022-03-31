const crypto = require('crypto');
const fs = require("fs");
  
// Using a function generateKeyFiles
function generateKeyFiles() {
  
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 520,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: ''
        }
    });
       
    // Creating private key file 
    fs.writeFileSync("private_key", keyPair.privateKey);
}
  
// Generate keys
generateKeyFiles();
  
// Creating a function to encrypt string
function encryptString (plaintext, privateKeyFile) {
    const privateKey = fs.readFileSync(privateKeyFile, "utf8");
  
    // privateEncrypt() method with its parameters
    const encrypted = crypto.privateEncrypt(
         privateKey, Buffer.from(plaintext));
  
    // Returns buffer as its not encoded
    return encrypted;
}
  
// Defining a text to be encrypted
const plainText = "Gfggd";
  
// Defining encrypted text
const encrypted = encryptString(plainText, "./private_key");
  
// Prints plain text
console.log("Plaintext:", plainText);
  
// Prints encrypted text
console.log("Encrypted buffer: ", encrypted);