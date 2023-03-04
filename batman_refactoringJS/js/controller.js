/**
 * Copyright (c) 2023 Emilia Suárez All rights reserved.
 * Contact: proomes23@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
class Controller
{
    constructor(View)
    {
        this.view = View;
        this.estadoLinterna = "apagado";
    }

    controlarBatman()
    {
        if(this.estadoLinterna == "apagado")
        {
            this.estadoLinterna = "encendido";
            this.controlarAudioLinterna()
            this.view.batman.classList.add("batman_activo");
        } else {
            this.estadoLinterna = "apagado";
            this.controlarAudioLinterna()
            this.view.batman.classList.remove("batman_activo");
        }
    }

    controlarAudioLinterna()
    {
        if(this.view.audioEncendido.paused)
        {
            this.view.audioClick.play();
            this.view.audioEncendido.play();
        } else {
            this.view.audioClick.play();
            this.view.audioEncendido.pause();
            this.view.audioEncendido.currentTime = 0;
        }
    }
}
export{Controller};