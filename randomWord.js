function generate() {
    let dictionary = '';
    if(document.getElementById('lowerCaseBox').checked){
        dictionary += 'qwertyuiopasdfghjklzxcvbnm';
    }
    if (document.getElementById('upperCaseBox').checked){
        dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }
    if (document.getElementById('digitBox').checked){
        dictionary += '0123456789';
    }
    if (document.getElementById('weirdCharBox').checked){
        dictionary += '!@#$%^&*()-=_+[]{}:;<>?';
    }
    const range = document.querySelector('input[type="range"]').value; // get value="10" inside <input> 
    document.querySelector('input[type = "text"]').value = 'test2';
    console.log(range);
    if(dictionary.length === 0 || range < 1) //checking for faulty value
    {
        return;
    }

    let password = '';
    for(let i = 0; i < range; i++){
        const RANDOM = Math.floor(Math.random() * dictionary.length);
        password += dictionary[RANDOM];
    }
    document.querySelector('input[type="text"]').value = password;
};

// onclick: > 1 boxes and generate button.
[...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach((element) => {
    element.addEventListener('click', generate);
});

//updating the new pass as we ALTER the range
document.querySelector('input[type="range"]').addEventListener('input', (event) => {
    document.querySelector('div.range span').innerHTML = event.target.value;
    generate();
});

document.querySelector('div.password button').addEventListener('click', () =>{
    const password = document.querySelector('div.password input').value;
    navigator.clipboard.writeText(password).then(() => {
        document.querySelector('div.password button').innerHTML = 'copied!';
        setTimeout(() =>{
            document.querySelector('div.password button').innerHTML = 'copy';
        }, 1000); // 1s
    })
})

generate();