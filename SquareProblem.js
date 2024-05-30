const array=[1, 2, 3, 4, 5];
let square="";
//iteration over array 
array.forEach(el=>{
    //adding the square value of each elements in the variable square,
    square+=(el**2)
    //addind a space to the variable to keep space beetween each element.
    square+=" "
})
//printing the square value of elements.
console.log(square)