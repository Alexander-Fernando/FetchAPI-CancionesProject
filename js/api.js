import * as UI from './interfaz.js';

class API{
    constructor( artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
        this.consultarAPI(artista, cancion);
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        mostrarSpinner();
        fetch(url) 
            .then(respuesta => respuesta.json())
            .then(data => {
                limpiarHTML();
                if(data.lyrics){
                    const {lyrics } = data;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                    UI.divResultado.textContent = lyrics;
                }
            })
            .catch(error => {
                limpiarHTML();
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops....',
                    text: 'No se ha encontrado la canción. Verifique que la canción pertenezca al artista'
                })
            })
            
    }
}

export default API;

function mostrarSpinner(){
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');
    divSpinner.innerHTML = `
        <div class="dot1"></div>
        <div class="dot2"></div>
    `;
    UI.divMensajes.appendChild(divSpinner);
}

function limpiarHTML(){
    while(UI.divMensajes.firstChild){
        UI.divMensajes.firstChild.remove();
    }
    document.getElementById('artista').value = '';
    document.getElementById('cancion').value = '';
}