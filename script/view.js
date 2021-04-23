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

let page = "default";
let subpage = "default";

function autoClose() {
    // console.log(page);
    if( page!="intro" && subpage != "intro" ) { 
        si.classList.add("hide");
        sis.classList.replace("hs-h", "hs");
    }
    if( page!="project" && subpage != "project" ) {
        sp.classList.add("hide");
        sps.classList.replace("hs-h", "hs");
    }
    if( page!="bot" && subpage != "bot" ) {
        sd.classList.add("hide");
        sds.classList.replace("hs-h", "hs");
    }
    if( page!="play" && subpage != "play" ) {
        splay.classList.add("hide");
        splays.classList.replace("hs-h", "hs");
    }
}

setInterval(function() {
    autoClose();
}, 10)


announce.addEventListener("click", function() {
    page = "announce"
    subpage = "default"
    view.innerHTML = "<h2>📣 공지</h2>최근에 있었던 업데이트 및 알림을 쓰는 곳 입니다.\
    <div style=\"margin-top: 2%;\"class=\"announce\"><div class=\"announce-title\"># 의견 <span class=\"announce-detail\">2021/04/23</span></div>최근 업데이트 어떠셨나요?</div> \
    <div style=\"margin-top: 2%;\"class=\"announce\"><div class=\"announce-title\"># update:210423 <span class=\"announce-detail\">2021/04/23</span></div><a style=\"color: #86b7ff; font-size: small;\" href=\"https://github.com/kangdongmandoo/kangdongmandoo.github.io#update-210423\">자세히 보기</a></div>\
    <div style=\"margin-top: 2%;\"class=\"announce\"><div class=\"announce-title\"># update:210422 <span class=\"announce-detail\">2021/04/22</span></div><a style=\"color: #86b7ff; font-size: small;\" href=\"https://github.com/kangdongmandoo/kangdongmandoo.github.io#update-210422\">자세히 보기</a></div>\
    ";
});
intro.addEventListener("click", function() {
    subpage = "intro"
    if ( si.classList.contains("hide") ) {
        si.classList.remove("hide");
        sis.classList.replace("hs", "hs-h")
    } else {
        si.classList.add("hide");
        sis.classList.replace("hs-h", "hs");
    }
});
welcome.addEventListener("click", function() {
    page="intro"
    subpage = "default"
    view.innerHTML = "<h2>🎉 안녕하세요!</h2>저는 게임을 좋아하는 14살 소년 \"강동민\"라고 합니다.<h3># 취미</h3>저의 취미는 🎮게임과 🎨프로그래밍입니다.<h3># 언어</h3>주로 Javascript을 사용하고 있습니다.<br>그밖에 Python, C, Java 등등을 할 수 있습니다.";

});
me.addEventListener("click", function() {
    page="intro"
    subpage = "default"
    view.innerHTML = "<h2>😏 @Me</h2>현재 사용하고 있는 계정들입니다.<br><br><a href=\"https://www.facebook.com/ehdalsrkd/\">Facebook</a> | <a href=\"https://www.instagram.com/r.alsrkd/\">Instagram</a> | <a href=\"https://www.github.com/kangdongmandoo/\">Github</a>";
});
projects.addEventListener("click", function() {
    page="default" 
    subpage = "project";
    if ( sp.classList.contains("hide") ) {
        sp.classList.remove("hide");
        sps.classList.replace("hs", "hs-h")
    } else {
        sp.classList.add("hide");
        sps.classList.replace("hs-h", "hs");
    }
});
projectsCards.addEventListener("click", function() {
    page="project"
    subpage = "default"
    view.innerHTML = "<h2>🥈 Cards</h2><a href=\"https://github.com/kangdongmandoo/cards\">이 링크</a>를 클릭하시면 보실 수 있습니다.<h3># Svelte</h3>Svelte를 공부하며 제작한 프로젝트입니다.";
});
projectsTheme.addEventListener("click", function() {
    page="project"
    subpage = "default"
    view.innerHTML = "<h2>🥇 Theme</h2><a href=\"https://github.com/kangdongmandoo/theme\">이 링크</a>를 클릭하시면 보실 수 있습니다.<h3># Scss</h3>Scss를 공부하며 제작한 프로젝트입니다.";
});
db.addEventListener("click", function() {
    subpage = "bot"
    if ( sd.classList.contains("hide") ) {
        sd.classList.remove("hide");
        sds.classList.replace("hs", "hs-h")
    } else {
        sd.classList.add("hide");
        sds.classList.replace("hs-h", "hs");
    }
});
dbSc.addEventListener("click", function() {
    page="bot"
    subpage = "default"
    view.innerHTML = "<h2>🏹 SandCastle</h2>도박 봇 입니다.<br>\"이끼 낀 금화\"님과 같이 제작하였습니다.<br>현재는 개발 중단되었지만 총 3번의 리메이크를 거친 작품입니다.";
});
dbSb.addEventListener("click", function() {
    page="bot";
    subpage = "default"
    view.innerHTML = "<h2>🔨 SandooBot</h2>서버 관리 봇 입니다.";
});
refer.addEventListener("click", function() {
    page="reference"
    subpage = "default"
    view.innerHTML = "<h2>📖 참고 사이트</h2><h3># 도움을 주신 분</h3><span style=\"color: #919191\">빈 리스트</span>";
});
about.addEventListener("click", function() {
    page="about"
    subpage = "default"
    view.innerHTML = "<h2>📕 정보</h2>저의 노트가 될 곳 입니다.<br>개설일 : 2021 / 4 / 21<br><span style=\"color: #919191;font-size: small;\">Copyright (c) 2021 r.ehdals</span>";
});
ljs.addEventListener("click", function() {
    page="project"
    subpage = "default"
    view.innerHTML = "<h2>🌙 Lunar.js</h2>자주 사용는 함수를 기기에 저장해주는 함수입니다.<h3># Nodejs</h3>Nodejs를 이용해 제작하였습니다.<br><a href=\"https://www.npmjs.com/package/@mandoo_/lunar.js\">NPM</a>";
});

dplay.addEventListener("click", function() {
    subpage = "play"
  
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
    page="play"
    subpage = "default"
    view.innerHTML = "<h2>🎢 About Playground</h2>테스트를 하거나 명령어를 잊어버리지 않도록 쓰는 노트입니다.";
});
dplay001.addEventListener("click", function() {
    page="play"
    subpage = "default"
    view.innerHTML = "<h2># 001 - 부드러운 변경</h2><h3># Result</h3><span class=\"p001\">마우스를 위에 놓으세요.</span><h3># Css</h3>transition: all ease {초}s 0s;";
});
