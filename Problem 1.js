//Provide 3 unique implementations 

//Output - return summation to n === 1+2+3+...+n

// First implementation:
// Use FOR LOOP to loop through from 1 to n and sum the values

var sum_to_n_a = function(n){

    if (n<1){
        return `Enter a natural number`;
    }

    else{
        let sum_a = 0;

    
        for (let i = 1; i <= n; i++) {
            sum_a += i;
        }

        return `The sum of natural numbers: ${sum_a}`;
    }

    

    
}

// Second implementation:
// Use NATURAL NUMBER ARITHMETIC FORMULA 

var sum_to_n_b = function(n){

    if (n<1){
        return `Enter a natural number`;
    }

    else{
        let sum_b = 0;

    
        sum_b = (n*(n+1))/2;            // The natural number arithmetic sum formula

        return `The sum of natural numbers: ${sum_b}`;
    }
    

    
}

// Third implementation:
// Use RECURSION to divide the problem into sub parts and sum the value at each sub problem

var sum_to_n_c = function(n){

    if (n<1){
        return `Enter a natural number`;
    }

    else{
        if (n==1){
            return 1;                                   // Base case
        }

        else{
            let sum_c = n + sum_to_n_c(n-1);            // Recursive case
            return sum_c;
            
            
        }
        
        
        
    }
}


//Test codes:

console.log(sum_to_n_a(-1));
console.log(sum_to_n_b(-1));
console.log(sum_to_n_c(-1));
console.log();

console.log(sum_to_n_a(1));
console.log(sum_to_n_b(1));
console.log(`The sum of natural numbers: ${sum_to_n_c(1)}`);
console.log();

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(`The sum of natural numbers: ${sum_to_n_c(5)}`);

