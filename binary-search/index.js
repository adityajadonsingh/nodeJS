
const binarySearch = (arr, searchElement) => {
    let low = 0, high = arr.length;
    while(low <= high){
        let mid = low + (high - low)/2;
        if(arr[mid] == searchElement) return mid;
        else if(arr[mid] < searchElement) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

module.exports = binarySearch;