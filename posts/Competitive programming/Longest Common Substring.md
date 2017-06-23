In this post, we will discover the basic algorithm to find the longest common substring of two strings.

**Problem**: Given two strings <span style="color:#d34c62;"><code>X</code></span> and <span style="color:#d34c62;"><code>Y</code></span>, find the longest common substring.

**Difficulty**: Easy

**Examples**:
```javascript
1. X = "timetocode", Y = "timerightnow", Result = "time"
2. X = "abcabdef", Y = "abdf", Result = "abd"
```

**Solution**: Dynamic Programming *O(N^2)*
To solve this problem, we need to find all occurrences of all <span style="color:#d34c62;"><code>X</code></span> letters in <span style="color:#d34c62;"><code>Y</code></span> string. To keep intermediate results we can use a two-dimensional array of length <span style="color:#d34c62;"><code>X</code></span> and <span style="color:#d34c62;"><code>Y</code></span> accordingly.

![Longest Common Substring][longest-common-substring-1]

Even now we can see the result. But to make it more clear, let's add some rules how to fill this table:
1. If X letter is not equal to Y letter then <span style="color:#d34c62;"><code>Table[i][j] = 0</code></span>.
2. If X letter is equal to Y letter then this is already common substring of length 1. If the previous letter was also substring then the length of a new substring is <span style="color:#d34c62;"><code>Table[i][j] = Table[i - 1][j - 1] + 1</code></span> *(prev length + current length)*.

![Longest Common Substring][longest-common-substring-2]

Obviously, the length of the longest common substring is the maximum value in this table. And the actual substring can be reproduced by previous cells from the cell with maximum value to the cell with a value of one.

**Solution time-complexity**: <span style="color:#d34c62;"><code>O(N^2)</code></span>
**Solution space-complexity**: <span style="color:#d34c62;"><code>O(|X| * |Y|)</code></span>

The source code for this problem you may find [here][source-code]. Thank you for reading my blog and have a nice coding!

[longest-common-substring-1]: https://timetocode.files.wordpress.com/2017/06/longest-common-substring-1.png
[longest-common-substring-2]: https://timetocode.files.wordpress.com/2017/06/longest-common-substring-21.png
[source-code]: https://github.com/zhikin2207/timetocode/blob/master/source-code/longest-common-substring.js?ts=4
