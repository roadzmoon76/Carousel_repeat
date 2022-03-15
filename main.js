(function () {
    const $imgs = document.querySelectorAll("img");
    const $leftArrow = document.querySelector(".fa-arrow-left");
    const $rightArrow = document.querySelector(".fa-arrow-right");
    const $dots = document.querySelectorAll("li");
    let currentIndex = 0;

    function previousImg() {
        if (currentIndex === 0) {
            $imgs[currentIndex].style.order = `${0}`;
            currentIndex = 4;
            $imgs[currentIndex].style.order = `${-1}`;
        } else {
            $imgs[currentIndex].style.order = `${0}`;
            currentIndex--;
            $imgs[currentIndex].style.order = `${-1}`;
        }
    }

    function nextImg() {
        if (currentIndex === 4) {
            $imgs[currentIndex].style.order = `${0}`;
            currentIndex = 0;
            $imgs[currentIndex].style.order = `${-1}`;
        } else {
            $imgs[currentIndex].style.order = `${0}`;
            currentIndex++;
            $imgs[currentIndex].style.order = `${-1}`;
        }
    }

    $leftArrow.addEventListener(("click"), previousImg);
    $rightArrow.addEventListener(("click"), nextImg);

    for (let i = 0; i < $dots.length; i++) {
        $dots[i].className += ` ${i}`;
    }

    for (let i = 0; i < $dots.length; i++) {
        $dots[i].addEventListener(("click"), (e) => {
            $imgs[currentIndex].style.order = `${0}`;
            currentIndex = Number(e.target.classList[1]);
            $imgs[currentIndex].style.order = `${-1}`;
        });
    }
})();