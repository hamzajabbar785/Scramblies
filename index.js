// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged 
// to match str2, otherwise returns false.

// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scramble = (str1, str2) => {
    let str1Count = getCount(str1)
    let str2Count = getCount(str2)

    for(let key in str2Count){
        if(!str1Count[key] || str2Count[key] > str1Count[key])
        return false
    }

    return true
}

const getCount = (str) => {
    let obj = {}
    for(let char of str){
        obj[char] ? obj[char]++ : obj[char] = 1
    }

    return obj
}

scramble('scriptjavx', 'javascript')

//Solution 2 

const scramble = (str1, str2) => {
    let letterCount = {}

    for(let letter of str2){
        letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1
    }
    
    for(let letter of str1){
        if(letterCount[letter] && letterCount[letter] !== 0) letterCount[letter]--
    }

    for(let key in letterCount){
        if(letterCount[key] !== 0) return false
    }

    return true
}

scramble('scriptjavx', 'javascript')