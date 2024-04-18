function findMajority(arr) {
    let candidate;
    let count = 0;

    for(let i=0; i<arr.length; i++){
        if(count===0){
            candidate=arr[i];
            count=1;
        }
        else if(arr[i]===candidate){
            count++;
        }
        else{
            count--
        }
    }

    count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===candidate){
            count++;
        }
    }

    if(count>arr.length/2){
        return candidate;
    }
    else{
        return null;
    }
}

const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majorityElement = findMajority(arr);
if (majorityElement !== null) {
    console.log("Majority element is:", majorityElement);
} else {
    console.log("No majority element found");
}

