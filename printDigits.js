// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math.

function printDigits(num){


    while(num>0){
        console.log(num%10);
        num = Math.floor(num/10);
        // console.log(x);
        // let y = num%10;
        // console.log(y);
    }
    
}
printDigits(17814);