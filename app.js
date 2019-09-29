window.addEventListener('load', () => { // arrow function
    const sounds = document.querySelectorAll('.sound');
    const  pads = document.querySelectorAll('.pads div'); // we write div coz we eant to select its child class all of them
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#606bd3',
        '#60c2d3'
    ];
    // create sound
    pads.forEach((pad, index) => {
       pad.addEventListener('click', function () {
           sounds[index].currentTime = 0; // is for reset our pads to play again while tapping again on it
          sounds[index].play();
          createBubble(index);
       });
    });
    // create a function that create bubbles when we click on a pads
    const createBubble = (index) => {
        //create bubble
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationed', function () {
            visual.removeChild(this);
        });
    };
});