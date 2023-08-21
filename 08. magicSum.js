function magicSum(arr, magicNum) {

    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        let currentNum = Number(arr[index]);

        for (let j = index + 1; j < arr.length; j++) {
            let nextNum = Number(arr[j]);

            sum = currentNum + nextNum;

            if (sum === magicNum) {

                console.log(`${currentNum} ${nextNum}`);
            }
        }

    }

}
magicSum([1, 7, 6, 2, 19, 23],8);