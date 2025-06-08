const rateLimit = (ms: number) => {
    setTimeout(() => {
        console.log("Rate limited");
    }, 250);
};

