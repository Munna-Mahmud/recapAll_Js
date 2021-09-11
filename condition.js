// 6 basic condition > , < , ===, !==, <=, >=

const number1= 200;
const number2= 20;

if( number1 === number2){
    console.log('okey')
}
else if( number1 < number2){
    console.log('That a big number')
} else if( number1 < 200 || number2 < 200){
console.log('cool')
}


//Note Here 

// Operator	Description	Comparing	
// ==	equal to	x == 8	false	
// x == 5	true	
// x == "5"	true	
// ===	equal value and equal type	x === 5	true	
// x === "5"	false	
// !=	not equal	x != 8	true	
// !==	not equal value or not equal type	x !== 5	false	
// x !== "5"	true	
// x !== 8	true	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// >=	greater than or equal to	x >= 8	false	
// <=	less than or equal to	x <= 8	true	
