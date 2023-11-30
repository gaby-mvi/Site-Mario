    let formulario = document.querySelector(".fale-conosco")
    let mascara = document.querySelector(".mascara-form")
    let audioFaleConosco = document.querySelector(".fale-conosco-audio")
    let audioEnviarForm = document.querySelector(".enviar-form")


    function cliqueiNoBotao() {
        formulario.style.left = "50%";
        formulario.style.transform = "translateX(-50%)";
        mascara.style.visibility = "visible";
        audioFaleConosco.play();
    }

    function sumirFormulario() {
        formulario.style.left = "-345px"
        mascara.style.visibility = "hidden"
        audioEnviarForm.play();
    }
