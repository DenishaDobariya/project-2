function findOccurrence(str1,str2){
    return str1.indexOf(str2);
}

const str1= "Hello World";
const str2= "World";
const index=findOccurrence(str1,str2);

if(index!==-1){
    console.log("index of the first occurrence" ,index);
}
else{
    console.log("String str2 is not part of str1");
}