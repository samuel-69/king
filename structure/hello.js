const character="#";
const count=10;
const rows=[];
let inverted=false;
function sam(j,m){
    return " ".repeat(m-9)+character.repeat(2*j-1)+" ".repeat(m-j);
}
for(let i=1;i<=count;i++){
    if(inverted){
        rows.unshift(sam(i,count));

    }
    else{
        rows.push(sam(i,count));
    }
} 
let result="";
for(const row of rows){
    result= result +"\n"+ row;
}
console.log(result);