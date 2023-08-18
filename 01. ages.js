function ages(input) {

    let age = Number(input);
    let maturity = "";

    if (age < 0) {
        maturity = "out of bounds";
    }
    else if (age >= 0 && age <= 2) {
        maturity = "baby";
    } else if
        (age <= 13) {
        maturity = "child";
    } else if
        (age <= 19) {
        maturity = "teenager";
    } else if
        (age <= 65) {
        maturity = "adult";
    } else if
        (age > 65) {
        maturity = "elder";
    }
    console.log(maturity);

}

ages("19")