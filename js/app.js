import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);
function buscarCancion(e){
    e.preventDefault();

    const artista = document.getElementById('artista').value;
    const cancion = document.getElementById('cancion').value;

    if(artista === '' || cancion === ''){
        Swal.fire({
            icon: 'error',
            title: 'Ooops...',
            text: 'Todos los campos son obligatorios!'
        });

        return;
    }

    const busqueda = new API(artista, cancion);
}
