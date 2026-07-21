const testData = {
    "q1" : {
        number: "Q.01",
        text: "部屋を模様替えするなら、<br>シンプルで落ち着く空間より、<br>個性が光るおしゃれな空間にしたい？",
        nextYes: "q3",
        nextNo: "q3"
    },
    "q3" : {
        number: "Q.03",
        text: "人から言われて嬉しいのは<br>「個性的だね」よりも「優しいね」だ。",
        nextYes: "q6",
        nextNo: "q6"
    },
    "q6" : {
        number: "Q.06",
        text: "休日を過ごすなら、賑やかな場所よりも、<br>落ち着いた場所に行きたい？",
        nextYes: "q16",
        nextNo: "q16"
    },
    "q16" : {
        number: "Q.16",
        text: "誰かと会話するとき、深い話を熱く語り合う<br>ような時間が好き。",
        nextYes: "r1",
        nextNo: "r1"
    },
    "r1" : {
        type: "result",
        title: "大正カフェ",
        link: "https://colorstw.com/tile/taisyoucafe",
        MainImage: "img/TaisyouBlue.png",
        colors: [
            { code: "#737329", img:"../img/TaisyouGreen.png"},
            { code: "#032C4C", img:"../img/TaisyouBlue.png"},
            { code: "#99A0AF", img:"../img/TaisyouGray.png"},
            { code: "#EBD5C9", img:"../img/TaisyouPink.png"},
            { code: "#FFFFFF", img:"../img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>上品で懐の深い、おもてなしの達人</span><br> 誰に対しても丁寧で、レトロで落ち着きのある上品な雰囲気をまとったあなた。お洒落でありながらホッとする大正カフェは、あなたの柔らかい物腰と丁寧な暮らしぶりにぴったりです。"
    },
}

let currentId = "q1";
let quizHistory = [];


function initQuiz() {
    // 1. スタート画面を非表示にする
    document.getElementById("startScreen").style.display = "none";
    // 2. 診断メイン画面を表示する
    document.getElementById("quizScreen").style.display = "block";
    document.getElementById("resultScreen").style.display = "none";
    
    // 3. 最初の質問(q1)を画面に描画する
    currentId = "q1";
    quizHistory = [];
    displayCurrentData();
}

function displayCurrentData() {
    // 今のID（例: "q1"）のデータをtestDataから引っ張ってくる
    const currentData = testData[currentId];
    const container = document.getElementById("dynamic-content");
    const actionArea = document.getElementById("fixed-Action-Area");
    const quizScreen = document.getElementById("quizScreen");

    const resultScreen = document.getElementById("resultScreen");

    const backBtn = document.getElementById("backBtn");
    const closeBtn = document.getElementById("closeBtn");

    // もしデータの種類（type）が "result"（結果）だった場合の処理
    if (currentData.type === "result") {
        // 結果画面のときは、固定ボタンエリアを非表示にする
        actionArea.style.display = "none";

        quizScreen.style.display = "none";

        resultScreen.style.display = "block";

        let colorButtonsHtml = "";
        if (currentData.colors) {
            currentData.colors.forEach(color => {
                // クリックされたら changeTileImage() という画像を切り替える関数を呼ぶ
                colorButtonsHtml += `
                    <span class="colorDot" 
                        style="background-color: ${color.code};" 
                        onclick="changeTileImage('${color.img}')">
                    </span>
                `;
            });
        }

        // 結果用の画面表示に書き換える（ボタンを消して、タイトルと結果文を出す）
        resultScreen.innerHTML = `
            <div class="resultWrap">
                <h2 class="answerTitleWrap">あなたのタイルは、<br><span class="answerTitle">${currentData.title}</span></h2>
                <div class="imageWrap">
                    <img id="tile-image" src="${currentData.MainImage}" alt="タイルの画像">
                </div>
                <div class="colorSelector">
                    ${colorButtonsHtml}
                </div>
                <p class="answerText">${currentData.text}</p>
                <div class="ResultBtnContain">
                    <button class="resultBtn product" onclick="window.open('${currentData.link}', '_blank')">商品ページへ</button>
                    <button class="resultBtn share" onclick="resetQuiz()">
                        <img src="img/share.png" class="shareIcon">
                        シェア
                    </button>
                </div>
            </div>
            <div class="start-header">
                <span class="header-icon right" onclick="openConfirmModal()">
                    <img src="../img/reset.png" alt="閉じる">
                </span>
            </div>
        `;
    } 
    else {
        quizScreen.style.display = "block";
        resultScreen.style.display = "none";

        if (quizScreen) { 
            quizScreen.style.paddingBottom = ""; 
        }
        // 質問画面のときは、固定ボタンエリアを表示する
        actionArea.style.display = "block";

        if (backBtn && closeBtn) {
            if (quizHistory.length === 0) {
                backBtn.style.display = "none";
                closeBtn.style.display = "block";
            } else {
                backBtn.style.display = "block";
                closeBtn.style.display = "block";
            }
        }

        // 質問画面のHTMLを流し込む（NoとYesのボタンもここに含める）
        container.innerHTML = `
            <div class="questionView">
                <div class="questionNumber">${currentData.number}</div>
                <h2 class="questionTitle">${currentData.text}</h2>
            </div>
        `;
    }
}

function answer(choiceType) {
    // choiceType には 'nextYes' または 'nextNo' が入ってくる
    const currentData = testData[currentId];

    quizHistory.push(currentId);
    
    // 現在の質問データから、次の行き先（"q3" や "r1" など）を割り出して、現在のIDを更新する
    currentId = currentData[choiceType];
    
    // 次の画面を表示するために、もう一度画面更新関数を呼ぶ
    displayCurrentData();
}

function goBack() {
    if (quizHistory.length > 0) {
        // 履歴の最後から1つ取り出して、現在のIDに戻す
        currentId = quizHistory.pop();
        displayCurrentData();
    }
}

function resetQuiz() {
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("resultScreen").style.display = "none";
}

function changeTileImage(newImgSrc) {
    const tileImg = document.getElementById("tile-image");
    if (tileImg) {
        tileImg.src = newImgSrc;
    }
}

document.getElementById("startScreen").style.display = "block";
document.getElementById("quizScreen").style.display = "none";
document.getElementById("resultScreen").style.display = "none";
// displayCurrentData();

function openConfirmModal() {
    document.getElementById("confirmModal").style.display = "flex";
}
function closeConfirmModal() {
    document.getElementById("confirmModal").style.display = "none";
}
function confirmResetQuiz() {
    document.getElementById("confirmModal").style.display = "none";
    window.location.href = "../index.html"; 
}