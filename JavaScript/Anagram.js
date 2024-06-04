function areAnagrams(str1, str2) {
    
    str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    
    if (str1.length !== str2.length) {
        return false;
    }

    
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

let string1 = "Listen";
let string2 = "Silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}

