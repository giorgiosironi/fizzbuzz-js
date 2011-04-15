TestCase("FizzBuzzTest", {
    "test should return the number when passed 1 or 2" : function () {
        assertEquals(1, fizzbuzz(1));
        assertEquals(2, fizzbuzz(2));
    },
    "test should return Fizz when passed 3 or a multiple" : function () {
        assertEquals("Fizz", fizzbuzz(3));
        assertEquals("Fizz", fizzbuzz(6));
    },
    "test should return Buzz when passed 5 or a multiple" : function () {
        assertEquals("Buzz", fizzbuzz(5));
        assertEquals("Buzz", fizzbuzz(10));
    },
    "test should return FizzBuzz when passed a multiple of both 3 and 5" : function () {
        assertEquals("FizzBuzz", fizzbuzz(15));
        assertEquals("FizzBuzz", fizzbuzz(30));
    }
});
