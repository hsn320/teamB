const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const languageItem = document.querySelector('.language-item'); // クラス名を変更
const languageDropdown = document.querySelector('.language-dropdown');
const arrow = document.querySelector('.arrow');

// ハンバーガーメニュー開閉
menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    menuBtn.classList.toggle('open');
});

// ドロワー外クリックで閉じる
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
        drawer.classList.remove('open');
        menuBtn.classList.remove('open');
    }
});

// 言語切替（item全体を対象にする）
languageItem.addEventListener('click', () => {
    languageDropdown.classList.toggle('open');
    arrow.classList.toggle('open');
});