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

	for (i = lcsIndex - 1; i >= 0 && maxLength >= 1; i--,maxLength--) {
		result = x[i] + result;
	}
	
	return result;
}