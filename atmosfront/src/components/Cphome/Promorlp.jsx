import React from 'react'
import heroes from '../../img/heroes.jpg'


export default function Promorlp() {

  const title = 'Promoções Relâmpago'
  const subtitle = 'Se você está procurando os melhores preços em passagens aéreas, pois saiba que temos todo mês uma promoção imperdível pra você. Fique de olho em nossas oportunidades e não deixe escapar. É por tempo limitado!.'

  return (
    <>
      <div className="container my-5">
        
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-5 border shadow-lg">

          <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
            
            <h1 className="display-4 fw-bold lh-1">{title}</h1>
            <p className="lead">{subtitle}</p>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Saiba Mais</a>
            </div>

          </div>

          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded-5" >
            <img className="rounded-5" width="450" src={heroes} alt="promo" />
          </div>

        </div>

      </div>


    </>
  )
}





