var slider = document.getElementById('slider');
var ncaracteres = document.getElementById('valor');
var button_gerar = document.getElementById('button-gerar');
containerpassword = document.getElementById('container-password');
var senhagerada = document.getElementById('senha');
var button_copiar = document.getElementById('button-copiar');
var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@';

ncaracteres.innerHTML = slider.value;

slider.oninput = function(){
    ncaracteres.innerHTML = this.value;
}

let password = '';

button_gerar.addEventListener('click', function(){
    for(let i = 0, n = charset.length; i < slider.value; ++i){
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    containerpassword.classList.remove('hide');
    senhagerada.innerHTML = password;
});

button_copiar.addEventListener('click', function(){
    navigator.clipboard.writeText(password);
    alert('Senha copiada com sucesso!')
});