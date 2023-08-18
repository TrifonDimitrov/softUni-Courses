function vacation(people, type, day) {

    let price = 0;

    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = people * 8.45;
                break;
            } else if (type === "Business") {
                price = people * 10.90;
                break;
            } else if (type === "Regular") {
                price = people * 15;
                break;
            }
        case "Saturday":
            if (type === "Students") {
                price = people * 9.80;
                break;
            } else if (type === "Business") {
                price = people * 15.60;
                break;
            } else if (type === "Regular") {
                price = people * 20;
                break;
            }
        case "Sunday":
            if (type === "Students") {
                price = people * 10.46;
                break;
            } else if (type === "Business") {
                price = people * 16.00;
                break;
            } else if (type === "Regular") {
                price = people * 22.50;
                break;
            }

    }

    if (type === "Students" && people >= 30) {
        price *= 0.85;
    } else if (type === "Business" && people >= 100) {
        price *= 90;
    } else if (type === "Regular" && people >= 10 && people <= 20) {
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday");
