const fizzbuzz = function (number) {
  for (let n = 0; n <= number; n++) {
    //1.数字が3の倍数だったら"Fizz"

    if (n % 3 === 0) {
      console.log("Fizz")
    }
    //2.数字が5の倍数だったら"Buzz"
    else if (n % 5 === 0) {
      console.log("Buzz")
    }
    //3.15の倍数だったら"FizzBuzz"
    if (n % 3 === 0 && n % 5) {
      console.log("FizzBuzz")
    }
    //nとfizzは同時に表示させたくない else{}
    else {
      console.log(n)
    }
  }
}

fizzbuzz(100)
