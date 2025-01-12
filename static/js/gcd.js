window.onload = function() {
    document.getElementById('a').focus();

    if(localStorage.getItem('gcd-a') && localStorage.getItem('gcd-b')) {
        document.getElementById('a').value = localStorage.getItem('gcd-a');
        document.getElementById('b').value = localStorage.getItem('gcd-b');
    }
}

const form = document.getElementById('gcd-form');
const gcd_a = document.getElementById('a');
const gcd_b = document.getElementById('b');

form.addEventListener('submit', () => {
    localStorage.setItem('gcd-a', gcd_a.value);
    localStorage.setItem('gcd-b', gcd_b.value);
});
