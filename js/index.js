setInterval(function () {
    t = document.querySelectorAll(".skill")[0].offsetHeight
    $("#skillsrow").height(t)
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
setInterval(() => {

    if (chamada == 0) {
        iframe.classList.remove('d-none')
        emotesJ.html(';-D')
    } else if (chamada == 1) {
        iframe.classList.add('d-none')
        texto.classList.remove('d-none')
        textoJ.html('FAÇA UMA ARTE PARA SEU NEGÓCIO')
        emotesJ.html(':)')
    } else if (chamada == 2) {
        textoJ.html('FAÇA SEU SITE')
        emotesJ.html(':o')
    } else if (chamada == 3) {
        textoJ.html('ENTRE EM CONTATO')
        emotesJ.html(';)')
    } else if (chamada == 4) {
        chamada = 0
        texto.classList.add('d-none')
        iframe.classList.remove('d-none')
        emotesJ.html(':D')
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

span = '<span id="" class="writring p-32 c-white align-self-center" style="font-family: regular;">|</span>'

escrever()

function escrever() {
    letra = 0
    escreverInterval = setInterval(() => {
        titulo.html(nome.slice(0, letra) + span)

        letra++
        if ($("#titulo").text().length == 16) {
            document.querySelector(".writring").id = 'writring' 
            clearInterval(escreverInterval)
            setTimeout(() => {
                apagar()
            }, 1500);
           
        }
    }, 110);

}

function apagar() {
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

        
        setTimeout(function () {
            skills[el2].classList.toggle('right')
            skills[el1].classList.toggle('left')
        }, 300)

    }
})
