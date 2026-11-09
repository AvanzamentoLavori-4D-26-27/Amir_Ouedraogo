
const sorgente = document.getElementById('sorgente')
const esito = document.getElementById('esito')

let dossier
let sospetti=[]

window.onload = () => {
    btnEsempioInv.addEventListener('click', () => {
        sorgente.value = '{"caso":"dossier rotto","sospetti":[,]}'
        Leggi()
    })

    btnAggiorna.addEventListener('click', () => {
        if(!dossier){
            alert('caricare una stringa valida per aggiornare il dossier')
            return
        }
        dossier.conclusione=annotazione.value
        esito.className='alert alert-success'
        esito.innerHTML='dossier aggiornato. La textarea contiene ancora il testo iniziale: premi JSON.stringify() per esportare il dossier.'
    })

    btnStringify.addEventListener('click', () => {
         if(!dossier){
            alert('caricare una stringa valida per aggiornare il dossier')
            return
        }
        ris.setAttribute('rows',14)
        ris.value=JSON.stringify(dossier,null,4)
    })

    btnRipristina.addEventListener('click',()=>{
        sorgente.value=''
        ris.value=''
        ris.setAttribute('rows',1)
        
        let i=0
        for(;i<sospetti.length;i++){
           // elenco.removeChild(document.getElementsByTagName('li')[i])
            console.log(document.getElementsByTagName('li')[i])
        }
        sospetti=[] 
        dossier={}

        Leggi()
        esito.className='alert alert-secondary'
        esito.innerHTML='Nessun dossier letto.'
    })
}
function Leggi() {
    let testo = sorgente.value
    if (!testo) {
        esito.className = 'alert alert-danger'
        esito.textContent = 'Assicurarsi di caricare il testo'
    }

    try {
        dossier = JSON.parse(testo) || {}
        esito.className = 'alert alert-success'
        esito.textContent = 'Conversione string -> JSON object avvenuta con successo !'

    } catch (e) {
        esito.className = 'alert alert-danger'
        esito.textContent = `${e.name}`
    }

    nomeCaso.innerHTML = dossier.caso || 'Caso non ancora aperto'
    oggettoScomp.innerHTML = dossier.oggetto || '...'
    luogo.innerHTML = dossier.luogo || '...'
 
    nSospetti.innerHTML = dossier.sospetti.length || ''
    caricaSospetti()
}

function caricaSospetti() {
    sospetti = [...dossier.sospetti] || [] 

    sospetti.forEach((s) => {

        let li = document.createElement('li')
        let div = document.createElement('div')
        let badge = document.createElement('div')

        let nome = document.createElement('h2')
        let alibi = document.createElement('p')
        let indizi = document.createElement('p')

        li.className = 'list-group-item d-flex justify-content-between align-items-center gap-0 '
        div.className = 'd-flex flex-column'

        nome.className = 'h5 mt-4'
        nome.innerHTML = s.nome

        alibi.className = 'text-muted small'
        alibi.innerHTML = 'Alibi: ' + s.alibi

        indizi.className = 'text-muted small'
        indizi.innerHTML = 'Indizi: '

        badge.innerHTML = `Sospetto ${s.livelloSospetto}/5 · ${s.daVerificare ? 'da verificare' : 'alibi verificato'}`
        badge.classList = `badge bg-${s.livelloSospetto < 3 ? 'success' : 'warning'} text-${s.livelloSospetto < 3 ? 'light' : 'dark'} fw-bold`

        let i = 0
        for (; i < s.indizi.length; i++) {
            indizi.innerHTML += s.indizi[i] + (i < s.indizi.length - 1 ? ' ; ' : '')
        }

        div.appendChild(nome)
        div.appendChild(alibi)
        div.appendChild(indizi)

        li.appendChild(div)
        li.appendChild(badge)

        elenco.appendChild(li)
    })
}



