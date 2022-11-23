import React from 'react'
import byo from '../../img/byo.jpg'
import igu from '../../img/igu.jpg'
import sao from '../../img/sao.jpg'
import rio from '../../img/rio.jpg'



export default function Pdestinos() {

 
    return (

        <>

                <div className="container text-center mt-5 mb-3 pt-5 ">
                    <h1><strong>Principais Destinos</strong></h1>
                </div>

            <div className="container overflow-hidden shadow-lg rounded-3" >

                <div className="row row-cols-1 row-cols-md-2 g-4 p-5">

                    <div className="col ">
                        <div className="card">
                            <img className="card-img-top" src={rio} alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Rio de Janeiro</h5>
                                    <p className="card-text">O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema</p>
                                    <a href="#" className="btn btn-primary">Conhecer</a>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={sao} alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">São Paulo</h5>
                                    <p className="card-text">São Paulo está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica</p>
                                    <a href="#" className="btn btn-primary">Conhecer</a>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={igu} alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Foz do Iguaçu</h5>
                                    <p className="card-text">Foz do Iguaçu é a principal base para visitar as famosas Cataratas do Iguaçu, uma das maiores cachoeiras do mundo. </p>
                                    <a href="#" className="btn btn-primary">Conhecer</a>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={byo} alt="..."/>

                                <div className="card-body">
                                    <h5 className="card-title">Bonito</h5>
                                    <p className="card-text">Bonito é o centro de ecoturismo do Mato Grosso do Sul. A área circundante é conhecida pelos rios de água translúcida, </p>
                                    <a href="#" className="btn btn-primary">Conhecer</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}