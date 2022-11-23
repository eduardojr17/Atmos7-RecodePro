import React from 'react'
import logo1 from '../img/logo1.png'

import { Link } from 'react-router-dom'


export default function Header() {


    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="mx-3" width="38" height="30" src={logo1} alt="logo"/>
                    <strong><span className="fs-4">Atmos</span></strong>
                </a>

                <div>
                    <nav>
                        <ul className="nav nav-pills">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Incio</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Promo">Promoção</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Travel">Destinos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Contact">Contato</Link></li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )
}