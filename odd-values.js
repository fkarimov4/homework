//Fill in the function to return all the odd numbers in the arr

let arr = [1,4,6,9,2,11]

function findOdds(array) {
    let oddsArray = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0){
            oddsArray.push(arr[i])
        }
    }
    return oddsArray
}
console.log(findOdds(arr))