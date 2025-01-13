window.onload = function() {
    document.getElementById('rsa-text').focus();

    if(localStorage.getItem('rsa-text') && localStorage.getItem('rsa-key') && localStorage.getItem('rsa-n')) {
        document.getElementById('rsa-text').value = localStorage.getItem('rsa-text');
        document.getElementById('rsa-key').value = localStorage.getItem('rsa-key');
        document.getElementById('rsa-n').value = localStorage.getItem('rsa-n');
    }
}

const form = document.getElementById('rsa-form');
const rsa_text = document.getElementById('rsa-text');
const rsa_key = document.getElementById('rsa-key');
const rsa_n = document.getElementById('rsa-n');

form.addEventListener('submit', () => {
    localStorage.setItem('rsa-text', rsa_text.value);
    localStorage.setItem('rsa-key', rsa_key.value);
    localStorage.setItem('rsa-n', rsa_n.value);
});
