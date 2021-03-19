function measureCRP() {
    let span = document.getElementsByTagName('span')[0];
    span.textContent = 'interactive Example'; 
    span.style.display = 'inline';  
    
    let loadTime = document.createElement('div');
    loadTime.textContent = 'You loaded this page on: ' + new Date();
    loadTime.style.color = 'blue';
    document.body.appendChild(loadTime);
}
window.addEventListener('load', () => measureCRP());