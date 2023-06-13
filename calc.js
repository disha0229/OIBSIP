let button = document.querySelector('.buttons');
let btn = button.querySelectorAll('span');
let value = document.getElementById('value');


for(i=0; i<btn.length; i++) {
    btn[i].addEventListener('click',function(){
        if(this.innerHTML == 'Enter') {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if(this.innerHTML == 'Clear') {
            value.innerHTML = '';
            } else {
            value.innerHTML += this.innerHTML;
            }
        } 
    })
}