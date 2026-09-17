const testData = {
    "q1" : {
        number: "Q.01",
        text: "時代を超えた「レトロ・歴史感」に惹かれますか？",
        nextYes: "q2-a",
        nextNo: "q2-b"
    },
    "q2-a" : {
        number: "Q.02",
        text: "「人と被らないこだわり」を<br>アピールするのが好き？",
        nextYes: "q3-a",
        nextNo: "q3-b"
    },
    "q2-b" : {
        number: "Q.02",
        text: "人間関係や買い物では<br>「親しみやすさ・居心地」が最優先？",
        nextYes: "q3-c",
        nextNo: "q3-d"
    },
    "q3-a" : {
        number: "Q.03",
        text: "感情表現が豊かで、<br>自分の「好き」を情熱的に伝えたい？",
        nextYes: "q4-a",
        nextNo: "q4-b"
    },
    "q3-b" : {
        number: "Q.03",
        text: "大勢より、静かで落ち着いた<br>一人（少人数）時間を優先したい？",
        nextYes: "q4-c",
        nextNo: "q4-d"
    },
    "q3-c" : {
        number: "Q.03",
        text: "トラブルがあっても<br>「まあいっか」と流せるポジティブ派？",
        nextYes: "q4-e",
        nextNo: "q4-f"
    },
    "q3-d" : {
        number: "Q.03",
        text: "「自然体の自分」やシンプルで<br>無駄のない暮らしが好き？",
        nextYes: "q4-g",
        nextNo: "q4-h"
    },
    "q4-a" : {
        number: "Q.04",
        text: "ミステリアスな世界観に惹かれる？",
        nextYes: "r1",
        nextNo: "r2"
    },
    "q4-b" : {
        number: "Q.04",
        text: "「発想が個性的」「おもしろい」とよく言われる？",
        nextYes: "r3",
        nextNo: "r4"
    },
    "q4-c" : {
        number: "Q.04",
        text: "ものごとを深く考えてしまう？",
        nextYes: "r5",
        nextNo: "r6"
    },
    "q4-d" : {
        number: "Q.04",
        text: "こだわりが強く、<br>礼儀や伝統的な価値観を重んじる？",
        nextYes: "r7",
        nextNo: "r8"
    },
    "q4-e" : {
        number: "Q.04",
        text: "周りを楽しませたり、<br>居心地よい場を作るのが得意？",
        nextYes: "r9",
        nextNo: "r10"
    },
    "q4-f" : {
        number: "Q.04",
        text: "困っている人がいると放っておけない？",
        nextYes: "r11",
        nextNo: "r12"
    },
    "q4-g" : {
        number: "Q.04",
        text: "飾らない素の自分で<br>付き合える関係を大切にしたい？",
        nextYes: "r13",
        nextNo: "r14"
    },
    "q4-h" : {
        number: "Q.04",
        text: "目標に向かって無駄なく、効率的に進むのが得意？",
        nextYes: "r15",
        nextNo: "r16"
    },

    "r1" : {
        type: "result",
        title: "マジョリカ",
        link: "https://colorstw.com/tile/majolica",
        MainImage: "img/MajolicaBlue.png",
        colors: [
            { code: "#FCF3D9", img:"img/MajolicaWhite.png"},
            { code: "#4A6280", img:"img/MajolicaGray.png"},
            { code: "#1C59BA", img:"img/MajolicaBlue.png"},
            { code: "#0A055A", img:"img/MajolicaPurple.png"},
        ],
        text: "<span class='answer-Sub-Title'>こだわり派の芸術家</span><br> ミステリアスで個性的なオーラを持つ人。どこかエキゾチックで他にはないセンスがあり、自分だけの世界観やスタイルを貫く美学の持ち主。"
    },
    "r2" : {
        type: "result",
        title: "ミックス金平糖",
        link: "https://colorstw.com/tile/konpeitou",
        MainImage: "img/konpeitouGreen.png",
        colors: [
            { code: "#ECC0C9", img:"img/konpeitouPink.png"},
            { code: "#C5DA9A", img:"img/konpeitouGreen.png"},
            { code: "#769BB8", img:"img/konpeitouBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>華やかで繊細なこだわり屋</span><br> パッと見は綺麗で華やかだが、実はとても繊細な感覚の持ち主。自分の「好き・嫌い」がハッキリしていて、妥協しないこだわりを持つ。"
    },
    "r3" : {
        type: "result",
        title: "さんかく",
        link: "https://colorstw.com/tile/sankaku",
        MainImage: "img/SankakuBlue.png",
        colors: [
            { code: "#fff", img:"img/SankakuWhite.png"},
            { code: "#D7EC87", img:"img/SankakuGreen.png"},
            { code: "#FFD7D1", img:"img/SankakuPink.png"},
            { code: "#977FA6", img:"img/SankakuPurple.png"},
            { code: "#94C1D1", img:"img/SankakuBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>新しい風を吹き込むムードメーカー</span><br> 枠にとらわれない発想力とアクセントになる存在感を持つ人。周囲に刺激や変化を与え、空間やグループの雰囲気を一気に明るくする"
    },
    "r4" : {
        type: "result",
        title: "ランタン",
        link: "https://colorstw.com/tile/lantern",
        MainImage: "img/LanternBlue.png",
        colors: [
            { code: "#fff", img:"img/LanternWhite.png"},
            { code: "#000", img:"img/LanternBlack.png"},
            { code: "#D89946", img:"img/LanternOrange.png"},
            { code: "#977962", img:"img/LanternBrown.png"},
            { code: "#2575B2", img:"img/LanternBlue.png"},
            { code: "#D9D9D9", img:"img/LanternGray.png"},
            { code: "#A5B0B3", img:"img/LanternIndigo.png"},
            { code: "#C7C3B0", img:"img/LanternGreen.png"},
        ],
        text: "<span class='answer-Sub-Title'>愛嬌たっぷりの、愛され人気者</span><br> いるだけで場がなごむ、親しみやすさと愛嬌の持ち主。自然と人が集まってくる魅力があり、周りから可愛がられる人気者タイプ。"
    },
    "r5" : {
        type: "result",
        title: "大正カフェ",
        link: "https://colorstw.com/tile/taisyoucafe",
        MainImage: "img/TaisyouBlue.png",
        colors: [
            { code: "#DEE1EE", img:"img/TaisyouWhite.png"},
            { code: "#6D6D3B", img:"img/TaisyouGreen.png"},
            { code: "#1B425B", img:"img/TaisyouBlue.png"},
            { code: "#949DAC", img:"img/TaisyouGray.png"},
            { code: "#CBBEBE", img:"img/TaisyouPink.png"},
        ],
        text: "<span class='answer-Sub-Title'>穏やかで品のあるレトロ癒やし系</span><br>柔らかい物腰とゆったりした落ち着きを持つ人。どこか懐かしく上品な雰囲気をまとい、一緒にいる人に深い安心感を与える。"
    },
    "r6" : {
        type: "result",
        title: "パンナコッタ",
        link: "https://colorstw.com/tile/pannacotta",
        MainImage: "img/PannaTurquoise.png",
        colors: [
            { code: "#8cacaf", img:"img/PannaTurquoise.png"},
            { code: "#3465a7", img:"img/PannaBlue.png"},
            { code: "#c49092", img:"img/PannaPink.png"},
        ],
        text: "<span class='answer-Sub-Title'>静かでピュアな美しさを持つ、<br>洗練された人</span><br> 自分の世界を大切にし、自分を飾らない透明感のある人。静かで落ち着いた立ち振る舞いの中に、芯のある美しさと凛とした品格を秘めている。"
    },
    "r7" : {
        type: "result",
        title: "レンガ",
        link: "https://colorstw.com/tile/renga",
        MainImage: "img/RengaBeige.png",
        colors: [
            { code: "#AD7B74", img:"img/RengaBeige.png"},
            { code: "#CEB493", img:"img/RengaBrown.png"},
            { code: "#ffffff", img:"img/RengaWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>信念を貫く、頼れる重厚リーダー</span><br> ぶれない芯の強さと責任感を持つ人。本質や価値観を大切にし、どんな時もブレずに周りを引っぱっていく確かな信頼感の持ち主。"
    },
    "r8" : {
        type: "result",
        title: "フラン",
        link: "https://colorstw.com/tile/fran",
        MainImage: "img/FranGray.png",
        colors: [
            { code: "#B3ADA2", img:"img/FranWhite.png"},
            { code: "#69696B", img:"img/FranGray.png"},
            { code: "#B5A189", img:"img/FranBeige.png"},
            { code: "#998C83", img:"img/FranBrown.png"},
        ],
        text: "<span class='answer-Sub-Title'>周りをやさしく包む、平和主義者</span><br> 争いごとを嫌い、誰に対しても温かく穏やかに接する人。でしゃばらず控えめだが、周囲をやさしく包み込む懐の深さがある。"
    },
    "r9" : {
        type: "result",
        title: "ベルゲンワッフル",
        link: "https://colorstw.com/tile/bergenwaffles",
        MainImage: "img/BergenwafflesBrown.png",
        colors: [
            { code: "#C0AD9F", img:"img/BergenwafflesBrown.png"},
            { code: "#E9E9E7", img:"img/BergenwafflesWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>笑顔を絶やさない<br>気さくなムードメーカー</span><br> 丸みのある親しみやすさと温かい雰囲気を持つ人。カフェのように居心地の良い空気を作り出し、みんなを自然と笑顔にする。"
    },
    "r10" : {
        type: "result",
        title: "マンハッタンドーナツ",
        link: "https://colorstw.com/tile/doughnut",
        MainImage: "img/DoughnutBlue.png",
        colors: [
            { code: "#EBEBEC", img:"img/DoughnutWhite.png"},
            { code: "#6FA4A1", img:"img/DoughnutGreen.png"},
            { code: "#71A1B4", img:"img/DoughnutBlue.png"},
            { code: "#DDE7F4", img:"img/DoughnutIndigo.png"},
            { code: "#83898B", img:"img/DoughnutGray.png"},
        ],
        text: "<span class='answer-Sub-Title'>トレンドに敏感な、センス抜群の都会派</span><br> おしゃれで都会的なセンスに溢れた人。流行やワクワクすることに敏捷で、自分のライフスタイルをスマート楽しむスタイル派。"
    },
    "r11" : {
        type: "result",
        title: "ピュレ",
        link: "https://colorstw.com/tile/puree",
        MainImage: "img/PureeSkyblue.png",
        colors: [
            { code: "#5C8575", img:"img/PureeGreen.png"},
            { code: "#B6A494", img:"img/PureeBeige.png"},
            { code: "#ACB5B5", img:"img/PureeSkyblue.png"},
            { code: "#657BA2", img:"img/PureeBlue.png"},
            { code: "#C7A7A4", img:"img/PureePink.png"},
            { code: "#4A5161", img:"img/PureeBlack.png"},
        ],
        text: "<span class='answer-Sub-Title'>包容力抜群の、ほっこり癒やし担当</span><br> もこもことした温もりを感じさせる、優しい包容力の持ち主。困っている人を放っておけず、周囲をホッと安心させる癒やしの存在。"
    },
    "r12" : {
        type: "result",
        title: "マカロン",
        link: "https://colorstw.com/tile/macaron",
        MainImage: "img/MacaronPink.png",
        colors: [
            { code: "#fff", img:"img/MacaronWhite.png"},
            { code: "#FCF6C3", img:"img/MacaronYellow.png"},
            { code: "#C5EEBD", img:"img/MacaronGreen.png"},
            { code: "#F7C7B1", img:"img/MacaronPink.png"},
            { code: "#8DC6EA", img:"img/MacaronSkyblue.png"},
            { code: "#282E84", img:"img/MacaronBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>素直でキュートな、愛されキャラ</span><br> 素直で無邪気な可愛らしさを持つ人。感情表現が豊かで素直なため、周囲から「放っておけない」と可愛がられる魅力にあふれる。"
    },
    "r13" : {
        type: "result",
        title: "ハルカラット",
        link: "https://colorstw.com/tile/harukaratto",
        MainImage: "img/harukaratto.png",
        colors: [
            { code: "#EDE1D8", img:"img/harukaratto.png"},
        ],
        text: "<span class='answer-Sub-Title'>ありのままを愛する、ナチュラル派</span><br> 飾り気がなく、温かみのある素直な人。自然体で裏表がなく、人間味あふれる人柄で周りを安心させる。"
    },
    "r14" : {
        type: "result",
        title: "ガレット",
        link: "https://www.sticker-film.com/mosaictile/garret.html",
        MainImage: "img/GarretGreen.png",
        colors: [
            { code: "#F5F6EF", img:"img/GarretWhite.png"},
            { code: "#181818", img:"img/GarretBlack.png"},
            { code: "#5E2F1D", img:"img/GarretBrown.png"},
            { code: "#0C0201", img:"img/GarretDeep.png"},
            { code: "#073723", img:"img/GarretGreen.png"},
            { code: "#140C35", img:"img/GarretBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>洗練された上質さを好む、大人タイプ</span><br> 自然体でありながら、どこかモダンで上品なセンスを持つ人。派手に主張しなくても自然と滲み出る、洗練された大人な雰囲気の持ち主。"
    },
    "r15" : {
        type: "result",
        title: "トルテ",
        link: "https://colorstw.com/tile/torte",
        MainImage: "img/TorteGloss.png",
        colors: [
            { code: "#CFCFCD", img:"img/TorteMat.png"},
            { code: "#EFF0F1", img:"img/TorteGloss.png"},
            { code: "#2D2E33", img:"img/TorteBlack.png"},
        ],
        text: "<span class='answer-Sub-Title'>論理的でスマートな、しっかり者</span><br> 無駄がなく洗練された現代的な思考の持ち主。目標に向かって効率よくスマートに行動し、何事もテキパキこなす頼もしさがある。"
    },
    "r16" : {
        type: "result",
        title: "ドロップス",
        link: "https://www.sticker-film.com/mosaictile/drops.html",
        MainImage: "img/DropsOlive.png",
        colors: [
            { code: "#9AA2BE", img:"img/DropSesame.png"},
            { code: "#DF9098", img:"img/DropsSakura.png"},
            { code: "#8DA793", img:"img/DropsOlive.png"},
            { code: "#B0ADB2", img:"img/DropsRate.png"},
        ],
        text: "<span class='answer-Sub-Title'>自由奔放で遊び心あふれる、ポップ派</span><br> カラフルで明るいエネルギーに満ちた人。自由な発想と強い遊び心を持ち、毎日を自分らしくポップに楽しむ天才。"
    },
}

let currentId = "q1";
let quizHistory = [];


function initQuiz() {
    document.getElementById("startScreen").style.display = "none";

    document.getElementById("quizScreen").style.display = "block";
    document.getElementById("resultScreen").style.display = "none";
    
    currentId = "q1";
    quizHistory = [];
    displayCurrentData();
}

function displayCurrentData() {

    const currentData = testData[currentId];
    const container = document.getElementById("dynamic-content");
    const actionArea = document.getElementById("fixed-Action-Area");
    const quizScreen = document.getElementById("quizScreen");

    const resultScreen = document.getElementById("resultScreen");

    const backBtn = document.getElementById("backBtn");
    const closeBtn = document.getElementById("closeBtn");


    if (currentData.type === "result") {

        actionArea.style.display = "none";

        quizScreen.style.display = "none";

        resultScreen.style.display = "block";

        let colorButtonsHtml = "";
        if (currentData.colors) {
            currentData.colors.forEach(color => {

                colorButtonsHtml += `
                    <span class="colorDot" 
                        style="background-color: ${color.code};" 
                        onclick="changeTileImage('${color.img}')">
                    </span>
                `;
            });
        }

        // 結果画面
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
                <span class="header-icon right" onclick="confirmResetQuiz()">
                    <img src="img/reset.png" alt="閉じる">
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

        container.innerHTML = `
            <div class="questionView">
                <div class="questionNumber">${currentData.number}</div>
                <h2 class="questionTitle">${currentData.text}</h2>
            </div>
        `;
    }
}

function answer(choiceType) {
    const currentData = testData[currentId];

    quizHistory.push(currentId);
    
    currentId = currentData[choiceType];

    displayCurrentData();
}

function goBack() {
    if (quizHistory.length > 0) {

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

function openConfirmModal() {
    document.getElementById("confirmModal").style.display = "flex";
}
function closeConfirmModal() {
    document.getElementById("confirmModal").style.display = "none";
}
function confirmResetQuiz() {
    document.getElementById("confirmModal").style.display = "none";
    window.location.href = "index.html#tileTest"; 
}