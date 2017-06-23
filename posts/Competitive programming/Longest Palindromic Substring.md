Today, we will discover one of the basics algorithms to find the longest palindromic substring.

**Problem**: 
Given a string S, find the longest palindromic substring in S.

**Difficulty**: Easy

**Practice**: [Leetcode][leetcode]

**Examples**:
```javascript
1. S = "abad", Result = "aba"
2. S = "codeedoc", Result = "codeedoc"
```

**Solution**:
To come up with a solution we need to understand what the palindrome is. Basically, this is just a word which reads the same backward as forward (for more details [see][palindrom-wiki]). 

The main idea is to find all palindromes in S with even and odd lengths and keep track which one is the longest. To find odd length palindromes we fix center for every letter in S and expand it in both directions.

![Longest Palindromic Substring][longest-palindromic-substring-1]

To find even length palindrome we fix center between two nearby letters in S and also expand it in both directions.

![Longest Palindromic Substring][longest-palindromic-substring-2]

While expanding, if two opposite letters are equal then we add them to our potential palindrome. 

**Time complexity**: <span style="color:#d34c62;"><code>O(N^2)</code></span>
**Space complexity**: <span style="color:#d34c62;"><code>O(1)</code></span>

That's all for today. You can find the source code [here][source-code], but I suggest you implement it by yourself. 

Thank you for reading my blog and see you in a leaderboard :)

[leetcode]: https://leetcode.com/problems/longest-palindromic-substring/#/description
[source-code]: https://github.com/zhikin2207/timetocode/blob/master/source-code/longest-palindromic-substring.js?ts=4
[palindrom-wiki]: https://en.wikipedia.org/wiki/Palindrome
[longest-palindromic-substring-1]: https://timetocode.files.wordpress.com/2017/06/longest-palindromic-substring-1.png
[longest-palindromic-substring-2]: https://timetocode.files.wordpress.com/2017/06/longest-palindromic-substring-2.png
