const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    let start = 0;
    let end = counter.dataset.target;

    let timer = setInterval(() => {

        start += Math.ceil(end / 100);

        if (start >= end) {
            start = end;
            clearInterval(timer);
        }

        counter.innerText = start;

    }, 20);

});