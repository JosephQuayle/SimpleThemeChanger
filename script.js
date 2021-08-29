let darkBtn = document.getElementById('togDark');
let lightBtn = document.getElementById('togLight');
let btnStyle = document.getElementById('btn');
let bodyBg = document.getElementById('body-bg');
let navBg = document.getElementById('nav-bg');
let title = document.getElementById('title');

darkBtn.addEventListener('click', darkTheme);
lightBtn.addEventListener('click', lightTheme);

function darkTheme(){
    navBg.style.background = '#000000';
    title.style.color = '#fafafa';
    bodyBg.style.background = '#000000';
    bodyBg.style.color = '#fafafa';
    paraColor.style.color = '#fafafa'
}

function lightTheme(){
    navBg.style.background = '#fafafa';
    title.style.color = '#000000';
    bodyBg.style.background = '#fafafa';
    bodyBg.style.color = '#000000';
    paraColor.style.color = '#000000'
}





