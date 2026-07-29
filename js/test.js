const testData = {
    "q1" : {
        number: "Q.01",
        text: "部屋を模様替えするなら、<br>シンプルで落ち着く空間より、<br>個性が光るおしゃれな空間にしたい？",
        nextYes: "q2",
        nextNo: "q3"
    },
    "q2" : {
        number: "Q.02",
        text: "自分の性格は「クールで現実的」よりも、<br>「感性豊かでロマンチスト」だと思う？",
        nextYes: "q4",
        nextNo: "q5"
    },
    "q3" : {
        number: "Q.03",
        text: "人から言われて嬉しいのは<br>「個性的だね」よりも「優しいね」だ。",
        nextYes: "q6",
        nextNo: "q6"
    },
    "q4" : {
        number: "Q.04",
        text: "直感やひらめきを信じて行動するよりも、<br>計画を立てて進める方が得意？",
        nextYes: "r1",
        nextNo: "q12"
    },
    "q5" : {
        number: "Q.05",
        text: "モノを選ぶとき、使いやすさよりも、見た目の可愛さやトキメキを重視する？",
        nextYes: "q13",
        nextNo: "q14"
    },
    "q6" : {
        number: "Q.06",
        text: "休日を過ごすなら、賑やかな場所よりも、<br>落ち着いた場所に行きたい？",
        nextYes: "q16",
        // nextNo: "q16"
    },
    "q7" : {
        number: "Q.07",
        text: "みんなを引っ張るリーダータイプよりも、<br>みんなを癒やすサポートタイプだと思う？",
        nextYes: "q10",
        nextNo: "q11"
    },
    "q8" : {
        number: "Q.08",
        text: "人付き合いは、広く浅くたくさんの人とワイワイ楽しむよりも、<br>狭く深く特定の親しい人と過ごす方が好き？",
        nextYes: "q9",
        // nextNo: "q11"
    },
    "q9" : {
        number: "Q.09",
        text: "自分のこだわりや世界観をしっかり持っていて、<br>簡単には妥協したくない方だ。",
        nextYes: "r17",
        nextNo: "r18"
    },
    "q10" : {
        number: "Q.10",
        text: "「洗練された都会的なデザイン」よりも、<br>「自然のぬくもりや手作り感」に惹かれる方だ.",
        nextYes: "r13",
        nextNo: "q17"
    },
    "q11" : {
        number: "Q.11",
        text: "周りから「しっかり者で大人っぽい」よりも、<br>「愛嬌があって親しみやすい」と言われることが多い？",
        nextYes: "r16",
        nextNo: "q8"
    },
    "q12" : {
        number: "Q.12",
        text: "新しいゲームを始めるとき、<br>ルール通りに遊ぶより、縛りプレイなど<br>自分なりの面白い遊び方を見つけるのが好き？",
        nextYes: "r2",
        // nextNo: "q5"
    },
    "q13" : {
        number: "Q.13",
        text: "ファッションや持ち物には、<br>どこかに「懐かしさ」や「アンティーク」の要素を取り入れたい？",
        nextYes: "r5",
        nextNo: "r6"
    },
    "q14" : {
        number: "Q.14",
        text: "賑やかでカラフルなものに囲まれていると、<br>テンションが上がってワクワクする",
        nextYes: "r7",
        nextNo: "r8"
    },
    "q15" : {
        number: "Q.15",
        text: "完璧主義で、<br>細かい部分まで整っていないと気が済まない。",
        nextYes: "r9",
        nextNo: "r10"
    },
    "q16" : {
        number: "Q.16",
        text: "誰かと会話するとき、深い話を熱く語り合う<br>ような時間が好き。",
        nextYes: "r11",
        nextNo: "r12"
    },

    "r1" : {
        type: "result",
        title: "パズル",
        link: "https://www.sticker-film.com/tile/puzzle.html",
        MainImage: "img/PuzzleYellow.png",
        colors: [
            { code: "#000", img:"img/PuzzleBlack.png"},
            { code: "#B4B5B3", img:"img/PuzzleGray.png"},
            { code: "#fff", img:"img/PuzzleWhite.png"},
            { code: "#F4EEA4", img:"img/PuzzleYellow.png"},
            { code: "#FFD7D1", img:"img/PuzzlePink.png"},
            { code: "#B8D9EE", img:"img/PuzzlecBlue.png"},
        ],
        text: "<span class='answer-Sub-Title'>ひらめきと遊び心のクリエイター</span><br> 自由な発想と高い行動力を持つあなた。パズルがピタッとハマるようなウキウキ感を日常で見つけられる人です。遊びゴコロ溢れる個性派な性格にぴったり！"
    },
    "r2" : {
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
        text: "<span class='answer-Sub-Title'>センスが光る！空間のアクセント</span><br> 直感と感性を大切にし、自分らしさを表現するのが得意なあなた。組み合わせでガラリと表情を変えるさんかくのように、周囲に新鮮な風を吹き込むハイセンスな個性にぴったりです。"
    },
    "r3" : {
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
        text: "<span class='answer-Sub-Title'>みんなを笑顔にする愛されキャラ</span><br> 可愛いものに目がなく、周囲をハッピーにする魅力を持ったあなた。コロンとしたフォルムと優しい色のマカロンは、場をパッと明るくするあなたの愛らしさにぴったりです。"
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
        text: "<span class='answer-Sub-Title'>トレンドをキャッチするおしゃれさん</span><br> 自分の好みがハッキリしていて、華やかなものが大好きなあなた。インテリアの主役として大人気のランタンは、洗練されたこだわりを持つ華のある性格にぴったりです。"
    },
    "r5" : {
        type: "result",
        title: "マジョリカ",
        link: "https://colorstw.com/tile/majolica",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>唯一無二の世界観を持つロマンチスト</span><br> 歴史や異国の雰囲気に惹かれる、豊かな感性を持つあなた。一味違った空間を演出するマジョリカは、他の人と被らない、あなただけの深いこだわりと世界観にぴったりです。"
    },
    "r6" : {
        type: "result",
        title: "ガレット",
        link: "https://www.sticker-film.com/mosaictile/garret.html",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>スマートで洗練されたモダン派</span><br> 無駄を好まず、スタイリッシュで上質なものを愛するあなた。空間をキリッと引き締めるモダンなガレットは、周囲から一目置かれるあなたのスマートさにぴったりです。"
    },
    "r7" : {
        type: "result",
        title: "ドロップス",
        link: "https://www.sticker-film.com/mosaictile/drops.html",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>エネルギー全開のポジティブスター</span><br> 賑やかな場所が大好きで、常にワクワクを探しているエネルギー溢れるあなた。カラフルなドロップスは、周りの人まで笑顔にする太陽のような明るさにぴったりです。"
    },
    "r8" : {
        type: "result",
        title: "マンハッタン",
        link: "https://colorstw.com/tile/doughnut",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>都会的で一歩先を行くトレンドセッター</span><br> 新しいものに敏感で、常に一歩先のおしゃれを楽しんでいるあなた。都会的でハイセンスなマンハッタンドーナッツは、洗練されたカッコよさを持つあなたにぴったりです。"
    },
    "r9" : {
        type: "result",
        title: "ミックス金平糖",
        link: "https://colorstw.com/tile/konpeitou",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>美意識の高い、こだわり完璧主義者</span><br> 物事を深く見極める目を持っており、妥協を許さない綺麗好きなあなた。きらきらと繊細で気高い雰囲気を持つミックス金平糖は、自分の美学を貫く凛とした性格にぴったりです。"
    },
    "r10" : {
        type: "result",
        title: "ミックス大正カフェ",
        link: "https://www.sticker-film.com/mosaictile/lmmix.html",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>ノスタルジックを愛する、物静かなインテリ</span><br> 静かに流れる時間や、歴史の深みを好むあなた。柔らかさの中に和の趣を感じさせるミックス大正カフェは、周囲に安心感を与えるあなたの知的で落ち着いた雰囲気にぴったりです"
    },
    "r11" : {
        type: "result",
        title: "大正カフェ",
        link: "https://colorstw.com/tile/taisyoucafe",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>上品で懐の深い、おもてなしの達人</span><br> 誰に対しても丁寧で、レトロで落ち着きのある上品な雰囲気をまとったあなた。お洒落でありながらホッとする大正カフェは、あなたの柔らかい物腰と丁寧な暮らしぶりにぴったりです。"
    },
    "r12" : {
        type: "result",
        title: "レンガ",
        link: "https://colorstw.com/tile/renga",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>ブレない芯を持つ、頼れる実力派</span><br> 自然体でありながら、どっしりとした安定感と高い信頼性を誇るあなた。時が経つほどに味が出るレンガは、時間をかけて大きな成果を積み上げていく誠実な強さにぴったりです。"
    },
    "r13" : {
        type: "result",
        title: "ハルカラット",
        link: "https://colorstw.com/tile/harukaratto",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>自然体でみんなを包み込む、癒やしの存在</span><br> 背伸びをせず、ありのままの自分で周囲を優しく包み込めるあなた。温かみのある漆喰風のハルカラットは、そこに居るだけで場を和ませるナチュラルな魅力にぴったりです。"
    },
    "r14" : {
        type: "result",
        title: "ベルゲンワッフル",
        link: "https://colorstw.com/tile/bergenwaffles",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>アットホームで聞き上手な愛され役</span><br> おうちのようにリラックスできる空間を好むあなた。可愛らしいカフェ風を演出するベンゲルワッフルは、誰からも「親しみやすい」と好かれる温厚な人柄にぴったりです。"
    },
    "r15" : {
        type: "result",
        title: "カプリ",
        link: "https://www.sticker-film.com/mosaictile/capuri.html",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>気取らない、軽やかで自由なスピリット</span><br> フットワークが軽く、カジュアルで気さくな雰囲気を持つあなた。肩の力が抜けたリラックス感のあるカプリは、誰とでもすぐに打ち解けられるフレンドリーな魅力にぴったりです。"
    },
    "r16" : {
        type: "result",
        title: "ピュレ",
        link: "https://colorstw.com/tile/puree",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>ふんわり優しい、みんなのオアシス</span><br> 争いごとが苦手で、常に周りの人の気持ちに寄り添える優しいあなた。もこもこした癒やし系のピュレは、トゲトゲした心を丸くしてしまう圧倒的な包容力にぴったりです。"
    },
    "r17" : {
        type: "result",
        title: "ジェラート",
        link: "https://www.sticker-film.com/mosaictile/gelato.html",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>気品あふれる、憧れのエレガント</span><br> どこか品があり、自分の世界を大切にしながらスマートに行動できるあなた。上品さと高貴さを兼ね備えたジェラートは、周囲に媚びず、凛と伫む美しい価値観にぴったりです。"
    },
    "r18" : {
        type: "result",
        title: "フラン",
        link: "https://colorstw.com/tile/fran",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>誰からも信頼される、心優しい優等生</span><br> 真面目で思いやりがあり、周囲のバランスをいつも考えて行動できるあなた。確かな安心感を与えるやさしい印象のフランは、みんなをそっと支える誠実な優しさにぴったりです。"
    },
    "r19" : {
        type: "result",
        title: "トルテ",
        link: "https://colorstw.com/tile/torte",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>洗練された大人の気品漂うロジカル派</span><br> 物事を論理的に捉え、静かで落ち着いた空間を好む大人っぽいあなた。モダンで高貴な印象のトルテは、無駄な主張をせずとも自然と上品さが滲み出るクールな佇まいにぴったりです。"
    },
    "r20" : {
        type: "result",
        title: "しかく",
        link: "https://www.sticker-film.com/tile/sikaku.html",
        // MainImage: "img/TaisyouBlue.png",
        colors: [
            // { code: "#737329", img:"img/TaisyouGreen.png"},
            // { code: "#032C4C", img:"img/TaisyouBlue.png"},
            // { code: "#99A0AF", img:"img/TaisyouGray.png"},
            // { code: "#EBD5C9", img:"img/TaisyouPink.png"},
            // { code: "#FFFFFF", img:"img/TaisyouWhite.png"},
        ],
        text: "<span class='answer-Sub-Title'>シンプル・イズ・ベスト! 信頼度No.1</span><br> 飾らない性格で、実用性や安定感を何よりも大切にするあなた。どんな空間にも馴染むしかくは、「この人に任せれば安心」と誰もが太鼓判を押す実直な性格にぴったりです。"
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
                <span class="header-icon right" onclick="openConfirmModal()">
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
    window.location.href = "index.html"; 
}