const testData = {
    "q1" : {
        number: "Q.01",
        text: "你容易被跨越時代的「復古・歷史感」<br>所吸引嗎？",
        nextYes: "q2-a",
        nextNo: "q2-b"
    },
    "q2-a" : {
        number: "Q.02",
        text: "你喜歡展現「與眾不同，<br>不與他人重複的堅持」嗎？",
        nextYes: "q3-a",
        nextNo: "q3-b"
    },
    "q2-b" : {
        number: "Q.02",
        text: "在人際關係或購物時，<br>「親切感與舒適度」是你的首要考量嗎？",
        nextYes: "q3-c",
        nextNo: "q3-d"
    },
    "q3-a" : {
        number: "Q.03",
        text: "你的情感表達豐富，<br>喜歡充滿熱情地向他人傳達自己的「喜愛」嗎？",
        nextYes: "q4-a",
        nextNo: "q4-b"
    },
    "q3-b" : {
        number: "Q.03",
        // 改行確認
        text: "比起熱鬧的大人群，<br>你更傾向優先選擇安靜放鬆的獨處（或少人數）<br>時光嗎？",
        nextYes: "q4-c",
        nextNo: "q4-d"
    },
    "q3-c" : {
        number: "Q.03",
        text: "即使遇到麻煩，<br>你也是能一笑置之「算了吧」的樂觀派嗎？",
        nextYes: "q4-e",
        nextNo: "q4-f"
    },
    "q3-d" : {
        number: "Q.03",
        text: "你喜歡「做最真實的自己」，<br>以及簡單洗練的生活方式嗎？",
        nextYes: "q4-g",
        nextNo: "q4-h"
    },
    "q4-a" : {
        number: "Q.04",
        text: "你容易被神秘的世界觀所吸引嗎？",
        nextYes: "r1",
        nextNo: "r2"
    },
    "q4-b" : {
        number: "Q.04",
        text: "你常被別人說<br> 「想法很獨特」，「很有趣」嗎？",
        nextYes: "r3",
        nextNo: "r4"
    },
    "q4-c" : {
        number: "Q.04",
        text: "你是會容易把事情往深處想的人嗎？",
        nextYes: "r5",
        nextNo: "r6"
    },
    "q4-d" : {
        number: "Q.04",
        text: "你性格堅持講究，<br>並重視禮儀與傳統價值觀嗎？",
        nextYes: "r7",
        // nextNo: "r8"
    },
    "q4-e" : {
        number: "Q.04",
        text: "你擅長逗樂大家，<br>或是營造令人舒適的環境嗎？",
        nextYes: "r9",
        nextNo: "r10"
    },
    "q4-f" : {
        number: "Q.04",
        text: "看到有人遇到困難，<br>你就無法放任不管嗎？",
        nextYes: "r11",
        nextNo: "r12"
    },
    "q4-g" : {
        number: "Q.04",
        // 改行確認
        text: "你重視能以不加修飾的真實自我來<br>相處的人際關係嗎？",
        nextYes: "r13",
        nextNo: "r14"
    },
    "q4-h" : {
        number: "Q.04",
        text: "你擅長朝著目標専心且有效率地前進嗎？",
        nextYes: "r15",
        nextNo: "r16"
    },

    "r1" : {
        type: "result",
        title: "馬約利卡陶磚",
        link: "https://colorstw.com/tile/majolica",
        MainImage: "img/MajolicaBlue.png",
        colors: [
            { code: "#FCF3D9", img:"img/MajolicaWhite.png"},
            { code: "#4A6280", img:"img/MajolicaGray.png"},
            { code: "#1C59BA", img:"img/MajolicaBlue.png"},
            { code: "#0A055A", img:"img/MajolicaPurple.png"},
        ],
        text: "<span class='answer-Sub-Title'>擁有獨特世界觀的獨創藝術家</span><br> 帶有神秘且獨特氣場的人。擁有獨特的異國風情與品味，堅持屬於自己的世界觀與風格美學。"
    },
    "r2" : {
        type: "result",
        title: "金平糖",
        link: "https://colorstw.com/tile/konpeitou",
        MainImage: "img/konpeitouGreen.png",
        colors: [
            { code: "#ECC0C9", img:"img/konpeitouPink.png"},
            { code: "#C5DA9A", img:"img/konpeitouGreen.png"},
            { code: "#769BB8", img:"img/konpeitouBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>華麗而纖細的講究派</span><br> 乍看之下絢麗華麗，但內心非常敏感纖細。喜惡分明，對事物有著絕不妥協的堅持。"
    },
    "r3" : {
        type: "result",
        title: "三角磚",
        link: "https://colorstw.com/tile/sankaku",
        MainImage: "img/SankakuBlue.png",
        colors: [
            { code: "#fff", img:"img/SankakuWhite.png"},
            { code: "#D7EC87", img:"img/SankakuGreen.png"},
            { code: "#FFD7D1", img:"img/SankakuPink.png"},
            { code: "#977FA6", img:"img/SankakuPurple.png"},
            { code: "#94C1D1", img:"img/SankakuBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>帶來新風貌的氣氛帶動者</span><br> 擁有不受框架限制的發想力與存在感。能為周圍帶來刺激與變化，讓空間或團隊氣氛瞬間活絡起來。"
    },
    "r4" : {
        type: "result",
        title: "燈籠磚",
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
        text: "<span class='answer-Sub-Title'>討喜且極具魅力的受歡迎者</span><br> 只要人在現場就能讓人感到放鬆與親切。天然的魅力能自然吸引人群，是深受大家喜愛的萬人迷。"
    },
    "r5" : {
        type: "result",
        title: "大正咖啡",
        link: "https://colorstw.com/tile/taisyoucafe",
        MainImage: "img/TaisyouBlue.png",
        colors: [
            { code: "#DEE1EE", img:"img/TaisyouWhite.png"},
            { code: "#6D6D3B", img:"img/TaisyouGreen.png"},
            { code: "#1B425B", img:"img/TaisyouBlue.png"},
            { code: "#949DAC", img:"img/TaisyouGray.png"},
            { code: "#CBBEBE", img:"img/TaisyouPink.png"},
        ],
        text: "<span class='answer-Sub-Title'>溫和且優雅的復古療癒系</span><br>擁有溫柔優雅的舉止與令人安心的沉穩感。散發著懷舊而高雅的氣息，給人深度的安心感。"
    },
// 変更あり
    "r6" : {
        type: "result",
        title: "パンナコッタ",
        link: "https://colorstw.com/tile/pannacotta",
        MainImage: "img/GelatoWhite.png",
        colors: [
            { code: "#8cacaf", img:"img/GelatoWhite.png"},
            { code: "#3465a7", img:"img/GelatoGray.png"},
            { code: "#c49092", img:"img/GelatoBeige.png"},
        ],
        text: "<span class='answer-Sub-Title'>擁有純淨美感與沉穩內涵的優雅者</span><br> 珍視自己的內心世界，不刻意包裝自我的透明感類型。在平靜沉穩的舉止中，蘊含著堅定不移的美感與冷艷高雅的格調。"
    },
    "r7" : {
        type: "result",
        title: "煉瓦磚",
        link: "https://colorstw.com/tile/renga",
        MainImage: "img/RengaBeige.png",
        colors: [
            { code: "#AD7B74", img:"img/RengaBeige.png"},
            { code: "#CEB493", img:"img/RengaBrown.png"},

        ],
        text: "<span class='answer-Sub-Title'>貫徹信念的可靠沉穩領袖</span><br> 擁有堅定不移的強大信念與責任感。重視事物本質與價值觀，無論何時都不會動搖，引導著大家前進。"
    },
    "r8" : {
        type: "result",
        title: "布丁塔",
        link: "https://colorstw.com/tile/fran",
        MainImage: "img/FranGray.png",
        colors: [
            { code: "#B3ADA2", img:"img/FranWhite.png"},
            { code: "#69696B", img:"img/FranGray.png"},
            { code: "#B5A189", img:"img/FranBeige.png"},
            { code: "#998C83", img:"img/FranBrown.png"},
        ],
        text: "<span class='answer-Sub-Title'>溫柔包容一切的和平主義者</span><br> 討厭紛爭，對待任何人都能溫和沉穩。不愛張揚，卻擁有溫柔包容周圍一切的寬廣胸懷。"
    },
    "r9" : {
        type: "result",
        title: "比利時鬆餅",
        link: "https://colorstw.com/tile/bergenwaffles",
        MainImage: "img/BergenwafflesBrown.png",
        colors: [
            { code: "#C0AD9F", img:"img/BergenwafflesBrown.png"},
            { code: "#E9E9E7", img:"img/BergenwafflesWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>笑臉迎人且親切的開心果</span><br> 擁有圓潤親切感與溫暖氛圍的人。能營造出如咖啡廳般舒適的空氣，讓所有人自然露出笑容。"
    },
    "r10" : {
        type: "result",
        title: "曼哈頓甜甜圈",
        link: "https://colorstw.com/tile/doughnut",
        MainImage: "img/DoughnutBlue.png",
        colors: [
            { code: "#EBEBEC", img:"img/DoughnutWhite.png"},
            { code: "#6FA4A1", img:"img/DoughnutGreen.png"},
            { code: "#71A1B4", img:"img/DoughnutBlue.png"},
            { code: "#DDE7F4", img:"img/DoughnutIndigo.png"},

        ],
        text: "<span class='answer-Sub-Title'>對趨勢敏銳的時尚都會派</span><br> 充滿時尚與都會感品味的人。對流行與新奇事物敏銳，能瀟灑精明地享受屬於自己的生活方式。"
    },
    "r11" : {
        type: "result",
        title: "蔬果泥",
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
        text: "<span class='answer-Sub-Title'>包容力滿分的溫馨療癒者</span><br> 帶有如毛絨絨般溫暖感受，擁有溫柔包容力的人。無法放任困難中的人不管，能讓周圍感到安心。"
    },
    "r12" : {
        type: "result",
        title: "馬卡龍",
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
        text: "<span class='answer-Sub-Title'>率直可愛的受寵角色</span><br> 擁有率直且天真爛漫可愛感的人。情感表達豐富且真誠，總能讓人產生「想照顧他/她」的受寵魅力。"
    },
    "r13" : {
        type: "result",
        title: "調節濕氣磚",
        link: "https://colorstw.com/tile/harukaratto",
        MainImage: "img/harukaratto.png",
        colors: [
            { code: "#EDE1D8", img:"img/harukaratto.png"},
        ],
        text: "<span class='answer-Sub-Title'>熱愛真實自我的自然派</span><br> 不加修飾、充滿溫暖與率直的人。自然且表裏如一，充滿人情味的性格能讓周圍感到放鬆。"
    },
    "r14" : {
        type: "result",
        title: "法式可麗餅",
        link: "https://colorstw.com/tile/galette",
        MainImage: "img/GarretGreen.png",
        colors: [
            { code: "#F5F6EF", img:"img/GarretWhite.png"},
            { code: "#181818", img:"img/GarretBlack.png"},
            { code: "#5E2F1D", img:"img/GarretBrown.png"},
            { code: "#0C0201", img:"img/GarretDeep.png"},
            { code: "#073723", img:"img/GarretGreen.png"},
            { code: "#140C35", img:"img/GarretBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>追求洗鍊質感的大人類型</span><br> 保有自然感同時又帶有現代高雅品味的人。即使不刻意張揚，也會自然散發出洗鍊的成熟魅力。"
    },
    "r15" : {
        type: "result",
        title: "德式蛋糕",
        link: "https://colorstw.com/tile/torte",
        MainImage: "img/TorteGloss.png",
        colors: [
            { code: "#CFCFCD", img:"img/TorteMat.png"},
            { code: "#EFF0F1", img:"img/TorteGloss.png"},
            { code: "#2D2E33", img:"img/TorteBlack.png"},
        ],
        text: "<span class='answer-Sub-Title'>邏輯清晰俐落的靠山</span><br> 擁有精簡洗鍊的現代化思考方式。能朝著目標有效率且俐落行動，處理任何事情都乾脆可靠。"
    },
    "r16" : {
        type: "result",
        title: "水果糖",
        link: "https://colorstw.com/tile/drops",
        MainImage: "img/DropsOlive.png",
        colors: [
            { code: "#9AA2BE", img:"img/DropSesame.png"},
            { code: "#DF9098", img:"img/DropsSakura.png"},
            { code: "#8DA793", img:"img/DropsOlive.png"},
            { code: "#B0ADB2", img:"img/DropsRate.png"},
        ],
        text: "<span class='answer-Sub-Title'>自由奔放且充滿童心的繽紛派</span><br> 充滿繽紛色彩與活力的能量者。擁有自由的發想與強烈的童心，是個能把每天都過得繽紛有趣的奇才。"
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
                <h2 class="answerTitleWrap">屬於你的磁磚是……<br><span class="answerTitle">${currentData.title}</span></h2>
                <div class="imageWrap">
                    <img id="tile-image" src="${currentData.MainImage}" alt="タイルの画像">
                </div>
                <div class="colorSelector">
                    ${colorButtonsHtml}
                </div>
                <p class="answerText">${currentData.text}</p>
                <div class="ResultBtnContain">
                    <button class="resultBtn product" onclick="window.open('${currentData.link}', '_blank')">前往商品頁面</button>
                    <button class="resultBtn share" onclick="resetQuiz()">
                        <img src="img/share.png" class="shareIcon">
                        分享
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