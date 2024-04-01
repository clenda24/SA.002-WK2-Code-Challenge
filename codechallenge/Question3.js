function generatePrimes(num){
    const primes = [];
    for (let i = 0; i < num.length; i++){
        if (isPrime(i)){
            primes.push(i);
        }
}
}
return primes;
console.log(generatePrimeNumber(10));
