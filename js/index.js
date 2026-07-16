const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const languageItem = document.querySelector('.language-item'); // クラス名を変更
const languageDropdown = document.querySelector('.language-dropdown');
const arrow = document.querySelector('.arrow');

// ハンバーガーメニュー開閉
menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    menuBtn.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
});

// 言語切替（item全体を対象にする）
languageItem.addEventListener('click', () => {
    languageDropdown.classList.toggle('open');
    arrow.classList.toggle('open');
});

// 1つ目（menuBtn.classList.removeあり）を残す
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
        drawer.style.transform = 'translateX(100%)';
        menuBtn.classList.remove('open');
    }
});

// 2つ目（丸ごと削除）
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
        drawer.style.transform = 'translateX(100%)';
    }
});