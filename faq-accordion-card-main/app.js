// let active = 0;
// let innactive = 1;
document.getElementsByClassName('toggle-btn').addEventListener('click', displayInfo);

const displayInfo = () => document.getElementsByClassName('faq-answer').classList.add('appear');