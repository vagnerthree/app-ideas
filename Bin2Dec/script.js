const bin = document.getElementById('binario')
const dec = document.getElementById('decimal')

bin.addEventListener('keydown', (e) => {

    if (e.key !== '1' &&
        e.key !== '0' &&
        e.key !== 'Backspace' &&
        e.key !== 'Delete' &&
        e.key !== 'ArrowLeft' &&
        e.key !== 'ArrowRight') {

        e.preventDefault()
    }
})

bin.addEventListener('keyup', () => {
    let num = bin.value
    let vfinal = 0
    totalnum = num.length
    numsplit = num.split('').reverse()


    for (let i = 0; i != totalnum; i++) {
        cont = 2 ** i
        total = cont * numsplit[i]
        vfinal += total
    }

    dec.value = vfinal
    if (dec.value === 'NaN') {
        dec.value = 'Digite um número válido'
    }
})