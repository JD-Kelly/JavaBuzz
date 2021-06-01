class FizzBuzz {
    play(number) {
       if (this._isDivisibleByThree) {
        return 'Fizz'
       }
    }

    _isDivisibleByThree(number) {
        number % 3 == 0
    }
}