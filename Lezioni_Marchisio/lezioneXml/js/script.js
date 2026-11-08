
let c = [
    {titolo:"tito1", artista:"artista", anno:"2019"},
    {titolo:"tito1", artista:"artista", anno:"2019"},
    {titolo:"tito1", artista:"artista", anno:"2019"},
    {titolo:"tito1", artista:"artista", anno:"2019"},
]
 let doc = new DOMParser().parseFromString(sorgente.value,'text/xml')


document.getElementById('fileXml').addEventListener('change',(e)=>{
    let file = e.target.files[0] //recupero il file caricato dall'input
    if(!file)return;

    console.log(file.name, file.size, file.type);

    let reader = new FileReader();

    reader.onload = () => {
        sorgente.value = reader.result;
    }

    /*
    reader.addEventListener('load',()=>{..comportamento...})
    */ 

    reader.readAsText(file,'UTF-8');
    mostra()
});


function Leggi(){
   

    let errore = doc.getElementsByTagName('parsererror')[0]
    if(errore){
        esito.classList='alert alert-danger small'
        esito.textContent=errore.textContent
        doc=null
        return
    }
    console.log(typeof sorgente.value, typeof doc)
    esito.classList.remove('alert-danger')
    esito.classList.add('alert','alert-success','small')
    esito.textContent='File caricato'

    console.log(doc.querySelector('canzone[anno="1968"] titolo').textContent)
    console.log(doc.querySelectorAll('canzone').length)

    mostra()
    
}

function mostra(){
    
    let radice=doc.documentElement
    let canzoni=doc.getElementsByTagName('canzone')
    let totDurata=0

    esito.textContent=`Radice <${radice}>`
    Array.from(canzoni).forEach(element => {
        
    });

    nomePlaylist.textContent=radice.getAttribute('nome')
    numero.textContent=canzoni.length

    elenco.innerHTML=""

    for(let i =0;i<canzoni.length;i++){
        totDurata+=parseInt(canzoni[i].getAttribute('durata'))

        let li=document.createElement('li')
        li.className='list-group-item d-flex justify-content-between align-items-center'
        li.textContent=canzoni[i].getElementsByTagName('titolo')[0].textContent+' - '+canzoni[i].getElementsByTagName('artista')[0].textContent


        let btn=document.createElement('button')
        btn.className='btn btn-outline-danger btn-sm'
        btn.textContent='X'
        btn.addEventListener('click',()=>{
            canzoni[i].remove()
            mostra()
        })

        li.appendChild(btn)
        elenco.appendChild(li)
    }
    
    durataTotale.innerText=totDurata
    console.log(canzoni[0])
}

document.getElementById('btnSalva').addEventListener('click',()=>{SalvaXml(sorgente.value)})

function SalvaXml(testo,nomeFile='playlist.xml'){
    let blob=new Blob([testo],{type:'application/xml'})

    let url=URL.createObjectURL(blob)
    let a = document.createElement('a')
    a.href=url
    a.download=nomeFile
    a.click()

    URL.revokeObjectURL(url)
}

document.getElementById('formCanzone').addEventListener('submit',(e)=>{
    e.preventDefault()
    if(!doc){
        alert('Prima leggi un documento')
    }

    let canzoneNuova=doc.createElement('canzone')
    canzoneNuova.setAttribute('anno'.document.getElementById('nuovoAnno').value)
    canzoneNuova.setAttribute('durata'.document.getElementById('nuovaDurata').value)

    let titolo=doc.createElement('titolo')
    titolo.textContent=document.getElementById('nuovoTitolo').value
    let artista=doc.createElement('titolo')
    artista.textContent=document.getElementById('nuovoArtista').value

    canzoneNuova.appendChild(titolo)
    canzoneNuova.appendChild(artista)

    doc.documentElement.appendChild(canzoneNuova)
    e.target.reset()
    mostra()

})