let num= 73
let count= 0
for(let i=1; i<=num; i++){
  if(num%i==0){
count++
}
}

if(count==2){
console.log("yes it's prime")
}
else{
console.log("no it's not a prime")}
