import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {url} from '../helpers/url';
import '../styles/ListaCastillos.css';

export const ListaCastillos = () => {

    const [castillos, setCastillos] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
            axios.get(url)
            .then(response => {
                setCastillos(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
         axios.delete(url+id)
         .then(response => {
             getData();
           console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <h1 className="titulo">Lista de Castillos</h1>
            <table className="tabla">
                <thead>
                    <tr className='tabla-header'>
                        <th>Imagen</th>
                        <th>Nombre Castillo</th>
                        <th>Ubicacion</th>
                        <th>Descripcion</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         castillos.map(element => (
                             <tr key={element.id} className="elemento">
                                 <td><img src={element.imagen} width="100" height="100" alt=""/></td>
                                 <td><b>{element.nombre}</b></td>
                                 <td>{element.ubicacion}</td>
                                 <td>{element.descripcion}</td>                                 
                                 <td><button className="btnDelete" onClick={() => deleteData(element.id)}>Borrar</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
            </table>
        </div>
    )
}
