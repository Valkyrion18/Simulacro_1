
import React from 'react'
import  {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Formulario } from '../components/Formulario';
import { ListaCastillos } from '../components/ListaCastillos';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route exact path="/Registro" element={<Formulario/>}/>
                    <Route exact path="/Listar" element={<ListaCastillos/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

