const htmlParser = (string) => {
    const entity = {
        '&#039;': "'",
        '&quot;': '"',
        '&amp;': '&',
        '&atilde;': 'ã',
        '&ouml;': 'ö',
        '&Delta;': 'Δ',
        '&rsquo': "'"
    }
    return string.replace(/&#039;|&quot;|&amp;|&atilde;|&ouml;/g, item => entity[item]);
};

export default htmlParser;