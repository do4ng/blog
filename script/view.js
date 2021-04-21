const announce = document.getElementById("announce");
const welcome = document.getElementById("welcome");
const intro = document.getElementById("intro");
const me = document.getElementById("me");
const projects = document.getElementById("projects");
const projectsTheme = document.getElementById("projects-theme");
const projectsCards = document.getElementById("projects-cards");
const db = document.getElementById("db");
const dbSc = document.getElementById("db-sc");
const dbSb = document.getElementById("db-sb");
const view = document.getElementById("view");
const refer = document.getElementById("refer");
const about = document.getElementById("about");

announce.addEventListener("click", function() {
    view.innerHTML = "<h2>📣 공지</h2><span style=\"color: #919191\">아직까지는 공지가 없어요.</span>";
});
intro.addEventListener("click", function() {
    view.innerHTML = "<h2>🎈 Intro</h2>저를 소개하겠습니다.";
});
welcome.addEventListener("click", function() {
    view.innerHTML = "<h2>🎉 안녕하세요!</h2>저는 게임을 좋아하는 14살 소년 \"강동만두\"라고 합니다!<h3># 취미</h3>저의 취미는 🎮게임과 🎨프로그래밍입니다.<h3># 언어</h3>주로 Javascript을 사용하고 있습니다.<br>그밖에 Python, C, Java 등등을 할 수 있습니다.";
});
me.addEventListener("click", function() {
    view.innerHTML = "<h2>😏 @Me</h2>현재 사용하고 있는 계정들입니다.<br><a href=\"https://www.facebook.com/ehdalsrkd/\">Facebook</a><br><a href=\"https://www.instagram.com/r.alsrkd/\">Instagram</a><br><a href=\"https://www.github.com/kangdongmandoo/\">Github</a>";
});
projects.addEventListener("click", function() {
    view.innerHTML = "<h2>🎠 제가 만든 작품들입니다.</h2>많이 부족하지만 가벼운 마음으로 봐주시면 감사하겠습니다.";
});
projectsCards.addEventListener("click", function() {
    view.innerHTML = "<h2>🥈 Cards</h2><a href=\"https://github.com/kangdongmandoo/cards\">이 링크</a>를 클릭하시면 보실 수 있습니다.<h3># Svelte</h3>Svelte를 공부하며 제작한 프로젝트입니다.";
});
projectsTheme.addEventListener("click", function() {
    view.innerHTML = "<h2>🥇 Theme</h2><a href=\"https://github.com/kangdongmandoo/theme\">이 링크</a>를 클릭하시면 보실 수 있습니다.<h3># Scss</h3>Scss를 공부하며 제작한 프로젝트입니다.";
});
db.addEventListener("click", function() {
    view.innerHTML = "<h2>🤖 Discord Bots</h2>현재는 관심이 없어져 제작을 안하고 있습니다.<h3># 초대</h3>공부 목적으로 제작된 봇이라 배포는 하지 않겠습니다.";
});
dbSc.addEventListener("click", function() {
    view.innerHTML = "<h2>🏹 SandCastle</h2>도박 봇 입니다.<br>\"이끼 낀 금화\"님과 같이 제작하였습니다.<br>현재는 개발 중단되었지만 총 3번의 리메이크를 거친 작품입니다.";
});
dbSb.addEventListener("click", function() {
    view.innerHTML = "<h2>🔨 SandooBot</h2>서버 관리 봇 입니다.";
});
refer.addEventListener("click", function() {
    view.innerHTML = "<h2>📖 참고 사이트</h2><h3># 도움을 주신 분</h3><span style=\"color: #919191\">빈 리스트</span>";
});
about.addEventListener("click", function() {
    view.innerHTML = "<h2>📕 정보</h2>저의 노트가 될 곳 입니다.<br>마지막 수정일 : 2021 / 4 / 21<br><span style=\"color: #919191;font-size: small;\">Copyright (c) 2021 r.ehdals</span>";
});