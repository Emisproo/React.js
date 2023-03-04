/**
 * Copyright (c) 2023 Emilia Suárez All rights reserved.
 * Contact: proomes23@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/
import { View } from "./view.js";

function main(){
    let view = new View();
    document.body.appendChild(view);

}

window.addEventListener('load', main)
{
    alert('cargado');
}