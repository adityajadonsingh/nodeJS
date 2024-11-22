const binarySearch = (arr, target) =>{
    let low = 0, high = arr.length;
    while(low <= high){
        let mid = low + (high - low)/2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
}
const arraySum = (arr, type) => {
    if(type === "repeat")
}