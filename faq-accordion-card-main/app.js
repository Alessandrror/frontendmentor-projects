const answerActive = 'appear';
const fontActive = 'faq-question-active';

let togbtn1 = document.getElementById('tgbtn1');
let faques1 = document.getElementById('faq-question-1');
let faqans1 = document.getElementById('faq-answer-1');

togbtn1.addEventListener('click', () => {
    faqans1.classList.toggle(answerActive);
    faques1.classList.toggle(fontActive);
});

let togbtn2 = document.getElementById('tgbtn2');
let faques2 = document.getElementById('faq-question-2');
let faqans2 = document.getElementById('faq-answer-2');

togbtn2.addEventListener('click', () => {
    faqans2.classList.toggle(answerActive);
    faques2.classList.toggle(fontActive);
});

let togbtn3 = document.getElementById('tgbtn3');
let faques3 = document.getElementById('faq-question-3');
let faqans3 = document.getElementById('faq-answer-3');

togbtn3.addEventListener('click', () => {
    faqans3.classList.toggle(answerActive);
    faques3.classList.toggle(fontActive);
});

let togbtn4 = document.getElementById('tgbtn4');
let faques4 = document.getElementById('faq-question-4');
let faqans4 = document.getElementById('faq-answer-4');

togbtn4.addEventListener('click', () => {
    faqans4.classList.toggle(answerActive);
    faques4.classList.toggle(fontActive);
});

let togbtn5 = document.getElementById('tgbtn5');
let faques5 = document.getElementById('faq-question-5');
let faqans5 = document.getElementById('faq-answer-5');

togbtn5.addEventListener('click', () => {
    faqans5.classList.toggle(answerActive);
    faques5.classList.toggle(fontActive);
});