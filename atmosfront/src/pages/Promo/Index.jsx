import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import portoseguro from '../../img/portoseguro.webp'
import saomiguel from '../../img/saomiguel.webp'
import curacao from '../../img/curacao.webp'

export default function Promo() {

  return (
    <>
      <Header />

      <div className="container px-4 py-4" id="icon-grid">
        <h2 className="pb-5 border-bottom text-center"><strong>Promoções Imperdíveis</strong></h2>
      </div>

      <div className="container pb-5">

        <div className="card-group">

          <div className="card">
            <img className="card-img-top" src={portoseguro} alt="Porto Seguro" />
            <div className="card-body">
              <h5 className="card-title">Porto Seguro</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>A partir de <s>R$ 799</s></p>
              <p><strong>R$ 599</strong></p>
              <button type="button" className="btn btn-outline-primary btn-sm">Aproveitar agora!</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Promoção encerra em 4 dias</small>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={saomiguel} alt="São Miguel" />
            <div className="card-body">
              <h5 className="card-title">São Miguel</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>A partir de <s>R$ 699</s></p>
              <p><strong>R$ 499</strong></p>
              <button type="button" className="btn btn-outline-primary btn-sm">Aproveitar agora!</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Promoção encerra em 4 dias</small>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={curacao} alt="Curação" />
            <div className="card-body">
              <h5 className="card-title">Curação</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>A partir de <s>R$ 699</s></p>
              <p><strong>R$ 499</strong></p>
              <button type="button" className="btn btn-outline-primary btn-sm">Aproveitar agora!</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Promoção encerra em 4 dias</small>
            </div>
          </div>

        </div>
      </div>

      <div className="container pb-5">
        <div className="card-group">

          <div className="card">
            <img className="card-img-top" src={portoseguro} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Porto Seguro</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>A partir de <s>R$ 699</s></p>
              <p><strong>R$ 499</strong></p>
              <button type="button" className="btn btn-outline-primary btn-sm">Aproveitar agora!</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Promoção encerra em 4 dias</small>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={saomiguel} alt="..." />
            <div className="card-body">
              <h5 className="card-title">São Miguel</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>A partir de <s>R$ 699</s></p>
              <p><strong>R$ 499</strong></p>
              <button type="button" className="btn btn-outline-primary btn-sm">Aproveitar agora!</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Promoção encerra em 4 dias</small>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={curacao} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Curação</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p>A partir de <s>R$ 699</s></p>
              <p><strong>R$ 499</strong></p>
              <button type="button" className="btn btn-outline-primary btn-sm">Aproveitar agora!</button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Promoção encerra em 4 dias</small>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}