In this post, we will discover the basic algorithm to find the longest common substring of two strings.

**Problem**: Given two strings <span style="color:#d34c62;"><code>X</code></span> and <span style="color:#d34c62;"><code>Y</code></span>, find the longest common substring.

**Difficulty**: Easy

**Examples**:
```javascript
1. X = "timetocode", Y = "timerightnow", Result = "time"
2. X = "abcabdef", Y = "abdf", Result = "abd"
```

**Solution**: Dynamic Programming
To solve this problem, we need to find all occurrences of all <span style="color:#d34c62;"><code>X</code></span> letters in <span style="color:#d34c62;"><code>Y</code></span> string. To keep intermediate results we can use a two-dimensional array of length <span style="color:#d34c62;"><code>X</code></span> and <span style="color:#d34c62;"><code>Y</code></span> accordingly.

![Longest Common Substring][longest-common-substring-1]

Even now we can see the result. But to make it more clear, let's add some rules how to fill this table:
1. If X letter is not equal to Y letter then <span style="color:#d34c62;"><code>Table[i][j] = 0</code></span>.
2. If X letter is equal to Y letter then this is already common substring of length 1. If the previous letter was also substring then the length of a new substring is <span style="color:#d34c62;"><code>Table[i][j] = Table[i - 1][j - 1] + 1</code></span> *(prev length + current length)*.

![Longest Common Substring][longest-common-substring-2]

Obviously, the length of the longest common substring is the maximum value in this table. And the actual substring can be reproduced by previous cells from the cell with maximum value to the cell with a value of one.

**Source code**
```javascript
function longestCommonSubstring(x, y) {
    if (x.length === 0 || y.length === 0) return '';

    var i, j, maxLength = 0, lcsIndex = 0, result = '';

    // table initialization
    var dp = new Array(x.length + 1);
    for (i = 0; i <= x.length; i++) {
        dp[i] = new Array(y.length + 1);
    }

    for (i = 0; i <= x.length; i++) {
        for (j = 0; j <= y.length; j++) {
            // substring of nothing has length of zero
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (x[i - 1] !== y[j - 1]) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j - 1] + 1;

                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    lcsIndex = i;
                }
            }
        }
    }

    // reproduce the answer
    for (i = lcsIndex - 1; i >= 0 && maxLength >= 1; i--,maxLength--) {
        result = x[i] + result;
    }

    return result;
}
```

[longest-common-substring-1]: https://timetocode.files.wordpress.com/2017/06/longest-common-substring-1.png
[longest-common-substring-2]: https://timetocode.files.wordpress.com/2017/06/longest-common-substring-21.png
