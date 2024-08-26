function ball(question) {
    console.log(question);

    min = 1;
    max = 8;

    // formula to find a random number within a range
    random = Math.floor(Math.random() * (max - min + 1)) + min;

    switch (random) {
        case 1:
            return "Yes, as the universe tells us!";
        case 2:
            return "Yoda sees it as a yes!";
        case 3:
            return "The stars align into a yes!";
        case 4:
            return "It's a definite yes!";
        case 5:
            return "Unfortunately, no, my dear friend!";
        case 6:
            return "Yoda sees it as a no!";
        case 7:
            return "No, no, and no!";
        case 8:
            return "I am afraid that's a no!";
    }
}

console.log(ball("will it be sunny tomorrow?"))