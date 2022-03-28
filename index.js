// const mssg = document.querySelector('p')
// mssg.setAttribute('style','color:red;')
// mssg.innerHTML += '<h1>A new error</h1>';
// mssg.style.fontSize = '20px';
// mssg.style.margin = '50px';


// CHANGE CLASSES USING JAVASCRIPT

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('change');
// content.classList.remove('change')

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success')
    }
})

// TOGGLING CLASSES

const title = document.querySelector('.title');

title.classList.toggle('test');