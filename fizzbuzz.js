// Place your FizzBuzz code here.

// Count through numbers 1 to 20 and figure out if each one is divisible by 3, 5, or both.
for (i=1; i <=20; i++){
    // For each number, do the following check:
    // See if it is divisible by 3
    if (i % 3 === 0) {
      // If so: see if it is ALSO divisible by 5
      if (i % 5 ===0) {
      // If divisisble by 3 and 5: Print FizzBuzz
        console.log('FizzBuzz');
      } else {
        // If only divisible by 3: Print Fizz  
        console.log('Fizz');
      } 
    } 
    // See if it is divisible by 5
    // If so: Print Buzz
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    else {
    // See if it is not divisible by 3 or 5
    // If so: Print number 
      console.log(i);
    }
 
}

