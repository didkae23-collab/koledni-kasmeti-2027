/* =========================
   КЪСМЕТИ
========================= */

const fortunes = {
   1: "✈️ Стягай куфара, че тази година диванът ще те вижда само на снимки!",

    2: "❤️ Здравето ти ще е желязно, а настроението — заразно!",

    3: "❤️ Чесънче – скилидка тънка – дяволи ще гони вънка, а пък с люспица от леща чака те любов гореща!",

    4: "❄️🎓 Книжка, тетрадка и малко мерак — шестици ще валят като сняг!",

    5: "🚗 Ключ ще звънне, мотор ще запее — нова кола пред дома ти ще грее!",

    6: "💼💸 Работа спорна, успехи безкрай — а за труда ти — бонус до край!",

    7: "👶🥰 Пелени, количка и бебешки смях — щъркелът идва с подарък за вас!",

    8: "💍💃🥂 Халки ще блеснат, чаши ще се вдигат — скоро сватбени хора ще се извиват!",

    9: "🏠 Тухла по тухла, мечта след мечта — скоро ще имаш своя къща една!",

    10: "💰 Жълтици ще дрънкат, банкноти ще шумят — парите към тебе сами ще вървят!",

    11: "🍀 Късметът ще ти намига, съдбата ще помага — тази година всичко по мед и масло ще става!",

    12: "😂 Диванът ще те зове, морето ще те чака — тази година работата да почака!"
};


/* =========================
   ОПРЕДЕЛЯМЕ КОЙ КЪСМЕТ
   ДА ПОКАЖЕМ ОТ ?k=1 ДО ?k=12
========================= */

const params = new URLSearchParams(window.location.search);

const requestedFortune = Number(params.get("k"));

const fortuneNumber =
    Number.isInteger(requestedFortune) &&
    requestedFortune >= 1 &&
    requestedFortune <= 12
        ? requestedFortune
        : 1;


/* =========================
   ПАДАЩ СНЯГ
========================= */

function createSnow() {
    const snow = document.createElement("div");

    snow.className = "snow";

    const symbols = [
        "❄",
        "❅",
        "❆",
        "•"
    ];

    snow.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    snow.style.left =
        Math.random() * 100 + "vw";

    snow.style.fontSize =
        (8 + Math.random() * 13) + "px";

    snow.style.opacity =
        0.35 + Math.random() * 0.65;

    snow.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 13000);
}


/* Пускаме снега */

setInterval(createSnow, 180);


/* =========================
   РАЗКРИВАНЕ НА КЪСМЕТА
========================= */

function revealFortune() {
    const button =
        document.querySelector("button");

    const fortune =
        document.getElementById("fortune");

    const card =
        document.querySelector(".card");


    /* Защита, ако липсва елемент */

    if (!button || !fortune || !card) {
        return;
    }


    /* Взимаме правилния късмет */

    const selectedFortune =
        fortunes[fortuneNumber] ||
        fortunes[1];


    fortune.textContent =
        selectedFortune;


    /* Скриваме бутона */

    button.style.display =
        "none";


    /* Разтърсване на картата */

    card.classList.add("magic");


    /* =====================
       ГОЛЯМО СИЯНИЕ
    ===================== */

    const light =
        document.createElement("div");

    light.className =
        "magic-light";

    document.body.appendChild(light);


    /* =====================
       СВЕТЕЩ КРЪГ
    ===================== */

    const ring =
        document.createElement("div");

    ring.className =
        "magic-ring";

    document.body.appendChild(ring);


    /* =====================
       ЗЛАТЕН ВЗРИВ ОТ ЗВЕЗДИ
    ===================== */

    const stars = [
        "✦",
        "✧",
        "✨",
        "★",
        "✦",
        "✧",
        "★"
    ];


    for (let i = 0; i < 45; i++) {
        const star =
            document.createElement("div");

        star.className =
            "magic-star";

        star.textContent =
            stars[
                Math.floor(
                    Math.random() *
                    stars.length
                )
            ];

        star.style.left =
            "50%";

        star.style.top =
            "50%";


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() *
            300;


        star.style.setProperty(
            "--sx",
            Math.cos(angle) *
            distance +
            "px"
        );


        star.style.setProperty(
            "--sy",
            Math.sin(angle) *
            distance +
            "px"
        );


        star.style.fontSize =
            (
                10 +
                Math.random() *
                18
            ) + "px";


        document.body.appendChild(star);


        setTimeout(() => {
            star.remove();
        }, 1600);
    }


    /* =====================
       ПОЯВА НА КЪСМЕТА
    ===================== */

    setTimeout(() => {
        fortune.style.display =
            "block";

        fortune.classList.remove(
            "epic"
        );

        /*
        Рестартираме анимацията
        */

        void fortune.offsetWidth;

        fortune.classList.add(
            "epic"
        );

        createConfetti();

    }, 450);


    /* =====================
       ПОЧИСТВАНЕ
    ===================== */

    setTimeout(() => {
        light.remove();
        ring.remove();

        card.classList.remove(
            "magic"
        );

    }, 1600);
}


/* =========================
   КОНФЕТИ
========================= */

function createConfetti() {
    const pieces = 90;

    const colors = [
        "#d4af37",
        "#f5d477",
        "#ffffff",
        "#8f1828",
        "#c99b45"
    ];


    for (let i = 0; i < pieces; i++) {
        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";


        confetti.style.left =
            Math.random() *
            100 +
            "vw";


        confetti.style.animationDuration =
            (
                3 +
                Math.random() *
                4
            ) +
            "s";


        confetti.style.animationDelay =
            Math.random() *
            0.8 +
            "s";


        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        confetti.style.width =
            (
                4 +
                Math.random() *
                5
            ) +
            "px";


        confetti.style.height =
            (
                8 +
                Math.random() *
                8
            ) +
            "px";


        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {
            confetti.remove();
        }, 8000);
    }
}


/* =========================
   ПРАВИМ ФУНКЦИЯТА ДОСТЪПНА
   ЗА onclick В HTML
========================= */

window.revealFortune = revealFortune;
