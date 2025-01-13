window.onload = function() {
    document.getElementById('lincong-a').focus();

    if(localStorage.getItem('lincong-a') && localStorage.getItem('lincong-b')
        && localStorage.getItem('lincong-m')) {
        document.getElementById('lincong-a').value = localStorage.getItem('lincong-a');
        document.getElementById('lincong-b').value = localStorage.getItem('lincong-b');
        document.getElementById('lincong-m').value = localStorage.getItem('lincong-m');
    }
}

const form = document.getElementById('lincong-form');
const lincong_a = document.getElementById('lincong-a');
const lincong_b = document.getElementById('lincong-b');
const lincong_m = document.getElementById('lincong-m');

form.addEventListener('submit', () => {
    localStorage.setItem('lincong-a', lincong_a.value);
    localStorage.setItem('lincong-b', lincong_b.value);
    localStorage.setItem('lincong-m', lincong_m.value);
});
