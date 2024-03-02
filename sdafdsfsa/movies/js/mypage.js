let username;
let title;
let room;
let time;
let seat;
// 페이지가 로드될 때 저장된 정보가 있는지 확인하고 필요한 경우 로그인 정보를 채움
window.onload = function () {
    username = localStorage.getItem('username')
    title = localStorage.getItem('title');
    room = localStorage.getItem('room')
    time = localStorage.getItem('time')
    seat = localStorage.getItem('seat')
    if (username) {
        document.getElementById('welcomeMessage').innerText = username + '님 반갑습니다.';
    } else {
        document.getElementById('welcomeMessage').innerText = '반갑습니다.';
    }
    if (title) {
        document.querySelector('#title').innerText = `영화 title : ${title}`;
    }
    if (room) {
        document.querySelector('#room').innerText = `상영관 : ${room}`;
    }
    if (time) {
        document.querySelector('#time').innerText = `상영시간 : ${time}`;
    }
    if (seat) {
        document.querySelector('#seat').innerText = `예약좌석: ${seat}`;
    }
};
function goHome() {
    window.location.href = 'index.html'
}