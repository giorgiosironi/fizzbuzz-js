TestCase("FizzBuzzTest", {
    "test should return the number when passed 1 or 2" : function () {
        assertEquals(1, fizzbuzz(1));
        assertEquals(2, fizzbuzz(2));
    },
    "test should return Fizz when passed 3 or a multiple" : function () {
        assertEquals("Fizz", fizzbuzz(3));
        assertEquals("Fizz", fizzbuzz(6));
    },
});
