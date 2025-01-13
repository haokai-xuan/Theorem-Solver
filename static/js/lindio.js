window.onload = function() {
    document.getElementById('lindio-a').focus();

    if(localStorage.getItem('lindio-a') && localStorage.getItem('lindio-b') && localStorage.getItem('lindio-c')) {
        document.getElementById('lindio-a').value = localStorage.getItem('lindio-a');
        document.getElementById('lindio-b').value = localStorage.getItem('lindio-b');
        document.getElementById('lindio-c').value = localStorage.getItem('lindio-c');
    }
}

const form = document.getElementById('lindio-form');
const lindio_a = document.getElementById('lindio-a');
const lindio_b = document.getElementById('lindio-b');
const lindio_c = document.getElementById('lindio-c');

form.addEventListener('submit', () => {
    localStorage.setItem('lindio-a', lindio_a.value);
    localStorage.setItem('lindio-b', lindio_b.value);
    localStorage.setItem('lindio-c', lindio_c.value);
});
