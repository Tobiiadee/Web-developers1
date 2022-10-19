let right = document.querySelectorAll('.right');

console.log(right);

const options = {
    root: null,
    rootMargin: '0px',
    threashold: 0
}

const observer = new IntersectionObserver(callback, options);

function callback (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        right.classList.toggle('slid-right');
        return;
    });
    observer.unobserve(right);
}

right.forEach((target) => {
    observer.observe(target);
});
// observer.observe(right);




// const observer1 = new IntersectionObserver(callback, options);

// function callback (entries, observer1) {
//     entries.forEach(entry => {
//         console.log(entry.target);
//         secContainer.classList.toggle('slid-left');
//         return;
//     });
//     observer1.unobserve(secContainer);
// }

// observer1.observe(secContainer);

