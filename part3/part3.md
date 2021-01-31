## DevTools - Debugging
* The bug was that num1 and sum2 were strings, so adding them together caused the result to be a concatination of the strings instead of the sum of the numbers which num1 and num2 are supposed to represent.
* A fix to this would be to run num1 and num2 through parseInt to get the numerical value. That is, for lines 3 and 4, change them to:
'
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    '
## DevTools - Network Tab
1. citylots.json
2. part2.js
3. 11.7 MB
4. 2.21 seconds
5. Chrome/88.0.4324.104
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData
