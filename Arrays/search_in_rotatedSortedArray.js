class Search_in_Array {
    constructor(nums) {
        this.nums = nums;
    }

    #findPosition() {
        for (let k = 0; k < this.nums.length - 1; k++) {
            if (this.nums[k] > this.nums[k + 1]) {
                return k + 1;
            }
        }
        return -1; 
    }

    #binarySearch(left, right, target) {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (this.nums[mid] === target) return mid;
            if (this.nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    search(target) {
        let pivot = this.#findPosition();
        if (pivot === -1) {
            return this.#binarySearch(0, this.nums.length - 1, target);
        }
        let leftSearch = this.#binarySearch(0, pivot - 1, target);
        if (leftSearch !== -1) return leftSearch;

        return this.#binarySearch(pivot, this.nums.length - 1, target);
    }
}

var search = function(nums, target) {
    const result = new Search_in_Array(nums);
    return result.search(target);
};
