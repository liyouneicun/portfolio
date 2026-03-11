let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let total = slides.length;

// 最初のスライドを表示
slides[currentIndex].classList.add('active');

function nextSlide() {
  let currentSlide = slides[currentIndex];
  currentIndex = (currentIndex + 1) % total;
  let nextSlideEl = slides[currentIndex];

  // 現在のスライドを左にフェードアウト
  currentSlide.classList.remove('active');
  currentSlide.classList.add('fade-out');

  // 次のスライドを右からフェードイン
  nextSlideEl.classList.add('active');

  // フェードアウトクラスをアニメーション後に削除
  setTimeout(() => {
    currentSlide.classList.remove('fade-out');
  }, 1000); // CSSのtransition時間と同じ
}

// 3秒ごとに切り替え
setInterval(nextSlide, 3000);