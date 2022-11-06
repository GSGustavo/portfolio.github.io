function verificarToggle(el, class1, class2) {
    if (el.classList.contains(class1)) {
        el.classList.remove(class1)
        el.classList.add(class2)
    } else {
        el.classList.remove(class2)
        el.classList.add(class1)
    }
}

temaAtual = 0

// body bg-dark text-light

function tema() {
    if (temaAtual == 0) {
        classeProcurar1 = '.text-light'
        classeProcurar2 = '.bg-dark'
        bgCompleto = '.bg-light-dif'
        cor = '.text-light-dif'
    } else {
        classeProcurar1 = '.text-dark'
        classeProcurar2 = '.bg-light'
        bgCompleto = '.bg-dark-dif'
        cor = '.text-dark-dif'
    }

    chave = [bgCompleto, cor, classeProcurar1, classeProcurar2]

    classes = [
        ['bg-light-dif', 'bg-dark-dif'],
        ['text-dark-dif', 'text-light-dif'],
        ['text-light', 'text-dark'],
        ['bg-light', 'bg-dark']
    ]

    for (i = 0; i <= 3; i++) {
        document.querySelectorAll(chave[i]).forEach(element => {
            verificarToggle(element, classes[i][0], classes[i][1])
        })
    }
   
}

$(document).on('ready', tema())

// bi-brightness-high-fill
// bi-moon-fill

function toggleTema(el) {
    el.toggleClass('fa-moon')
    el.toggleClass('fa-sun')
}

$(".tema").on('click', function() {
    if ($(this).hasClass('fa-moon')) {
        temaAtual = 1
        return toggleTema($(this)), tema()
    } else {
        temaAtual = 0
        return toggleTema($(this)), tema()
    }
})

setInterval(function () {
    tam = document.querySelectorAll(".skill")[0]
    if (tam) {
        t = tam.offsetHeight
        $("#skillsrow").height(t)
    }
   
}, 500)


iframe = document.querySelector("#iframe-chamada")
texto = document.querySelector("#texto-chamada")
iframeJ = $("#iframe-chamada")
textoJ = $("#texto-chamada")
titulo = $("#titulo")
emotesJ = $("#emotes")


$(".menu").on('click', function () {
    document.querySelector("#menu-content").classList.toggle('ml-menos-3000')
})

chamada = 0
emotes = [';-D', ':)', ':o', ';)', ':D']

setInterval(() => {
    if (iframe) {
        if (chamada == 0) {
            iframe.classList.remove('d-none')
        } else if (chamada == 1) {
            iframe.classList.add('d-none')
            texto.classList.remove('d-none')
            textoJ.html('FAÇA UMA ARTE PARA SEU NEGÓCIO')
        } else if (chamada == 2) {
            textoJ.html('FAÇA SEU SITE')
        } else if (chamada == 3) {
            textoJ.html('ENTRE EM CONTATO')
        } else if (chamada == 4) {
            texto.classList.add('d-none')
            iframe.classList.remove('d-none')
        }
    }

    emotesJ.html(emotes[chamada])

    if (chamada == 4) {
        chamada = 0
    }

    chamada++

  
}, 2000);



cursorInterval = setInterval(() => {
    cursor = document.querySelector("#writring")
    if (cursor != null) {
        if (!$("#writring").hasClass("d-none")) {
            cursor.classList.add('d-none')
        } else {
            cursor.classList.remove('d-none')
        }
    }
}, 650);


nome = 'GUSTAVO GONZAGA'



escrever()

function escrever() {
    if (temaAtual == 1) {
        classtext = 'text-light'
    } else {
        classtext = 'text-dark'
    }

    span = '<span id="" class="writring p-32 ' + classtext + ' align-self-center" style="font-family: regular;">|</span>'

    letra = 0
    escreverInterval = setInterval(() => {
        titulo.html(nome.slice(0, letra) + span)

        letra++
        if ($("#titulo").text().length == 16) {
            document.querySelector(".writring").id = 'writring' 
            clearInterval(escreverInterval)
            setTimeout(() => {
                apagar(span)
            }, 1500);
           
        }
    }, 110);

}

function apagar(span) {
    apagarInterval = setInterval(() => {
        document.querySelector(".writring").id = ''
        titulo.html(nome.slice(0, letra) + span)

        letra--

        if ($("#titulo").text().length == 1) {
            document.querySelector(".writring").id = 'writring'
            clearInterval(apagarInterval)
            escrever()
        }
    }, 110);
}

// SKILLS

btnsSkills = $(".togglebtn")
skills = document.querySelectorAll('.skill')
skillsj = $(".skill")


$(".togglebtn").on('click', function() {
    el1 = 0
    el2 = 1

    if ($(this).hasClass('0')) { // 0 = Esquerda | 1 = Direita
        if (skillsj[1].classList.contains("active")) {
            el1 = 1
            el2 = 0
        }
        skills[el1].classList.toggle('active')
        skills[el1].classList.toggle('left')
        skills[el2].classList.toggle('active')
        skills[el2].classList.toggle('right')
        skills[0].classList.toggle('z-1')

        setTimeout(function () {
            skills[el1].classList.toggle('left')
            skills[el2].classList.toggle('right')
        }, 300)


    } else {
        //skills[0].classList.toggle('d-none')
        if (skillsj[0].classList.contains("active")) {
            el1 = 1
            el2 = 0
        }
        
        skills[el2].classList.toggle('active')
        skills[el2].classList.toggle('right')
        skills[el1].classList.toggle('active')
        skills[el1].classList.toggle('left')
        skills[0].classList.toggle('z-1')

        
        setTimeout(function () {
            skills[el2].classList.toggle('right')
            skills[el1].classList.toggle('left')
        }, 300)

    }
})
