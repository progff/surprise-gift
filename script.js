// 1. سحب جميع العناصر من الـ HTML
let passinput = document.getElementById("pass-input");
let unlockbtn = document.getElementById("unlock-btn");
let erortext = document.getElementById("error-msg");

let nametext = document.getElementById("p-name");
let birthtext = document.getElementById("p-dob");
let agetext = document.getElementById("p-year");
let traitslist = document.getElementById("p-traits");

let q1txet = document.getElementById("q1-text");
let q1input = document.getElementById("q1-input");
let q1btn = document.getElementById("q1-btn");
let massege11 = document.getElementById("q1-feedback");
let image1 = document.getElementById("img1");

let q2text = document.getElementById("q2-text");
let q2input = document.getElementById("q2-input");
let q2btn = document.getElementById("q2-btn");
let massege2 = document.getElementById("q2-feedback");
let image21 = document.getElementById("img2-1");
let image22 = document.getElementById("img2-2");

let q3text = document.getElementById("ques_3");
let q3input = document.getElementById("answer_3");
let q3btn = document.getElementById("btn_3");
let massege3 = document.getElementById("feedback_3");
let image31 = document.getElementById("ques3_photo");

let finaltext = document.getElementById("final-msg");
let loginGate = document.getElementById("login-gate");
let mainContent = document.getElementById("main-content");
let songLink = document.getElementById("song-link");
let endCard = document.getElementById("End");

let currentUser = null;

// 2. بيانات الشخصين مع تحديد مسار مجلد الصور Images/
const person1 = {
    name: "Miro",
    birthday: "16-11",
    age: "في قلبي وعقلي أحلى سن ❤️",
    traits: ["Your perspective on things is unique.", "emotional", "dependable personality"],
    q1: "What was the first concert we attended together at the stadium?",
    a1: "elite",
    q2: "What movie did we watch together for nour elnabawy?",
    a2: "el harifa 2",
    q3: "When I celebrated my birthday at school, what grade was I in?",
    a3: "kg2",
    images: ["Images/q1-1.jpg", "Images/q2-1.jpg", "Images/q2-2.jpg", "Images/hero.jpg"],
    songUrl: "https://open.anghami.com/VD5yu3PWa5b",
    finalMsg: "أنا مبسوطة جداً إنك في حياتي ودايماً مع بعض! ❤️"
};

const person2 = {
    name: "Mido",
    birthday: "14-8",
    age: "في قلبي وعقلي أحلى سن ✨",
    traits: ["good listener", "Your perspective on things is unique.", "kind personality"],
    q1: "What was the first concert we attended together at the stadium?",
    a1: "cairokee",
    q2: "What movie did we watch together for nour elnabawy?",
    a2: "the goat",
    q3: "When I celebrated my birthday at school, what grade was I in?",
    a3: "kg2",
    images: ["Images/1-q1.jpg", "Images/1-q2.jpg", "Images/2-q2.jpg", "Images/hero.jpg"],
    songUrl: "https://open.anghami.com/asd0zhYWa5b",
    finalMsg: "أنا مبسوطة جداً إنك في حياتي ودايماً مع بعض! ❤️"
};

// 3. فحص الباسورد
function checkPassword() {
    if (passinput.value === "5555") {
        currentUser = person1;
        loadUserData(currentUser);
        createParticles("💖");
        loginGate.classList.add("hidden");
        mainContent.classList.remove("hidden");
    } else if (passinput.value === "1010") {
        currentUser = person2;
        loadUserData(currentUser);
        createParticles("✨");
        loginGate.classList.add("hidden");
        mainContent.classList.remove("hidden");
    } else {
        erortext.innerText = "Please read the pass code on the back";
        erortext.classList.remove("hidden");
        erortext.style.display = "block";
    }
}

unlockbtn.addEventListener("click", checkPassword);

// 4. تحميل بيانات المستخدم
function loadUserData(user) {
    nametext.innerText = user.name;
    birthtext.innerText = user.birthday;
    agetext.innerText = user.age;

    traitslist.innerHTML = "";
    user.traits.forEach(function(trait) {
        let li = document.createElement("li");
        li.innerText = trait;
        traitslist.appendChild(li);
    });

    q1txet.innerText = user.q1;
    q2text.innerText = user.q2;
    q3text.innerText = user.q3;

    image1.src = user.images[0];
    image21.src = user.images[1];
    image22.src = user.images[2];
    image31.src = user.images[3];

    if (songLink) {
        songLink.href = user.songUrl;
    }

    finaltext.innerText = user.finalMsg;
}

// 5. فحص الأسئلة والإجابات
function checkQuestion1() {
    let userAnswer = q1input.value.trim().toLowerCase();
    
    if (userAnswer === currentUser.a1.toLowerCase()) {
        massege11.innerText = "Correct answer! 🎉";
        massege11.style.color = "#27ae60";
        image1.classList.remove("hidden");
        
        setTimeout(() => {
            image1.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    } else {
        massege11.innerText = "Try again! 🧐";
        massege11.style.color = "#e74c3c";
    }
}

function checkQuestion2() {
    let userAnswer = q2input.value.trim().toLowerCase();
    
    if (userAnswer === currentUser.a2.toLowerCase()) {
        massege2.innerText = "Correct answer! 🎉";
        massege2.style.color = "#27ae60";
        image21.classList.remove("hidden");
        image22.classList.remove("hidden");
        
        setTimeout(() => {
            image21.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    } else {
        massege2.innerText = "Try again! 🧐";
        massege2.style.color = "#e74c3c";
    }
}

function checkQuestion3() {
    let userAnswer = q3input.value.trim().toLowerCase();
    
    if (userAnswer === currentUser.a3.toLowerCase()) {
        massege3.innerText = "Correct answer! 🎉🎂";
        massege3.style.color = "#27ae60";
        
        image31.classList.remove("hidden");
        if (songLink) songLink.classList.remove("hidden");
        if (endCard) endCard.classList.remove("hidden");
        
        setTimeout(() => {
            image31.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    } else {
        massege3.innerText = "Try again! 🧐";
        massege3.style.color = "#e74c3c";
    }
}

q1btn.addEventListener("click", checkQuestion1);
q2btn.addEventListener("click", checkQuestion2);
q3btn.addEventListener("click", checkQuestion3);

// 6. القلوب والنجوم
function createParticles(symbol) {
    const container = document.getElementById("particles-container");
    container.innerHTML = "";
    
    for (let i = 0; i < 25; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        particle.innerText = symbol;
        
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (Math.random() * 3 + 4) + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        particle.style.fontSize = (Math.random() * 10 + 15) + "px";
        
        container.appendChild(particle);
    }
}