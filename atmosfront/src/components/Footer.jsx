import React from 'react'

import { Link } from 'react-router-dom'

export default function Footer() {


    return (
        <>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/">Inicio</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/Hoteis">Hotéis</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/Help">Suporte</Link></li>
                    <li className="nav-item"><Link className="nav-link px-2 text-muted" to="/Contact">Contato</Link></li>       
                </ul>
                <p className="text-center text-muted">© 2022 Eduardo Jr, Atmos Company</p>
            </footer>
        </>
    )
}