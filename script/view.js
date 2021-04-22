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
const ljs = document.getElementById("projects-lunarjs");
const dplay = document.getElementById("dplay");
const dplayabout = document.getElementById("dplay-about");
const dplay001 = document.getElementById("dplay-1");
// Hide
const si = document.getElementById("si");
const sp = document.getElementById("sp");
const sd = document.getElementById("sd");
const splay = document.getElementById("splay");
// +/-Bar
const sis = document.getElementById("si-s");
const sps = document.getElementById("sp-s");
const sds = document.getElementById("sd-s");
const splays = document.getElementById("splay-s");

announce.addEventListener("click", function() {
    view.innerHTML = "<h2>📣 공지</h2>최근에 있었던 업데이트 및 알림을 쓰는 곳 입니다.<div style=\"margin-top: 5%;\"class=\"announce\"><div class=\"announce-title\"># 업데이트</div>+ 글 목록 접기/펼치기 추가<br>+ 배치 변경<br>( 공지, 글 목록 )<br>+ Playground 추가<br>+ 링크 색상 변경<br>파란색 계열 -> 빨간색 계열<span style=\"color: #919191;font-size: small;\">2021/04/22</span></div><div class=\"announce\"><div class=\"announce-title\"># 제목 오타</div>r.ehdals을 e.ehdals으로 쓰는 실수가 있었습니다.<br>현재 수정 완료하였습니다.<span style=\"color: #919191;font-size: small;\">2021/04/21</span></div>";
});
intro.addEventListener("click", function() {
    if ( si.classList.contains("hide") ) {
        si.classList.remove("hide");
        sis.classList.replace("hs", "hs-h")
    } else {
        si.classList.add("hide");
        sis.classList.replace("hs-h", "hs");
    }
});
welcome.addEventListener("click", function() {
    view.innerHTML = "<h2>🎉 안녕하세요!</h2>저는 게임을 좋아하는 14살 소년 \"강동민\"라고 합니다.<h3># 취미</h3>저의 취미는 🎮게임과 🎨프로그래밍입니다.<h3># 언어</h3>주로 Javascript을 사용하고 있습니다.<br>그밖에 Python, C, Java 등등을 할 수 있습니다.";

});
me.addEventListener("click", function() {
    view.innerHTML = "<h2>😏 @Me</h2>현재 사용하고 있는 계정들입니다.<br><br><a href=\"https://www.facebook.com/ehdalsrkd/\">Facebook</a> | <a href=\"https://www.instagram.com/r.alsrkd/\">Instagram</a> | <a href=\"https://www.github.com/kangdongmandoo/\">Github</a>";
});
projects.addEventListener("click", function() { 
    if ( sp.classList.contains("hide") ) {
        sp.classList.remove("hide");
        sps.classList.replace("hs", "hs-h")
    } else {
        sp.classList.add("hide");
        sps.classList.replace("hs-h", "hs");
    }
});
projectsCards.addEventListener("click", function() {
    view.innerHTML = "<h2>🥈 Cards</h2><a href=\"https://github.com/kangdongmandoo/cards\">이 링크</a>를 클릭하시면 보실 수 있습니다.<h3># Svelte</h3>Svelte를 공부하며 제작한 프로젝트입니다.";
});
projectsTheme.addEventListener("click", function() {
    view.innerHTML = "<h2>🥇 Theme</h2><a href=\"https://github.com/kangdongmandoo/theme\">이 링크</a>를 클릭하시면 보실 수 있습니다.<h3># Scss</h3>Scss를 공부하며 제작한 프로젝트입니다.";
});
db.addEventListener("click", function() {
    if ( sd.classList.contains("hide") ) {
        sd.classList.remove("hide");
        sds.classList.replace("hs", "hs-h")
    } else {
        sd.classList.add("hide");
        sds.classList.replace("hs-h", "hs");
    }
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
    view.innerHTML = "<h2>📕 정보</h2>저의 노트가 될 곳 입니다.<br>마지막 수정일 : 2021 / 4 / 22<br><span style=\"color: #919191;font-size: small;\">Copyright (c) 2021 r.ehdals</span>";
});
ljs.addEventListener("click", function() {
    view.innerHTML = "<h2>🌙 Lunar.js</h2>자주 사용는 함수를 기기에 저장해주는 함수입니다.<h3># Nodejs</h3>Nodejs를 이용해 제작하였습니다.<br><a href=\"https://www.npmjs.com/package/@mandoo_/lunar.js\">NPM</a>";
});

dplay.addEventListener("click", function() {
  
    if ( splay.classList.contains("hide") ) {
        splay.classList.remove("hide");
        splays.classList.replace("hs", "hs-h")
        // console.log(splays)
    } else {
        splay.classList.add("hide");
        splays.classList.replace("hs-h", "hs");
    } 
});
dplayabout.addEventListener("click", function() {
    view.innerHTML = "<h2>🎢 About Playground</h2>테스트를 하거나 명령어를 잊어버리지 않도록 쓰는 노트입니다.";
});
dplay001.addEventListener("click", function() {
    view.innerHTML = "<h2># 001 - 부드러운 변경</h2><h3># Result</h3><span class=\"p001\">마우스를 위에 놓으세요.</span><h3># Css</h3>transition: all ease {초}s 0s;";
});
