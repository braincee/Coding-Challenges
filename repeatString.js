function repeatedString(s, n) {
    let count = 0;
    let a = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            a++;
        }
    }
    count = a * Math.floor(n / s.length);
    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === 'a') {
            count++;
        }
    }
    return count;
}
