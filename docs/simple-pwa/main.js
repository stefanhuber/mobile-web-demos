const button = document.querySelector('main > button');
const prompt = document.querySelector('article');

function updatePWADisplayMode() {
    let displayMode = "browser";

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (document.referrer.startsWith('android-app://')) {
        displayMode = 'twa'; // Trusted Web Activity
    } else if (navigator.standalone || isStandalone) { // navigator.standalone iOS hack
        displayMode = 'standalone';
    }

    document.querySelector('h1').textContent = `Simple PWA [${displayMode}]`;    
}

button.addEventListener('click', () => {
    let colorChannels = [];
    for (let i = 0; i < 3; i++) {
        colorChannels.push(Math.floor(Math.random() * 256));
    }
    document.querySelector('body').style.background = "rgb(" + colorChannels.join(', ') + ")";
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    prompt.style['display'] = 'block';
});

window.addEventListener('appinstalled', () => {    
    prompt.style['display'] = 'none';
    deferredPrompt = null;
    updatePWADisplayMode();
});

prompt.addEventListener('click', function(event) {
    if (event.target.dataset.id == 'install-yes' && deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(result => {
            console.log("result of user prompt", result);
            prompt.style['display'] = 'none';
            deferredPrompt = null;
            updatePWADisplayMode();
        });        
    } else {
        updatePWADisplayMode();
        prompt.style['display'] = 'none';
    }
});

updatePWADisplayMode();