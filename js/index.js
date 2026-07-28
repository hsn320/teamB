// スクロールオブジェクト
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


// ハンバーガーメニュー
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const langItem = document.querySelector('.language-item');

// メニューの開閉状態をトグルする関数
const toggleMenu = (force) => {
    const isOpen = typeof force === 'boolean' ? force : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    menuBtn.classList.toggle('open', isOpen);
};

// ハンバーガーボタンクリック
menuBtn.addEventListener('click', () => toggleMenu());

// ドロワー外クリックで閉じる
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) toggleMenu(false);
});

// 言語切替
langItem.addEventListener('click', (e) => {
    e.stopPropagation();
    langItem.classList.toggle('open');
});


// スクロール
const scrollContainer = document.getElementById('autoScrollTile');
let scrollSpeed = 1; // スクロール速度
let activeAnimation = true;

// 自動スクロールを処理する関数
const autoScrollLoop = () => {
    if (activeAnimation) {

        scrollContainer.scrollLeft += scrollSpeed;
        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
        }
    }
    requestAnimationFrame(autoScrollLoop);
};

const stopScroll = () => activeAnimation = false;

const startScroll = () => activeAnimation = true;

scrollContainer.addEventListener('mouseenter', stopScroll);
scrollContainer.addEventListener('mouseleave', startScroll);
scrollContainer.addEventListener('touchstart', stopScroll);
scrollContainer.addEventListener('touchend', startScroll);


autoScrollLoop();
