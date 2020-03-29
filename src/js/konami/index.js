const pressed = [];
const secretCode = 'danteum';

window.addEventListener('keyup', (e) => {
    // tell what key user has pressed
    console.log(e.key);
    // push the key pressed into our empty array
    pressed.push(e.key);
    // limit to seven characters (danteum)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
        console.log("DING DING YOU GUESSED THE SECRET CODE");
        cornify_add();
    }

    console.log(pressed)
    
})