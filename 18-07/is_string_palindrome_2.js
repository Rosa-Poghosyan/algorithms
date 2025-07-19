const validPalindrome = function (s) {
    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
        }
        return true;
    };

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
        const skipLeft = s.slice(left + 1, right + 1);
        const skipRight = s.slice(left, right);
        return isPalindrome(skipLeft) || isPalindrome(skipRight);
        }
        left++;
        right--;
    }

    return true;
}