import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Social from '../../components/Social'

import h1 from '../../img/h1.jpg'
import h2 from '../../img/h2.jpg'
import h3 from '../../img/h3.jpg'

export default function Help() {


    return (
        <>

        <Header />

                <div className="container px-4 py-4" id="icon-grid">
                    <h2 className="pb-5 border-bottom text-center"><strong>Melhores Hotéis</strong></h2>
                </div>

            <div className="container pb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <div className="col">
                        <div className="card h-100 border shadow-lg">
                            <img src={h1} className="card-img-top" alt="Hotel 1" />
                            <div className="card-body">
                                <h5 className="card-title">Ikos Olivia</h5>
                                <p className="card-text">Gerakini, Grécia 1.</p>
                                <p className="card-text">3.953 avaliações</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 border shadow-lg">
                            <img src={h2} className="card-img-top" alt="Hotel 1" />
                            <div className="card-body">
                                <h5 className="card-title">Ikos Olivia 2</h5>
                                <p className="card-text">Gerakini, Grécia.</p>
                                <p className="card-text">3.953 avaliações</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 border shadow-lg">
                            <img src={h3} className="card-img-top" alt="Hotel 1" />
                            <div className="card-body">
                                <h5 className="card-title">Ikos Olivia 3</h5>
                                <p className="card-text">Gerakini, Grécia.</p>
                                <p className="card-text">3.953 avaliações</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 border shadow-lg">
                            <img src={h2} className="card-img-top" alt="Hotel 1" />
                            <div className="card-body">
                                <h5 className="card-title">Ikos Olivia</h5>
                                <p className="card-text">Gerakini, Grécia 1.</p>
                                <p className="card-text">3.953 avaliações</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 border shadow-lg">
                            <img src={h3} className="card-img-top" alt="Hotel 1" />
                            <div className="card-body">
                                <h5 className="card-title">Ikos Olivia 2</h5>
                                <p className="card-text">Gerakini, Grécia.</p>
                                <p className="card-text">3.953 avaliações</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 border shadow-lg">
                            <img src={h1} className="card-img-top" alt="Hotel 1" />
                            <div className="card-body">
                                <h5 className="card-title">Ikos Olivia 3</h5>
                                <p className="card-text">Gerakini, Grécia.</p>
                                <p className="card-text">3.953 avaliações</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <Social />
        <Footer />

        </>
    )
}