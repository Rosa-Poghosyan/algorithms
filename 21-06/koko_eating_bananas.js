//https://leetcode.com/problems/koko-eating-bananas/description/

const minEatingSpeed = function(piles, h) {
    let left = 1, right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        let hoursNeeded = 0;

        for (const pile of piles) {
           // console.log(Math.ceil(pile / mid));
            hoursNeeded += Math.ceil(pile / mid);
        }

        if (hoursNeeded > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

let piles = [3, 6, 7, 11];
let h = 8;
minEatingSpeed(piles, h);  // Output: 4
console.log(Math.ceil(3 / 6)); // Output: 1