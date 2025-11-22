// Lấy phần tử đèn lồng
const lantern = document.getElementById('myLantern');

// Khi chuột đi vào -> dừng quay
lantern.addEventListener('mouseenter', () => {
    lantern.style.animationPlayState = 'paused';
    console.log('Đèn đã dừng!');
});

// Khi chuột đi ra -> quay tiếp
lantern.addEventListener('mouseleave', () => {
    lantern.style.animationPlayState = 'running';
    console.log('Đèn đang quay!');
});
