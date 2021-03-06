AOS.init();

const counters = document.querySelectorAll('.counter');
const speed = 20;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.floor(count + inc);

            setTimeout(updateCount,50);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
