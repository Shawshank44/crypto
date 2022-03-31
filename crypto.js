const crypto = require('crypto')



// const mixin = (data)=>{
//     const salt = crypto.randomBytes(14).toString('hex')
//     const hash1 = crypto.pbkdf2Sync(data,salt,1000,64,'sha512').toString('hex')
//     function verify(password){
//         let hashs = crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex')
//         if (hash1 === hashs){
//             return `login success`
//         }else{
//             return 'invalid credentials'
//         }
//     }
//     return [hash1,verify(data)]

// }
// console.log(mixin('shashank'))


// let mydict = {
//     name: "kgdhjg",
//     age : "ghfsghfs"
// }
// let data = JSON.stringify(mydict)
// const salt = crypto.randomBytes(14).toString('hex')
// const hash1 = crypto.pbkdf2Sync(data,salt,1000,64,'sha512').toString('hex')
// console.log(hash1)


const mydata = (data)=>{
    const salt = crypto.randomBytes(14).toString('hex')
    const stringly = JSON.stringify(data)
    const hash1 = crypto.pbkdf2Sync(stringly,salt,1000,64,'sha512').toString('hex')
    return hash1
}

const datas = mydata({
    name : "shashank"
})

console.log(datas)

