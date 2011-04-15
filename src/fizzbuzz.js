function fizzbuzz(number)
{
    var correspondences = {
        3 : 'Fizz',
        5 : 'Buzz',
        7 : 'Bang'
    };
    var result = '';
    for (var divisor in correspondences) {
        if (number % divisor == 0) {
            result = result + correspondences[divisor];
        }
    }
    if (result) {
        return result;
    } else {
        return number;
    }
}
