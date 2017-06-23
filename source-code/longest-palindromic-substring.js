var longestPalindrome = function(s) {
    var result = '';

    for (var i = 0; i < s.length; i++) {
        var oddPalindrome = getPalindrome(s, i - 1, i + 1, s[i]);
        var evenPalindrome = getPalindrome(s, i, i + 1, '');

        if (oddPalindrome.length > result.length) result = oddPalindrome;
        if (evenPalindrome.length > result.length) result = evenPalindrome;
    }

    return result;
};

var getPalindrome = function(s, left, right, palindrome) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        palindrome = s[left] + palindrome + s[right];
        left--;
        right++;
    }

    return palindrome;
};
