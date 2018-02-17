// const CryptoJS = require("crypto-js");
// var key = CryptoJS.enc.Hex.parse('gl_lottery'); 
// var iv = CryptoJS.enc.Hex.parse('20180117'); 
// // var encrypted = CryptoJS.TripleDES.encrypt("Message", "Secret Passphrase"); 
// var decrypted = CryptoJS.TripleDES.decrypt("uyTOsoelBmfp5BMotADZVOGy/ASNd9xrqZQhbrKvcDQ==",key,{
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7 
// });
// console.log(decrypted)

// tripledes



// // const key = CryptoJS.enc.Utf8.parse('gl_lottery');


// var key = CryptoJS.enc.Hex.parse('gl_lottery'); 
// var iv = CryptoJS.enc.Hex.parse('20180117'); 
// var encrypted = CryptoJS.AES.encrypt("uyTOsoelBmfp5BMotADZVOGy/ASNd9xrqZQhbrKvcDQ==", key, { iv: iv });

// console.log("hello world")



// console.log(CryptoJS)
	// let key = 'gl_lottery';
// let iv = '20180117';

// var newKey = CryptoJS.enc.Utf8.parse('gl_lottery');
// var newIv = CryptoJS.enc.Utf8.parse('20180117');
// var obj = CryptoJS.DES.decrypt("uyTOsoelBmfp5BMotADZVOGy/ASNd9xrqZQhbrKvcDQ==", newKey, {
//     iv : newIv,
//     mode: CryptoJS.mode.CBC,    //可省略
//     padding: CryptoJS.pad.Pkcs7 //可省略
// }).toString(CryptoJS.enc.Utf8);

// console.log(obj)





// var newIv = CryptoJS.enc.Utf8.parse('20180117');

// function decrypt(input, key) {
//     var inputArray = new Buffer(input, 'base64');
//     var inputString = inputArray.toString();
//     var resultArray = CryptoJS.TripleDES.decrypt(inputString, key, {'mode': CryptoJS.mode.CBC, 'iv': newIv, 'pad': CryptoJS.pad.Pkcs7});
//     return resultArray.toString();
// }

// console.log(decrypt("uyTOsoelBmfp5BMotADZVOGy/ASNd9xrqZQhbrKvcDQ==", "gl_lottery"));







// var CryptoJS = require("crypto-js");

// function decryptByDES(ciphertext, key, iv) {    
//     var keyHex = CryptoJS.enc.Utf8.parse(key);  
//     var ivHex = CryptoJS.enc.Utf8.parse(iv);  
     
//     // direct decrypt ciphertext  
//     var decrypted = CryptoJS.TripleDES.decrypt({    
//         ciphertext: CryptoJS.enc.Base64.parse(ciphertext)    
//     }, keyHex, {    
//         mode: CryptoJS.mode.CBC,  
//         iv: CryptoJS.mode.iv, 
//         padding: CryptoJS.pad.Pkcs7    
//     });    
     
//     return decrypted.toString(CryptoJS.enc.Utf8);    
// }         
// console.log(decryptByDES("uyTOsoelBmfp5BMotADZVOGy/ASNd9xrqZQhbrKvcDQ==","gl_lottery","20180117"))





// var assert = require('assert');  
  
// function test_des(param) {  
//     var key = new Buffer(param.key);  
//     var iv = new Buffer(param.iv ? param.iv : 0)  
//     var plaintext = param.plaintext  
//     var alg = param.alg  
//     var autoPad = param.autoPad  
      
//     //encrypt  
//     var cipher = crypto.createCipheriv(alg, key, iv);  
//     cipher.setAutoPadding(autoPad)  //default true  
//     var ciph = cipher.update(plaintext, 'utf8', 'hex');  
//     ciph += cipher.final('hex');  
//     console.log(alg, ciph)  
  
//     //decrypt  
//     // var decipher = crypto.createDecipheriv(alg, key, iv);  
//     // cipher.setAutoPadding(autoPad)  
//     // var txt = decipher.update(ciph, 'hex', 'utf8');  
//     // txt += decipher.final('utf8');      
//     // assert.equal(txt, plaintext, 'fail');  
// }  
  
// test_des({  
//     alg: 'des-ede3-cbc',    //3des-cbc  
//     autoPad: true,  
//     key: 'gl_lottery',  
//     plaintext: 'uyTOsoelBmfp5BMotADZVOGy/ASNd9xrqZQhbrKvcDQ==',  
//     iv: '20180117'  
// })  



// 作者：kingjang
// 链接：https://www.jianshu.com/p/8d1412940f75
// 來源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。





var CryptoJS = require('crypto');  

var keyHex = CryptoJS.enc.Utf8.parse('gl_lottery');
// var encrypted = CryptoJS.TripleDES.encrypt('uyTOsoelBmfp5BMotADZVOGy/ASNd9xrqZQhbrKvcDQ==', keyHex, {    
// iv:CryptoJS.enc.Utf8.parse('20180117'),    
// mode: CryptoJS.mode.CBC,    
// padding: CryptoJS.pad.Pkcs7});
console.log(keyHex);