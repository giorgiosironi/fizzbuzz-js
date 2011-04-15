function fizzbuzz(number)
{
    correspondences = {
        3 : 'Fizz',
        5 : 'Buzz'
    };
    for (divisor in correspondences) {
        if (number % divisor == 0) {
            return correspondences[divisor];
        }
    }
    return number;
}
