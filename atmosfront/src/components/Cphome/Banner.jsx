import React from 'react'
import logo1 from '../../img/logo1.png'
import bg from '../../img/bg.jpg'

export default function Banner() {

    const title='Atmos7'
    const subtitle='Fazendo de cada momento algo inesquecível...'
    
    return (
        <>
            <section className="text-center">
                <div style={{ backgroundImage: `url(${bg})`,
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              height:'70vh'
                            }}>
                    
                    <div className="align-middle" mt-5 pt-5>
                        <img className=" mt-5 mb-2 mx-3" width="72" height="58" src={logo1} alt="logo"/>
                        <h1 className="display-5 fw-bold mt-1">{title}</h1>
                        <p className="lead mt-2 mb-4">{subtitle}</p>    
                    </div>
                </div>   
            </section>
        </>
    )
}



