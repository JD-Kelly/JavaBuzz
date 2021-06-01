
describe('FizzBuzz', () => {

    let fizzBuzz

    beforeEach(() => { 
        fizzBuzz = new FizzBuzz();
    });

    describe('multiples of 3', () => {
        it('fizzes for 3', () => {
            expect(fizzBuzz.play(3)).toEqual('Fizz');
        });
    });

});