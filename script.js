const cells = document.getElementsByClassName('cell');
const sumBox = document.querySelector('#s');
const countBox = document.querySelector('#c');

const sumCounter = {
    value: 0,
    element: sumBox,

    change(delta) {
        this.value += delta;
        this.element.innerText = this.value;
    }
};

const countCounter = {
    value: 0,
    element: countBox,

    change(delta) {
        this.value += delta;
        this.element.innerText = this.value;
    }
};

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function () {
        const n = parseInt(this.textContent, 10);
        const isOn = this.classList.contains('on');

        const sign = isOn ? -1 : 1;

        this.classList.toggle('on');

        sumCounter.change(sign * n);
        countCounter.change(sign);
    });
}
