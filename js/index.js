const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const languageToggle = document.querySelector('.language-toggle');
const languageDropdown = document.querySelector('.language-dropdown');
const arrow = document.querySelector('.arrow');


// ドロワーを最初は非表示にする
drawer.style.transform = 'translateX(100%)';
drawer.style.transition = 'transform 0.3s ease';

menuBtn.addEventListener('click', () => {
    const isOpen = drawer.style.transform === 'translateX(0%)';
    
    if (isOpen) {
    // 閉じる
    drawer.style.transform = 'translateX(100%)';
    menuBtn.classList.remove('open');
    } else {
    // 開く
    drawer.style.transform = 'translateX(0%)';
    menuBtn.classList.add('open');
    }
});

document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
    drawer.style.transform = 'translateX(100%)';
    menuBtn.classList.remove('open');  // 追加
    }
});

// ドロワー外をクリックで閉じる
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
    drawer.style.transform = 'translateX(100%)';
    }
});

languageToggle.addEventListener('click', () => {
    const isOpen = languageDropdown.classList.contains('open');

    if (isOpen) {
    languageDropdown.classList.remove('open');
    arrow.classList.remove('open');
    } else {
    languageDropdown.classList.add('open');
    arrow.classList.add('open');
    }
});