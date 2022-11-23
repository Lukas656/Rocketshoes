let btn = document.querySelector('.btn');

let tenisPrincipal = document.querySelector('.caixaTenis');
let tenis2 = document.querySelector('.tenis2');
let tenis3 = document.querySelector('.tenis3');
let tenis4 = document.querySelector('.tenis4');

tenis2.addEventListener('click', ()=>{
    tenisPrincipal.style.backgroundImage = 'url(assets/tenis-1-galeria.png)';
    tenis2.style.borderBottom = '4px solid red'
    tenis3.style.borderBottom = 'none';
    tenis4.style.borderBottom = 'none';
});

tenis3.addEventListener('click', ()=>{
    tenisPrincipal.style.backgroundImage = 'url(assets/tenis-1-ampliado.png)';
    tenis3.style.borderBottom = '4px solid red'
    tenis4.style.borderBottom = 'none';
    tenis2.style.borderBottom = 'none';
});
tenis4.addEventListener('click', ()=>{
    tenisPrincipal.style.backgroundImage = 'url(assets/tenis-3-galeria.png)';
    tenis4.style.borderBottom = '4px solid red'
    tenis3.style.borderBottom = 'none';
    tenis2.style.borderBottom = 'none';
});

