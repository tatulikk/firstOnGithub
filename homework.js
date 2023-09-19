// //SAVARJISHO 8
// let num=5
// if(num>0){
//     console.log(num/5+(2+num)**3) 
// }
// else{
//     console.log((5*num+(3+num**5)/4))
// }



// let x = 5
// if(x === 1){
//     console.log(5*x)
// }
// else if(x>0){
//     console.log(2*x+x**2)
// }
// else if(x <0){
//     console.log((3+x)/(x+1))
// }



// SAVARJISHO 10

// let num1 = 34
// console.log(num1 % 10)






// SAVARJISHO 11
// let year = 2025
// if(year %100 ===0 & year % 400 !== 0){
//     console.log(" ar aris nakiani weliwadi")
// }

// else if(year % 4 === 0){
//     console.log("nakiani weliwadi")
// }
// else{
//     console.log("ar aris nakiani weliwadi")
// }


// let num = 13
// let num1 = 8
// let mokmedeba = "/"
// if(mokmedeba === "+"){
//     console.log(num+num1)
// }
// else if(mokmedeba === "-"){
//     console.log(num-num1)
// }
// else if(mokmedeba === "*"){
//     console.log(num*num1)
// }
// else if(mokmedeba === "/"){
//      console.log(num/num1)
// }



// console.log(Math.floor(6.4))


// let count = 0
 
// while(count < 50){
//     count = count + 2
//     console.log(count)
// }


// let count = 20
// while(count >= 0){
//     console.log(count)
//     count = count - 1
    
// }


// let count = 0
// for(count; count < 100; count +=5){
//     console.log(count )
// }


// let count = 3
// while(count < 97){
//     count = count + 1
//     if(count % 5 === 0){
//         console.log(count)
//     }
//     else{
//         console.log("ar iyofa")
//     }
// }






// 14 sektemberi

// let count = 19
// while(count < 125){
//     count = count + 1
//     if(count % 5 ===0){
//         console.log(count)
//     }
// }



// let count1 = 201
// while(count1 > 25){
//     count1 = count1 - 1
//     if(count1 % 8 ===0){
//         console.log(count1)
//     }
// }

//range

// let count4 = 201
// for(count4; count4 > 25;count4 --){
//     if(count4 % 8 ===0){
//         console.log(count4)
//     }
// }




// let count2 = 1499
// while(count2 < 2100){
//     count2 = count2 + 1
//     if(count2 % 7 ===0 & count2 % 5 ===0){
//         console.log(count2)
//     }   
// }






// let count2 = 1499
// let count3 = 2100
// let plus = 0
// while(count2 < count3){
//     count2 = count2 + 1
//     if(count2 % 7 ===0 & count2 % 5 ===0){
//         plus += count2
        
//     }

// }
// console.log(plus)


// let count2 = 1499
// let count3 = 2100
// let plus = 0
// for(count2;count2 < count3+1;count2++){
//     if(count2 % 7 ===0 & count2 % 5 ===0){
//         plus += count2
//     }
// }
// console.log(plus)


// let num = 1
// while(num < 100){
//     num = num+1
//     if(num % 13 ===0 & num % 2 ===0 & num % 3 ===0){
        
//         continue
//     }
//     console.log(num)
    
// }



// let num = 1500
// let plus = 0
// while(num < 2100){
//     num = num+1
//     if(num % 7 ===0 & num % 5 ===0){
//         plus += num 
        
//     }
//     if(plus > 20000){
//         break
//     }

    

// }
// console.log(plus)


let num = 1500
let quantity = 0
while(num < 2100){
    num = num + 1
    if(num % 5 ===0){
        quantity += 1
    }
}
console.log(quantity)