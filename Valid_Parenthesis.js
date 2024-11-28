// Source : take U forward by striver

var isValid = function(s) {
    let stack = []
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for(let i  of s)
        if( i == '(' || i == '[' || i == '{'){
            stack.push(i)
        }else{
            if(stack.length === 0 || stack.pop() !== map[i]) return false
        }
    return stack.length === 0
}

console.log(isValid(']'))
console.log(isValid("[]{}()"))
console.log(isValid("{[}]"));
console.log(isValid("([{([{}])}])"))
