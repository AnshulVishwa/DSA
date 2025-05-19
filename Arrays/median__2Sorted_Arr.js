// Given two sorted arrays nums1 and nums2 of size m and n respectively,
//  return the median of the two sorted arrays.

const sort_merge = (nums1, nums2) => {
        let left = 0;
        let right = 0;
        const new_arr = [];
        let index = 0;

        while (left < nums1.length && right < nums2.length) {
            if (nums1[left] <= nums2[right]) {
                new_arr[index++] = nums1[left++];
            } else {
                new_arr[index++] = nums2[right++];
            }
        }

        while (left < nums1.length) new_arr[index++] = nums1[left++];
        while (right < nums2.length) new_arr[index++] = nums2[right++];

        return new_arr;
    };

    const findMedian = (arr) => {
        const total_l = arr.length;
        const isEven = total_l % 2 === 0;

        if (isEven) {
            const sum = arr[total_l / 2 - 1] + arr[total_l / 2];
            return sum / 2;
        } else {
            return arr[Math.floor(total_l / 2)];
        }
    };

console.log( findMedian( sort_merge( [1,3] , [2,4] ) ) )
