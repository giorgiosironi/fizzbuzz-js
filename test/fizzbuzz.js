TestCase("FizzBuzzTest", {
    setUp : function () {
        this.fizzbuzz = new FizzBuzz({
            3 : 'Fizz',
            5 : 'Buzz',
            7 : 'Bang'
        });
    },
    "test should return the number when passed 1 or 2" : function () {
        assertEquals(1, this.fizzbuzz.accept(1));
        assertEquals(2, this.fizzbuzz.accept(2));
    },
    "test should return Fizz when passed 3 or a multiple" : function () {
        assertEquals("Fizz", this.fizzbuzz.accept(3));
        assertEquals("Fizz", this.fizzbuzz.accept(6));
    },
    "test should return Buzz when passed 5 or a multiple" : function () {
        assertEquals("Buzz", this.fizzbuzz.accept(5));
        assertEquals("Buzz", this.fizzbuzz.accept(10));
    },
    "test should return FizzBuzz when passed a multiple of both 3 and 5" : function () {
        assertEquals("FizzBuzz", this.fizzbuzz.accept(15));
        assertEquals("FizzBuzz", this.fizzbuzz.accept(30));
    },
    "test should return Bang when passed a multiple of 7" : function () {
        assertEquals("Bang", this.fizzbuzz.accept(7));
        assertEquals("Bang", this.fizzbuzz.accept(14));
    },
    "test should return FizzBuzzBang when it is the case" : function () {
        assertEquals("FizzBuzzBang", this.fizzbuzz.accept(3*5*7));
    }
});
