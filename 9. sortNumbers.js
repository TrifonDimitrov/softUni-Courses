function sortNumbers(numberOne, numberTwo, numberTree) {

    let largest = (Math.max(numberOne,numberTwo,numberTree));
    let smaler = (Math.min(numberOne,numberTwo,numberTree));
    let middle = (numberOne + numberTwo + numberTree) - (largest + smaler);
    console.log(largest);
    console.log(middle);
    console.log(smaler);


}

sortNumbers(200, 30, 201);