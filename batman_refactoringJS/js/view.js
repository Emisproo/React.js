/**
 * Copyright (c) 2023 Emilia Suárez All rights reserved.
 * Contact: proomes23@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
import { Controller } from "./controller.js";
class View extends HTMLElement
{
    constructor()
    {
        super();

        this.innerController = new Controller(this);

        this.container = document.createElement("div");
        this.container.className = "container";
        this.container.classList.add("container");

        //este va dentro de container
        //contiene la imagen
        this.batman = document.createElement("div");
        this.batman.className = "batman";
        this.batman.classList.add("batman");
        this.batman.id = "batman";

        //crea boton, va dentro de batman
        this.bati_boton = document.createElement("div");
        this.bati_boton.className = "bati_boton";
        this.bati_boton.classList.add("bati_boton");
        this.bati_boton.id = "bati_boton";
        //this.bati_boton.type = "button";

        this.audioEncendido = document.createElement("audio");
        this.audioEncendido.id = "bati_encendido";
        this.audioEncendido.type = "audio/mpeg";
        this.audioEncendido.src = "./sound/batiEncendido.mp3";
        this.audioEncendido.setAttribute("loop", true);
       

        this.audioClick = document.createElement("audio");
        this.audioClick.id = "bati_click";
        this.audioClick.type = "audio/mpeg";
        this.audioClick.src = "./sound/batiClick.mp3";

        
    }

    connectedCallback()
    {
        document.body.appendChild(this.container);
        this.container.appendChild(this.batman);
        this.batman.appendChild(this.bati_boton);
        //agregar el audio al container, body, al boton o no se agrega?
        document.body.appendChild(this.audioEncendido);
        document.body.appendChild(this.audioClick);
        this.bati_boton.addEventListener('click', ()=> this.innerController.controlarBatman());

    }
}

customElements.define('x-view', View );
export{View};
