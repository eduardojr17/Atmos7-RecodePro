import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Social from '../../components/Social'

export default function Help() {


    return (
        <>

            <Header />

            <div className="container px-4 py-4" id="icon-grid">
                <h2 className="pb-5 border-bottom text-center"><strong>Suporte</strong></h2>
            </div>

            <div className="container" id="icon-grid">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Reembolso e Cobrança</h4>
                            <p>Saiba aqui Informações sobre faturamento, reembolso e sobre como são as cobranças</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Informação útil para viagem</h4>
                            <p>Confira aqui tudo que é importante para sua viagem não sair do planejamento</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Incoveniente em destino</h4>
                            <p>Algo não saiu como panejado? Saiba o que fazer e quem procurar nesses momentos</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Status da minha reserva</h4>
                            <p>Encontre tudo o que você pode fazer com sua reserva e suas solicitações.</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Alterações e Cancelamentos</h4>
                            <p>Veja como fazer alterações em sua reserva e saiba tudo sobre cancelamentos.</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Segurança e Privacidade</h4>
                            <p>Veja como fazer alterações em sua reserva e saiba tudo sobre cancelamentos.</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Minha Bagagem e check-in</h4>
                            <p>Confira informações sobre assentos nos voos, limite de bagagem e Horário de Check-in</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <div>
                            <h4 className="fw-bold mb-0">Informação sobre coronavírus</h4>
                            <p>Confira as opções para alterar ou cancelar sua reserva de acordo com a sua situação.</p>
                            <button type="button" className="btn btn-outline-dark me-2">Saiba mais</button>
                        </div>
                    </div>

                </div>
            </div>

            <Social />
            <Footer />

        </>
    )
}