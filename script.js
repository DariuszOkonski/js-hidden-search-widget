const btn = document.querySelector('[data-button]');
const widget = document.querySelector('[data-widget]');
const input = document.querySelector('[data-input]');

btn.addEventListener('click', () => {
    widget.classList.toggle('active')

    if(widget.classList.contains('active')) {
        input.focus()
    }
}) 