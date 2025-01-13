window.onload = function() {
    document.getElementById('gcd-a').focus();

    if(localStorage.getItem('gcd-a') && localStorage.getItem('gcd-b')) {
        document.getElementById('gcd-a').value = localStorage.getItem('gcd-a');
        document.getElementById('gcd-b').value = localStorage.getItem('gcd-b');
    }
}

const form = document.getElementById('gcd-form');
const gcd_a = document.getElementById('gcd-a');
const gcd_b = document.getElementById('gcd-b');

form.addEventListener('submit', () => {
    localStorage.setItem('gcd-a', gcd_a.value);
    localStorage.setItem('gcd-b', gcd_b.value);
});
