const cells = document.getElementsByClassName('cell');
const sumBox = document.querySelector('#s');
const countBox = document.querySelector('#c');

let sum   = 0;
let count = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function () {
        const n = parseInt(this.innerHTML, 10);
        const isOn = this.classList.contains('on');

        if (isOn) {
            this.classList.remove('on');
            sum   -= n;
            count -= 1;
        } else {
            this.classList.add('on');
            sum   += n;
            count += 1;
        }

        sumBox.innerText   = sum;
        countBox.innerText = count;
    });
}