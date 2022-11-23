import React from 'react'
import card from '../../img/card.jpg'


export default function Secard() {


    return (

        <>
            <div className="container mt-5">

                <div className="row align-items-md-stretch">

                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>É SEGURO COMPRAR NA ATMOS?</h2>
                            <p className="my-5">Além de resguardar todos os seus dados,
                                de acordo com a LGPD, nós usamos milhas para emitir suas passagens
                                diretamente com as companhias aéreas e em seguida disponibilizá-las
                                para você. Monitoramos e avisamos sobre possíveis alterações e oferecemos
                                todo no suporte em caso de dúvidas, remarcações e estornos. Com a gente é
                                tudo fácil, rápido e seguro.</p>
                            <button className="btn btn-outline-light" type="button">Saiba Mais</button>
                        </div>
                    </div>

                    <div className="col-md-6">

                        <div className="bg-light me-md-3 px-3 px-md-5 text-center overflow-hidden">

                            <div className="my-2 p-3">
                                <h2 className="display-5">Adquira nosso Cartão</h2>
                                <p className="lead">E ganhe vantagens exclusivas</p>
                            </div>

                            <div className="bg-image shadow-sm mx-auto " style={{
                                backgroundImage: `url(${card})`,
                                backgroundSize: 'cover',
                                
                                width: '90%',
                                height: '300px',
                                borderRadius: '21px 21px 0 0'
                                }}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}