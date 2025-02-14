document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".custom-prev");
    const nextBtn = document.querySelector(".custom-next");

    let currentIndex = 0;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentIndex ? "flex" : "none";
        });
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Quay lại slide đầu tiên nếu đang ở cuối
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Quay lại slide cuối nếu đang ở đầu
        }
        updateSlider();
    });

    updateSlider(); // Hiển thị slide đầu tiên khi load trang
});
