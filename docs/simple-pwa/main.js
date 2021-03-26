document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        let colorChannels = [];
        for (let i = 0; i < 3; i++) {
            colorChannels.push(Math.floor(Math.random() * 256));
        }
        document.querySelector('body').style.background = "rgb(" + colorChannels.join(', ') + ")";
    });
});
