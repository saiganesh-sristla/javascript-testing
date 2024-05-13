// Lesson: Writing your first tests
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateFactorial(n) {
  if(n == 0 || n == 1){
    return 1;
  }
  let fact = 1; 
  for(let i=1; i<=n; i++){
    fact = fact * i;
  }
  return fact;
}
