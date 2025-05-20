function find_biggest_container(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        if (maxArea < area) maxArea = area;

        height[left] < height[right] ? left++ : right--;
    }

    return maxArea;
}

console.log(find_biggest_container([7, 1, 2, 5, 6, 8, 3]));
