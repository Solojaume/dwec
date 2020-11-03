class Encuesta {
    constructor() {
        //Dependiendo de esta puntuacion sera el personaje que te dira
        this.puntuacion = 0;

        //Un array de Personajes Dependiendo de la puntacion obtenida seras uno u otro
        this.personajes = ["Look", "Yoda", "Dart Vader", "Han Solo", "Chewaka"];

        //Un array de preguntas
        this.preguntas = [];
    }
    addPreguntas(pregunta) {
        this.preguntas.push(pregunta);
    }

}

class Pregunta {
    constructor(enunciado, tipo) {
        //Este es el enunciado de la pregunta
        this.enunciado = enunciado;

        //Las preguntas son arrays donde se guarda por un lado la pregunta  y por otro la puntuacion
        // Respuesta = ["String de la respuesta", Puntuacion]
        this.respuestas = [];

        //Se define el tipo de pregunta
        this.tipo = tipo;

        //Define configuraciones de una que difieran  a las estandares o por defecto
        //Se guardan arrays nombre parameto
        //obcion=["Nombre atributo", Parametro]
        this.opcionesConfiguracion = [];
    }

    addRespuesta(respuesta) {
        this.respuestas.push(respuesta)
    }

    addOpcionConfiguracion(opcion) {
        this.opcionesConfiguracion.push(opcion)
    }

}



window.onload = function () {

    let inputNombre = document.getElementById("inputNombre");
    let inputEmail = document.getElementById("inputEmail");
    let inputCodigoPostal = document.getElementById("inputCodigoPostal");
    let inputFechaNacimiento = document.getElementById("inputFechaNacimiento");
    let comenzar = document.getElementById("comenzar");
    var pantallaInicio = document.getElementById("pantallaInicio");
    var divContenedor = document.getElementById("divContenedor");
    var encuesta = new Encuesta();
    comenzar.addEventListener("click", ocultarMostrarFormulario);
    var contPregregunta = 0;
    const addPre=(x)=>encuesta.addPreguntas(x);

    //Pregunta 1
    var pregunta = new Pregunta("Selecciona los 2 personajes con los que más te identifiques", "checkbox");
    pregunta.addRespuesta(["Darth Veader", 3]);
    pregunta.addRespuesta(["Look Skywalker", 5]);
    pregunta.addRespuesta(["Chewacca", 2]);
    pregunta.addRespuesta(["Leia Skywalker", 2]);
    pregunta.addRespuesta(["R2-D2", 1]);
    pregunta.addRespuesta(["Yoda", 4]);
    pregunta.addRespuesta(["Keylo Rent", 3]);
    pregunta.addOpcionConfiguracion(["maxOpSeleccionables", 2]);
    encuesta.addPre(pregunta);

    pregunta = new Pregunta("Tu verdadero papá aparece de la nada y te confiesa la cruel verdad, ¿qué haces?", "radio");
    pregunta.addRespuesta(["Me interesaría saber cómo es él, comprender su pasado y compartir su futuro.", 4]);
    pregunta.addRespuesta([" ¿Y hasta ahorita se aparece? Ay no, qué le pasa, que le den.", 3]);
    pregunta.addRespuesta(["Le preguntaría por qué no se acercó antes. Quizá le daría una segunda oportunidad.", 5]);
    pregunta.addRespuesta(["¿Mi verdadero papá? ¿Qué diablos es esto?", 2])
    pregunta.addOpcionConfiguracion(["maxOpSeleccionables", 1]);
    encuesta.addPreguntas(pregunta);

    pregunta = new Pregunta("¿Luchas por lo que quieres a pesar de las circunstancias?", "radio");
    pregunta.addRespuesta(["Lucho a pesar de las circunstancias y contra las personas. Lo consigo, porque lo consigo.", 2]);
    pregunta.addRespuesta(["Lucho por lo que quiero, hago todo por unir fuerzas y conquistar el mundo.", 1]);
    pregunta.addRespuesta(["Analizo las circunstancias, evalúo las posibilidades y actúo con pie firme.", 4]);
    pregunta.addRespuesta(["Preparo un Excel con todas las opciones y ya así, me lanzo al ruedo.", 3]);
    pregunta.addOpcionConfiguracion(["maxOpSeleccionables", 1]);
    encuesta.addPreguntas(pregunta);

    pregunta = new Pregunta("¿Has llegado a manipular a alguien por conseguir lo que quieres ?", "radio")
    pregunta.addRespuesta(["Pues sí, lo he hecho, ¿quién no ?", 3]);
    pregunta.addRespuesta(["Lo que hago es que les explico las bondades de lo que considero que es una genial idea." ,2]);
    pregunta.addRespuesta(["Soy un líder nato, no necesito manipular a nadie todos me siguen.", 5]);
    pregunta.addRespuesta(["Soy muy estructurado, la gente suele preguntarme cómo le hago para ser tan exitoso." ,4]);
    pregunta.addOpcionConfiguracion(["maxOpSeleccionables", 1]);
    encuesta.addPreguntas(pregunta);

    pregunta = new Pregunta("Si te ponen a cargo de un equipo de personas, ¿cómo eres ?","radio")
    pregunta.addRespuesta(["Soy muy enérgico, no soporto la indisciplina .",4]);
    pregunta.addRespuesta(["Los organizo por tipos de personalidad y les doy tareas según sus características.",5]);
    pregunta.addRespuesta(["Un tirano, pero eso sí, luego me lo agradecen",1])
    pregunta.addRespuesta(["Me gusta llevar la voz cantante, ellos saben que yo soy un buen jefe.",3]);
    pregunta.addOpcionConfiguracion(["maxOpSeleccionables", 1]);
    encuesta.addPreguntas(pregunta);

    function continuarEncuesta() {
        
        let contVerficados = 0;
        if (encuesta.preguntas[contPregregunta].tipo == "checkbox") {
            let cont = 0;
            let puntosASumar=0;
            console.log("h");
            for (let index = 0; index < encuesta.preguntas[contPregregunta].respuestas.length; index++) {
                let preg = document.getElementById(index);
                if (preg.checked) {
                    cont = cont + 1;
                    puntosASumar=0;
                }

            }
            console.log(cont);
            if (cont ==2) {
                contVerficados = contVerficados + 1;
            }else{
                alert("Selecciona " + encuesta.preguntas[contPregregunta].opcionesConfiguracion[1] + "opciones");
            }
        }
        
        if (contVerficados > 0) {
            contPregregunta=contPregregunta+1;
            mostrarPreguntas();
        }
        return false;
    }

    function mostrarPreguntas() {
        let form = document.createElement("form");
        form.id = "contendorPregunta";
        form.className = "container-md container-sm";
        let h3 = document.createElement("h3");
        h3.id = "h3Pregunta";
        h3.className = "h3 text-center mb-3 font-weight-normal";
        let enunciado = document.createTextNode(encuesta.preguntas[contPregregunta].enunciado);
        h3.appendChild(enunciado);
        form.appendChild(h3);
        for (let index = 0; index < encuesta.preguntas[contPregregunta].respuestas.length; index++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.value = encuesta.preguntas[contPregregunta].respuestas[index][0];
            input.type = encuesta.preguntas[contPregregunta].tipo;
            label.className = "form-control";
            label.id = "labe" + index;
            input.id = index;
            label.appendChild(input);
            let text = document.createTextNode(encuesta.preguntas[contPregregunta].respuestas[index][0]);
            label.appendChild(text);
            input.style.visibility = "none";
            form.appendChild(label);
        }
        button = document.createElement("button");
        button.innerHTML = "Continuar";
        button.addEventListener("click", continuarEncuesta);
        button.type = "button";
        button.className = "btn btn-lg btn-primary btn-block";
        form.appendChild(button);
        divContenedor.appendChild(form);
        contPregregunta++;
    }

    function ocultarMostrarFormulario() {
        let comprovadorEmail = /^(.+\@.+\..+)$/;
        let comprovadorCodigoPostal = /^\d{5}$/;
        let comprovadorFechaNacimiento = /^\d{4}\/\d{2}\/\d{2}$/;

        //Las siguientes variables se usan para controlar si se han pasado las validaciones correctamente
        let nombreCorrecto = false;
        let emailCorrecto = false;
        let codigoPostalCorrecto = false;
        let fechaNacimientoCorrecto = false;

        console.log(inputNombre.value);
        if (inputNombre.value == " ") {
            inputNombre.setCustomValidity('Este campo no puede estar vacio');
        } else {
            inputNombre.setCustomValidity('');
            nombreCorrecto = true;
        }

        if (inputEmail.value == "") {
            inputEmail.setCustomValidity('Este campo no puede estar vacio');
        } else if (comprovadorEmail.test(inputEmail.value) == false) {
            inputEmail.setCustomValidity('Escrive un email valido');
        } else {
            inputEmail.setCustomValidity('');
            emailCorrecto = true;
        }

        if (comprovadorCodigoPostal.test(inputCodigoPostal.value) == false) {
            inputCodigoPostal.setCustomValidity('Escrive un Codigo Postal valido');
        } else {
            inputCodigoPostal.setCustomValidity('');
            codigoPostalCorrecto = true;
        }

        console.log(inputFechaNacimiento.value);
        comprovadorFechaNacimiento.test(inputFechaNacimiento.value);
        if (comprovadorFechaNacimiento.test(inputFechaNacimiento.value) == false) {
            //CORREGIR CARAJO
            /*
             *
             *
             */
            fechaNacimientoCorrecto = true;
            inputFechaNacimiento.setCustomValidity('Escrive una Fecha de Nacimiento valida');
        } else {
            inputFechaNacimiento.setCustomValidity('');
            fechaNacimientoCorrecto = true;
        }

        /*
        console.log(nombreCorrecto);
        console.log(emailCorrecto);
        console.log(codigoPostalCorrecto);
        console.log(fechaNacimientoCorrecto);
        */

        if (nombreCorrecto == true && emailCorrecto == true && codigoPostalCorrecto == true && fechaNacimientoCorrecto == true) {
            pantallaInicio.style.display = "none";
            mostrarPreguntas();
        }

        return false;
    }

}