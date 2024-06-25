let output = [];
let count = 1;
function sam (){
    if(count % 3 === 0){
       output.push("Fizz");
    }
    else if(count % 5 === 0){
        output.push("Buzz")
    }
    else if(count % 3 ===0 && count % 5 === 0){
        output.push("FizzBuzz")
    }
    output.push(count);
    count++;
    console.log(output);
}
sam ();
