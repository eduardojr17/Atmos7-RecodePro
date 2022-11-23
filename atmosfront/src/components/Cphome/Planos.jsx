import React from 'react'


export default function Planos() {


    return (

        <>
            <div className="container my-5 pt-5 text-center ">
                <h1><strong>Adquira nossos Planos</strong></h1>
            </div>

            <div className="container">

                <div className="row mt-3 mb-3">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Individual</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">R$200<small className="text-muted fw-light">/</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Voo + Hotel</li>
                                    <li>Taxas Inclusas</li>
                                    <li>3 Diárias</li>
                                    <li>Pague em até 10x</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Contratar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Casal</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">R$400<small className="text-muted fw-light">/</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Voo + Hotel</li>
                                    <li>Taxas Inclusas</li>
                                    <li>3 Diárias</li>
                                    <li>Pague em até 10x</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Contratar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Família</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">R$700<small className="text-muted fw-light">/</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Voo + Hotel</li>
                                    <li>Taxas Inclusas</li>
                                    <li>3 Diárias</li>
                                    <li>Pague em até 10x</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Contratar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


         </>
    )
}