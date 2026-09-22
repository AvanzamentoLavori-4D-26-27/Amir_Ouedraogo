const PAROLE = [
  'BIT','BUS','CPU','DNS','FTP','HUB','LAN','MAC','NAT','RAM',
  'ROM','SSH','TCP','UDP','URL','VPN','WEB','XML','ZIP','AJAX',
  'BYTE','CHIP','CODE','DATA','DISK','FILE','FONT','HTML','HTTP','JAVA',
  'JSON','LINK','LOOP','NODE','OPEN','PING','PIPE','PORT','RUBY','SMTP',
  'SOAP','SORT','SPAM','SWAP','UNIX','USER','VLAN','VOID','WIFI','ARRAY',
  'CACHE','CLASS','CLOUD','DEBUG','EMAIL','FLASH','FRAME','INDEX','INPUT',
  'LAYER','LINUX','LOGIN','MYSQL','PATCH','PIXEL','PROXY','QUERY','QUEUE',
  'REGEX','ROUTE','SCALA','SHELL','SLICE','STACK','SWIFT','TOKEN','TUPLE',
  'VIRUS','CLASSE','CLIENT','CODICE','COOKIE','DAEMON','DOCKER','DRIVER',
  'ENCODE','ERRORE','EVENTO','FILTER','FOOTER','HEADER','IMPORT','LAMBDA',
  'LAYOUT','METODO','MODULE','NAVBAR','OBJECT','PARSER','PLUGIN','RECORD',
  'RENDER','ROUTER','SCHEMA','SCRIPT','SELECT','SERVER','SIGNAL','SOCKET',
  'STRING','SWITCH','TABLET','THREAD','UPDATE','UPLOAD','UTENTE','VECTOR',
  'WIDGET','WINDOW','GATEWAY','COMPILER','HARDWARE','SOFTWARE','PROCESSO',
  'ACCOUNT','ACTION','ADAPTER','ADDRESS','ADMIN','ALGORITHM','ALIAS','ALLOCATE',
  'ANALYZE','ANCHOR','ANIMATE','ANNOUNCE','APPEND','ARCHIVE','ARGUMENT','ASSERT',
  'ASSIGN','ASSET','ATTACH','ATTEMPT','ATTEND','ATTRIBUTE','AUCTION','AUDIT',
  'AUTHOR','AUTOMATE','AUTOMATION','AUXILIARY','AVATAR','AVERAGE','AVOID','AWAIT',
  'BACKEND','BACKUP','BASELINE','BATCH','BEACON','BINDING','BITMAP','BOOLEAN',
  'BOUNCE','BRANCH','BRIDGE','BROADCAST','BROKEN','BROWSER','BUFFER','BUILD',
  'BULLET','BUNDLE','BUTTON','BYPASS','CALENDAR','CALLBACK','CAMPAIGN','CANDIDATE',
  'CAPSULE','CAPTURE','CATEGORY','CERTIFIED','CHANGELOG','CHANNEL','CHARSET','CHART',
  'CHECKBOX','CHECKLIST','CHECKSUM','CHEVRON','CIPHER','CIRCUIT','CIRCULAR','CITATION',
  'CLARIFY','CLASSIFY','CLEANUP','CLUSTER','COAUTHOR','COEXIST','COGNITIVE','COHERENCE',
  'COHERENT','COINCIDE','COLLATERAL','COLLECTING','COLLECTION','COLLECTOR','COLLISION',
  'COLOCATE','COLORIZE','COLORSPACE','COLUMN','COMBAT','COMBINED','COMBINER','COMMAND',
  'COMMENT','COMMIT','COMPACT','COMPARE','COMPILE','COMPLEX','COMPOSE','COMPRESS',
  'COMPUTE','CONCAT','CONCEPT','CONCURRENT','CONDITION','CONDUCT','CONNECT','CONNECTOR',
  'CONSTANT','CONSTRUCT','CONSUME','CONTACT','CONTAIN','CONTAINER','CONTENT','CONTEXT',
  'CONTINUE','CONTRACT','CONTROL','CONVERT','CONVINCE','COOKIE','COPYRIGHT','COORDINATE',
  'CORPUS','CORRECT','CORRIDOR','CORRUPT','COSMETIC','COST','COSTUME','COUNTER',
  'COUPLING','COVERAGE','COVERING','CRAFTED','CRAFTSMAN','CREATION','CREATIVE','CREDENTIAL',
  'CREDIBLE','CREDITED','CRISIS','CRITERIA','CRITICAL','CRITIQUE','CROP','CROSSING',
  'CRYSTAL','CUBIC','CULPRIT','CULTIVATE','CULTURE','CUMULATIVE','CURIOUS','CURRENCY',
  'CURRENT','CURSOR','CUSTOM','CUSTOMER','CUSTOMIZE','CUTOFF','CUTTING','CYCLE',
  'DATABASE','DEADLINE','DECISION','DECLARED','DECODING','DECREMENT','DEDICATE','DEFAULT',
  'DEFERRED','DEFINED','DEFINITE','DELETION','DELIMITER','DELIVERY','DEMOCRACY','DEMOLISH',
  'DEPRESSED','DEPRIVED','DESCENDED','DESCENDING','DESCRIBED','DESCRIBING','DESCRIPTOR',
  'DESIGNATED','DESIGNER','DESIRABLE','DESPAIR','DESPERATE','DESPISE','DESTRUCT',
  'NUT','MODEM','DETACH','DETACHED','DETAIL','DETAILED','DETECT','DETECTED','DETECTION'
]

const size = 10
const nWords = 9

let timerInterv
let words=[]

function timer(){
  const contSec=document.getElementById('sec')
    const contMin=document.getElementById('min')
  let s=0
  let m=0

  timerInterv=setInterval(()=>{
    contSec.innerHTML=s>9?s:'0'+s
    contMin.innerHTML=m

    s++
    if(s==59){s=0;m++}

  },1000)
}

function createLayout(){
  const container=document.getElementById('gameSec')
  const contWords=document.getElementById('contWords')
  let grid=document.createElement('div')
  grid.classList.add('grid')

  for(let i=0;i<(size*size);i++){
    let cell=document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('onclick','click()')
    grid.appendChild(cell)
  }
  grid.style.gridTemplateColumns=`repeat(${size},10%)`
  container.appendChild(grid)

  for(let i=0;i<nWords;i++){
    let div=document.createElement('div')
    let check=document.createElement('input')
    check.type="checkbox"
    let label=document.createElement('h5')
    label.innerHTML=words[i]
    div.style.display='flex'
    check.style.pointerEvents='none'
    div.appendChild(check)
    div.appendChild(label)
    contWords.appendChild(div)
  }

  let contMenu=document.createElement('div')
  contMenu.classList.add('menu')
  
  let div=document.createElement('div')
  let sec=document.createElement('h3')
  let min=document.createElement('h3')

  sec.id='sec'
  min.id='min'

  sec.innerHTML="00:"
  min.innerHTML="00"

  div.appendChild(sec)
  div.appendChild(min)

  let btn=document.createElement('button')
  btn.id='btn'
  btn.setAttribute('onclick','play()')
  contMenu.appendChild(div)
  contMenu.appendChild(btn)

 // container.appendChild(contMenu)

  let text='per ricominciare premere F5 oppure ricaricare la pagina'
  



  
}

function generateWords(){
  let word
  for(let i=0;i<nWords;i++){
    do{
      word=PAROLE[Math.floor(Math.random()*PAROLE.length)]
    } while(words.includes(word))
    words[i]=word
  }
}

window.onload=()=>{
  generateWords()
  createLayout()
}


function play(){
  document.getElementsByTagName('button')[0].disabled=true
  timer()
  
}

function click(){

}

function hideWords(){
  const grid=document.getElementsByClassName('cell')
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for(let i=0;i<(size*size);i++){
    grid[i].innerHTML=characters[Math.floor(Math.random()*characters.length)]
  }
  const indexes=[]
  words.forEach(wrd => {
    let rowIndex=Math.floor(Math.random()*size)

  })
}

