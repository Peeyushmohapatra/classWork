
let pass = "PeeyushM1998@gmail"

let nameCopy;
// function isString(name){
//     if(name.length>=3 && name.length<16){
//         nameCopy = name.toLowerCase();
//         let flag = true;
//         for(let i=0; i<nameCopy.length; i++){
//             let ch = nameCopy.charAt(i);
//             if(ch>='a' && ch<='z'){
//                 flag = true;
//             }else{
//                 flag = false;
//             }
//         }
//         if(flag === false){
//             return false;
//         }else{
//             return true;
//         }
//     }else{
//         return false;
//     }
// }


function password(name){
    if(name.length>=6 && name.length<=20){
        for(let i=0; i<name.length; i++){
            let ch = name.charAt(i);
            if(ch === "" || ch===" " || ch === "`" || ch==="." || ch==="," || ch ==="?"){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

console.log(password(pass))
