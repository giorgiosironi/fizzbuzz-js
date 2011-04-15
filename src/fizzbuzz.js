function FizzBuzz(correspondences) {
    this.correspondences = correspondences;
    this.accept = function (number) {
        var result = '';
        for (var divisor in this.correspondences) {
            if (number % divisor == 0) {
                result = result + this.correspondences[divisor];
            }
        }
        if (result) {
            return result;
        } else {
            return number;
        }
    }
}
