const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// const nums3 = nums1.concat(nums2);
// console.log(nums3);

const nums3 = [...nums1, ...nums2];
console.log(nums3);

const nums4 = [...nums1, ...nums2, "luiz", ...[10, 21]];