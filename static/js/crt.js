window.onload = function() {
    document.getElementById('a1').focus();

    if(localStorage.getItem('crt-a1') && localStorage.getItem('crt-m1')
     && localStorage.getItem('crt-a2') && localStorage.getItem('crt-m2')) {
        document.getElementById('a1').value = localStorage.getItem('crt-a1');
        document.getElementById('a2').value = localStorage.getItem('crt-a2');
        document.getElementById('m1').value = localStorage.getItem('crt-m1');
        document.getElementById('m2').value = localStorage.getItem('crt-m2');
    }
}

const form = document.getElementById('crt-form');
const crt_a1 = document.getElementById('a1');
const crt_a2 = document.getElementById('a2');
const crt_m1 = document.getElementById('m1');
const crt_m2 = document.getElementById('m2');

form.addEventListener('submit', () => {
    localStorage.setItem('crt-a1', crt_a1.value);
    localStorage.setItem('crt-a2', crt_a2.value);
    localStorage.setItem('crt-m1', crt_m1.value);
    localStorage.setItem('crt-m2', crt_m2.value);
});
