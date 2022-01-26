import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/FormularioCastillos.css';

export const Formulario = () => {

    const [castillo, setCastillo] = useState({
        nombre: '',
        ubicacion: '',
        descripcion: '',
        imagen: ''
    })

    const {nombre, ubicacion, descripcion, imagen} = castillo;

    const postData = () => {
         axios.post(url,castillo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    const handleChanged = ({target}) => {
        setCastillo({
          ...castillo,
          [target.name]: target.value
        })    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            castillo.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Ingreso de un nuevo Castillo</h2>
           <hr/>
               <div>
                   <label>Nombre del Castillo</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Ubicacion del Castillo</label>
                   <input id="inputUbicacion" name="ubicacion" value={ubicacion} onChange={handleChanged}/>
               </div>
               <div className='descripcion-container'>
                   <label>Descripcion</label>
                   <textarea id="inputDescripcion" name="descripcion" rows="10" cols="40" value={descripcion} onChange={handleChanged}/>                    
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen} onChange={handleFileChange}/>                    
               </div>

               <div>
                   <button className="btnSubmit" onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
