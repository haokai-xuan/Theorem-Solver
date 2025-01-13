window.onload = function() {
    document.getElementById('rsakey-key').focus();

    if(localStorage.getItem('rsakey-key') && localStorage.getItem('rsakey-p')
        && localStorage.getItem('rsakey-q')) {
        document.getElementById('rsakey-key').value = localStorage.getItem('rsakey-key');
        document.getElementById('rsakey-p').value = localStorage.getItem('rsakey-p');
        document.getElementById('rsakey-q').value = localStorage.getItem('rsakey-q');
    }
}

const form = document.getElementById('rsakey-form');
const rsakey_key = document.getElementById('rsakey-key');
const rsakey_p = document.getElementById('rsakey-p');
const rsakey_q = document.getElementById('rsakey-q');

form.addEventListener('submit', () => {
    localStorage.setItem('rsakey-key', rsakey_key.value);
    localStorage.setItem('rsakey-p', rsakey_p.value);
    localStorage.setItem('rsakey-q', rsakey_q.value);
});
