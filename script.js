const accordian = document.querySelectorAll('.content-box');
for (let i=0; i<accordian.length; i++) {
    accordian[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}
