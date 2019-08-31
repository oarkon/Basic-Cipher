const slider = document.forms[0].shift;
const range = document.getElementById("range");
range.innerHTML = slider.value;
slider.oninput = function () {
    range.innerHTML = this.value;
}


const Crpytohabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', "!", "@", "#", "$",
    "%", "^", "&", "*", "(", ")",
    "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9"
]

const form = document.forms[0];
const output = document.getElementById('output');

form.addEventListener('submit', event => {
    event.preventDefault();
    output.innerText = [...form.plaintext.value].map(char => encrypt(char)).join('')
})

encrypt = (char) => {
    const shift = Number(form.shift.value);
    if (Crpytohabet.includes(char.toUpperCase())) {
        const position = Crpytohabet.indexOf(char.toUpperCase())
        const newPosition = (position + shift) % 45;
        return Crpytohabet[newPosition];
    }
    else
        return char
}

/*
its just basic one , if u want to more complex u can use charcodes , 
random numbers or schema about your cryptography and use it when u want to crypt something. oarkon 
*/
