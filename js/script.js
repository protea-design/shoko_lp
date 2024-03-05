// FV Swiper
const swiper = new Swiper('.fv_swiper', {
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 3000,
  slidesPerView: 4,
  breakpoints: {
    767: {
      slidesPerView: 7,
    }
  }
});

// 導入事例 Swiper
const case_swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$(window).scroll(function () {
  $('.slidein').each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();

    if (scroll > elemPos - windowHeight + 150) {
      $(this).addClass('scrollin');
    }
  });
});

// ハンバーガーメニュー
// Q1
const qa1 = document.querySelector(".js-ac1"); // js-ac要素を取得し変数に格納
function acToggle() { // クリック時に発火する関数を作成
  const content = this.nextElementSibling; // js-ac要素の「次の要素」を取得し変数に格納 
  content.classList.toggle("is-open");　// js-ac要素の「次の要素」
  const qa1 = this; // js-ac要素自身を変数に格納
  qa1.classList.toggle('is-open'); // js-ac要素にis-openつけ外し
}

qa1.addEventListener("click", acToggle);

// Q2
const qa2 = document.querySelector(".js-ac2");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa2 = this;
  qa2.classList.toggle('is-open');
}
qa2.addEventListener("click", acToggle);

// Q3
const qa3 = document.querySelector(".js-ac3");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa3 = this;
  qa3.classList.toggle('is-open');
}
qa3.addEventListener("click", acToggle);

// Q4
const qa4 = document.querySelector(".js-ac4");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa4 = this;
  qa4.classList.toggle('is-open');
}
qa4.addEventListener("click", acToggle);

// Q5
const qa5 = document.querySelector(".js-ac5");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa5 = this;
  qa5.classList.toggle('is-open');
}
qa5.addEventListener("click", acToggle);

// Q6
const qa6 = document.querySelector(".js-ac6");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa6 = this;
  qa6.classList.toggle('is-open');
}
qa6.addEventListener("click", acToggle);

// Q7
const qa7 = document.querySelector(".js-ac7");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa7 = this;
  qa7.classList.toggle('is-open');
}
qa7.addEventListener("click", acToggle);

// Q8
const qa8 = document.querySelector(".js-ac8");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa8 = this;
  qa8.classList.toggle('is-open');
}
qa8.addEventListener("click", acToggle);

// Q9
const qa9 = document.querySelector(".js-ac9");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa9 = this;
  qa9.classList.toggle('is-open');
}
qa9.addEventListener("click", acToggle);

// Q10
const qa10 = document.querySelector(".js-ac10");
function acToggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
  const qa10 = this;
  qa10.classList.toggle('is-open');
}
qa10.addEventListener("click", acToggle);


// 文字アニメーション
function slideAnime() {
  $('.leftAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      //左から右へ表示するクラスを付与
      //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    } else {
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

    }
  });

}
// 画面をスクロールをしたら動かす
$(window).scroll(function () {
  slideAnime();/* アニメーション用の関数を呼ぶ*/
});



// 資料ダウンロードアニメーション
function reductionAnime() {
  $('.take_free').each(function () {
    var elemTakefree = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemTakefree - windowHeight) {
      $(this).addClass("is-visible"); 
    } else {
      //左から右へ表示するクラスを取り除く
      $(this).removeClass("is-visible");
    }
  });

}
// 画面をスクロールをしたら動かす
$(window).scroll(function () {
  reductionAnime();
});


// SOLUTIONアコーディオン
$(function () {
	/* 表示する数を取得 */
	var contentsCount = $(".solution_1").length;
	/* 初期表示の数を変数に代入 */
	var n = 3;

	/* 3以下の場合は、「もっと見る」ボタン非表示 */
	if (contentsCount <= n) {
		$(".solution_button").hide();

		/* 3以上の場合は、sliceを利用して4以降のコンテンツを非表示 */
	} else {
		$(".solution_1").slice(n).hide();

		/* 非表示のコンテンツがある場合、「もっと見る」ボタンを「閉じる」ボタンに変更 */
		$(".solution_button").click(function () {
			if ($(".solution_1").slice(n).is(':hidden')) {
				$(".solution_1").slice(n).slideDown();
				$(this).text('閉じる');

				/* 非表示のコンテンツがない場合は、閉じる」ボタンを「もっと見る」ボタンに変更 */
			} else {
				$(".solution_1").slice(n).slideUp();
				$(this).text('くわしくみる');
			}
		});
	}
});