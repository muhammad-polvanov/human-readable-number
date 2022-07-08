module.exports = function toReadable(number) {
    const numbersUntil20 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numbersTens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let hundreds = parseInt(number / 100);
    let tens = parseInt(number % 100);
    let units = parseInt(number % 10);

    return number == 0
        ? "zero"
        : `${
              hundreds
                  ? `${numbersUntil20[hundreds]} hundred${tens ? " " : ""}`
                  : ""
          }${
              tens < 20
                  ? numbersUntil20[tens]
                  : numbersTens[parseInt(tens / 10)]
          }${
              units
                  ? tens < 20
                      ? ""
                      : (hundreds || tens ? " " : "") + numbersUntil20[units]
                  : ""
          }`;
};
