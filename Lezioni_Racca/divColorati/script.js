
        let colori = ['red', 'green', 'blue', 'yellow', 'cyan']
        let vetIndiceDivColorato = []
        let numColori = 0
        let numTentativi = 0
        let secondi = 0
        let intervalloTimer = null

        window.onload = function() {
            let wrapper = document.getElementById('wrapper')

            for(let i = 0; i < 16; i++) {
                let colDiv = document.createElement('div')
                colDiv.classList.add('col', 'd-flex', 'justify-content-center')

                let divCerchio = document.createElement('div')
                divCerchio.classList.add('divCerchio')
                divCerchio.setAttribute('coloreSfondo', 'lightgrey')
                divCerchio.setAttribute('id', i)

                colDiv.appendChild(divCerchio)
                wrapper.append(colDiv)
            }

            document.getElementById('btnStart').addEventListener('click', iniziaGioco)
        }

        function iniziaGioco() {
            document.getElementById('btnStart').classList.add('disabled')
            numColori = 0
            numTentativi = 0
            secondi = 0
            vetIndiceDivColorato = []

            clearInterval(intervalloTimer)
            document.getElementById('timer').innerText = "Tempo: 00:00"
            document.getElementById('txtRis').innerText = ""

            let wrapper = document.getElementById('wrapper')
            wrapper.classList.remove('noClick')

            let contaColori = 0
            while(contaColori < 5) {
                let indiceDivColorato = Math.floor(Math.random() * 16)
                let duplicato = false
                let i = 0
                while(i < contaColori && !duplicato) {
                    if(vetIndiceDivColorato[i] == indiceDivColorato)
                        duplicato = true
                    else
                        i++
                }

                if(!duplicato) {
                    vetIndiceDivColorato[contaColori] = indiceDivColorato
                    contaColori++
                }
            }

            for(let i = 0; i < 16; i++) {
                let cerchio = document.getElementById(i)
                cerchio.classList.remove('noClick')
                cerchio.style.backgroundColor = 'lightgrey'
                cerchio.setAttribute('coloreSfondo', 'lightgrey')
            }

            for(let j = 0; j < 5; j++) {
                document.getElementById(vetIndiceDivColorato[j]).setAttribute('coloreSfondo', colori[j])
            }

            gioca()
            avviaTimer()
        }

        function avviaTimer() {
            intervalloTimer = setInterval(function() {
                secondi++
                let min = String(Math.floor(secondi / 60)).padStart(2, '0')
                let sec = String(secondi % 60).padStart(2, '0')
                document.getElementById('timer').innerText = `Tempo: ${min}:${sec}`
            }, 1000)
        }

        function gioca() {
           let wrapper = document.getElementById('wrapper')
            wrapper.addEventListener('click', function(e) {
                let cerchio = e.target
                if (cerchio.classList.contains('divCerchio') && !cerchio.classList.contains('noClick')) {
                    colora(cerchio.id)
                }
            })
        }

        function colora(id) {
            document.getElementById(id).classList.add('noClick')
            numTentativi++
            document.getElementById(id).style.backgroundColor = document.getElementById(id).getAttribute('coloreSfondo')

            if(document.getElementById(id).getAttribute('coloreSfondo') != 'lightgrey') {
                numColori++
            }

            if(numColori == 5) {
                document.getElementById('txtRis').innerText = "Hai Vinto!"
                document.getElementById('wrapper').classList.add('noClick')
                clearInterval(intervalloTimer)
                document.getElementById('btnStart').classList.remove('disabled')
            } else if(numTentativi == 12) {
                document.getElementById('txtRis').innerText = `Missione fallita! Hai indovinato solo ${numColori} colori`
                document.getElementById('wrapper').classList.add('noClick')
                clearInterval(intervalloTimer)
                document.getElementById('btnStart').classList.remove('disabled')
            }
        }