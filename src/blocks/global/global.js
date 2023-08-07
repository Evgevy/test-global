let reg = /['!@#$%^&*()']/;
let string = document.querySelector('.global__input');

string.oninput = function() {
    this.value = this.value.replace(reg, '');
}
