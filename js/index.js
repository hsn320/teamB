const scin = document.querySelectorAll(".scrollIn");
const linkIn = document.querySelectorAll(".linkWrap");
const rightSideIn = document.querySelectorAll(".sideRightWrap");
const leftSideIn = document.querySelectorAll(".sideLeftWrap");
const items = document.querySelectorAll(".texts, .btn");

const sc = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('bottomIn');
            observer.unobserve(entry.target);
        }
    });
}
const lin = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('leftIn');
            observer.unobserve(entry.target);
        }
    });
}
const rsin = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('rightSideIn');
            observer.unobserve(entry.target);
        }
    });
}
const lsin = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('leftSideIn');
            observer.unobserve(entry.target);
        }
    });
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("light");
        }
    });
}, {
    threshold: 0.4
});

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

const io = new IntersectionObserver(sc, options);
const link = new IntersectionObserver(lin, options);
const rside = new IntersectionObserver(rsin, options);
const lside = new IntersectionObserver(lsin, options);

scin.forEach(object => {
    io.observe(object);
});

linkIn.forEach(object => {
    link.observe(object);
});

rightSideIn.forEach(object => {
    rside.observe(object);
});

leftSideIn.forEach(object => {
    lside.observe(object);
});

items.forEach((items) => 
    observer.observe(items)
);