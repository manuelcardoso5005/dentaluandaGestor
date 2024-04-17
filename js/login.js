const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnEntrar = document.querySelector('#btnEntrar');
const erroLogin = document.querySelector('.msg-erro-login');
const label1 = document.querySelector('.lbl1');
const label2 = document.querySelector('.lbl2');

function moveUp (lbl, classCss) {
    lbl.classList.add(classCss)
}

function moveLabel (inp ,lbl, classCss) {
    if(inp.value == ''){
        lbl.classList.remove(classCss)
    } else {
        lbl.classList.add(classCss)
    }
}

function errorMsg (erroMsg, text, label, inp) {
    erroMsg.textContent = text;
    label.classList.add('labelErro');
    inp.classList.add('erroInp');
}

function rightMsg (erroMsg, text, label, inp) {
    erroMsg.textContent = text;
    label.classList.remove('labelErro');
    inp.classList.remove('erroInp');
}

email.addEventListener('focus', ()=> {
    moveUp (label1, 'labelActive');
});

email.addEventListener('blur', ()=> {
    moveLabel (email, label1,'labelActive');
});

email.addEventListener('input', ()=> {
    validEmail (email);
})

password.addEventListener('focus', ()=> {
    moveUp (label2, 'labelActive');
});

password.addEventListener('blur', ()=> {
    moveLabel (email, label2,'labelActive'); 
});

function validEmail (emailAdress) {
    if (emailAdress.value == '') {
        errorMsg (erroLogin, 'Digite um email', label1, emailAdress);
        return false;
    } else {
        rightMsg (erroLogin, '', label1, emailAdress) 
        return true;
    }
}

function validPassword (pass) {
    if (pass.value == '') {
        errorMsg (erroLogin, 'Digite uma senha', label2, pass);
        return false;
    } else {
        return true;
    }
}

btnEntrar.addEventListener('click', ()=> {
    const isValidPassword = validPassword (password);
    const isValidEmail = validEmail (email);

    if (!(isValidEmail == true && isValidPassword == true)){
        console.log('Tem algo errado!');
    } 
});