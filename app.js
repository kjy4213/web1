$("#fullpage").fullpage({
  anchors: ["main", "kor", "ch", "it", "jp"],
  //options here
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  menu: ["#main_menu", "#kor_menu", "#ch_menu", "#it_menu", "#jp_menu"],
  navigationTooltips: ["메인메뉴", "한식", "중식", "양식", "일식"],
  // slidesNavigation: true,
  autoScrolling: true, // 자동으로 스크롤링
  scrollHorizontally: true, // 수평으로 움직일지 여부
  navigation: true, // 네비게이션
  navigationPosition: "right", // 네비게이션 포지션
  slidesNavigation: true,
  continuousVertical: true, // 끝까지 가면 다시 처음으로 가는지 여부
  scrollingSpeed: 500, // 스크롤링 스피드
  keyboardScrolling: true, // 키보드로 스크롤링 가능하게
  verticalCentered: true, // 가운데로 오도록 정렬
});

$(".main-box").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    // 반응형 웹 구현 옵션
    {
      breakpoint: 960, //화면 사이즈 960px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, //화면 사이즈 768px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 3,
      },
    },
  ],
});
// FOODIES & Co 누르면 첫 화면으로 돌아가는 이벤트
$(".navbar-brand").click(function () {
  location.href = "index.html";
});

$(".btn-sm").click(function () {
  $(this).children().toggleClass("heartChange");
  $(this).children().toggleClass("apply-shake");
});

const list = [
  "떡볶이",
  "갈비찜",
  "족발",
  "쭈꾸미",
  "삼겹살",
  "짜장면",
  "간짜장",
  "짬뽕",
  "볶음밥",
  "탕수육",
  "파스타",
  "바베큐",
  "스테이크",
  "피자",
  "필라프",
  "라멘",
  "돈가츠",
  "우동",
  "돈부리",
  "소바",
];
// 다이스 아이콘 클릭하면 애니메이션 효과 주는 이벤트
const btn = document.querySelector(".dice-icon");
btn.addEventListener("click", () => {
  random();
});

var popupX = window.screen.width / 2 - 600 / 2;
//&nbsp;만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음

var popupY = window.screen.height / 2 - 400 / 2;
//&nbsp;만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음

// 다이스 아이콘 클릭하면 랜덤으로 메뉴를 추천해주는 메서드
function random() {
  let random = Math.floor(Math.random() * list.length) + 1;
  let strInfo = "images/" + random + ".jpg";
  alert(list[random - 1] + "을(를) 추천해드립니다!");
  var win = window.open(
    strInfo,
    "추천",
    "width=600px height=400px left=" + popupX + ", top=" + popupY
  );
}

// 검색박스 구현

const inputBox = document.querySelector("input");
const recommendBox = document.querySelector("#recommend");
const texts = document.querySelectorAll(".text");
const searchbar = document.querySelector(".h-100");
var p = null;
inputBox.addEventListener("keyup", (e) => {
  if (e.target.value.length > 0) {
    recommendBox.classList.remove("invisible");
    // list.forEach((menu) => {
    //   if (menu.indexOf(e.target.value)!=-1) {
    //     texts.forEach((textEl) => {
    //       textEl.textContent = menu;
    //     })
    //   }
    // })
    $(".item").remove();
    for (let i = 0; i < list.length; i++) {
      if (list[i].indexOf(e.target.value) != -1) {
        p = `<div class="item"><span class="text${i}">${list[i]}</span></div>`;
        $("#recommend").append(p);
        $(".text" + i).on("click", function () {
          location.href = "#food" + (i + 1);
        });
      }
    }
  }

  // 검색바에서 마우스가 떠나면 검색창이 사라지게 하는 이벤트
  searchbar.addEventListener("mouseleave", (event) => {
    recommendBox.classList.add("invisible");
  });
});

$(window).resize(function () {
  // width값을 가져오기
  var width_size = window.outerWidth;

  // 800 이하인지 if문으로 확인
  if (width_size <= 756) {
    $(".desc").children().addClass("scroll");
  } else if (width_size > 756) {
    $(".desc").children().removeClass("scroll");
  }
});
