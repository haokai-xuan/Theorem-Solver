window.onload = function() {
    document.getElementById('a').focus();

    if(localStorage.getItem('lindio-a') && localStorage.getItem('lindio-b') && localStorage.getItem('lindio-c')) {
        document.getElementById('a').value = localStorage.getItem('lindio-a');
        document.getElementById('b').value = localStorage.getItem('lindio-b');
        document.getElementById('c').value = localStorage.getItem('lindio-c');
    }
}

const form = document.getElementById('lindio-form');
const lindio_a = document.getElementById('a');
const lindio_b = document.getElementById('b');
const lindio_c = document.getElementById('c');

form.addEventListener('submit', () => {
    localStorage.setItem('lindio-a', lindio_a.value);
    localStorage.setItem('lindio-b', lindio_b.value);
    localStorage.setItem('lindio-c', lindio_c.value);
});
