const MS_GIORNO = (24 * 60 * 60 )* 1000
const MS_SETTIMANA = 7 * MS_GIORNO
const MS_MESE = 30 * MS_GIORNO
const MS_ANNO = 365 * MS_GIORNO

const oggi = new Date()

document.getElementById('oggi').innerText = oggi.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})

const inizioScuola = new Date(2026, 8, 14)
const diffScuola = oggi - inizioScuola
document.getElementById('giorniScuola').innerText = Math.floor(diffScuola / MS_GIORNO)

document.getElementById('nascita').addEventListener('change', function() {
    let arrDataa = this.value.split('-')
    let annoNascita = parseInt(arrDataa[0])
    let meseNascita = parseInt(arrDataa[1]) - 1
    let giornoNascita = parseInt(arrDataa[2])

    let anno = oggi.getFullYear()
    let prossimoComp = new Date(anno, meseNascita, giornoNascita)

    let oggi2= new Date(oggi.getFullYear(), oggi.getMonth(), oggi.getDate())

    if (prossimoComp < oggi2) {
        prossimoComp.setFullYear(anno + 1)
    }

    document.getElementById('prossimo').innerText = prossimoComp.toLocaleDateString('it-IT', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    let diffMancanti = prossimoComp - oggi2
    let giorniMancanti = diffMancanti / MS_GIORNO

    if (giorniMancanti === 0) {
        document.getElementById('mancano').innerText = "Buon compleanno!"
    } else {
        document.getElementById('mancano').innerText = Math.floor(giorniMancanti)
    }

    let anni = prossimoComp.getFullYear() - annoNascita
    document.getElementById('anniCompiuti').innerText = anni
});