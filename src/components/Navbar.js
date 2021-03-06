import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="">Inicio</Link>
                <Link className="link" to="/Registro">Registrar</Link>
                <Link className="link" to="/Listar">Lista Castillos</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
