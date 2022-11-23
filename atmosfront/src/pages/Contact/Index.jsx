import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Contact() {

  const [form, setForm]=useState({"nome":"", "cpf":"", "email":"",  "telefone":""})

  const handlFormChange=(e)=>{

    if(e.target.getAttribute('name')=='fname'){
      setForm({"nome":e.target.value,"cpf":form.cpf, "email":form.email, "telefone":form.telefone})

    } else 
    if(e.target.getAttribute('name')=='fcpf'){
      setForm({"nome":form.nome,"cpf":e.target.value, "email":form.email, "telefone":form.telefone})

    } else 
    if (e.target.getAttribute('name')=='femail'){
      setForm({"nome":form.nome,"cpf":form.cpf, "email":e.target.value, "telefone":form.telefone})

    } else 
    if (e.target.getAttribute('name')=='ftelefone'){
      setForm({"nome":form.nome,"cpf":form.cpf, "email":form.email, "telefone":e.target.value})
    }
  }
  
  const [motivo, setMotivo] = useState('')
  const [mensagem, setMensagem] = useState('')

  return (
    <>
      <Header />

      <div className="container px-4 py-4" id="icon-grid">
        <h2 className="pb-5 border-bottom text-center"><strong>Fale Conosco</strong></h2>
      </div>

      <div className="container py-lg-5 px-lg-5 rounded-5 border shadow-lg">
        <form className="row g-3 py-5 px-5">

          <div className="col-md-6">
            <label for="inputFullName" className="form-label">Nome</label>
            <input type="text" name="fname" value={form.nome} onChange={(e)=>handlFormChange(e)}
            className="form-control" placeholder="Nome e Sobrenome" aria-label="Nome e Sobrenome" />
          </div>

          <div className="col-md-6">
            <label for="inputCPF" className="form-label">CPF</label>
            <input type="text" name="fcpf" value={form.cpf} onChange={(e)=>handlFormChange(e)}
            className="form-control" placeholder="CPF" aria-label="CPF"/>
          </div>

          <div className="col-md-6">
            <label for="inputEmail" className="form-label">Email</label>
            <input type="email" name="femail" value={form.email} onChange={(e)=>handlFormChange(e)}
            className="form-control" placeholder="Email" id="inputEmail"/>
          </div>

          <div className="col-md-6">
            <label for="inputTel" className="form-label">Telefone</label>
            <input type="tel" name="ftelefone" value={form.telefone} onChange={(e)=>handlFormChange(e)}
            className="form-control" placeholder="Telefone" id="phone"/>
          </div>

          <div className="col-md-4">
            <select value={motivo} onChange={(e) => setMotivo(e.target.value)} id="inputState" className="form-select">
              <option selected>Selecione o Motivo...</option>
              <option value="Reclamações">Reclamações</option>
              <option value="Elogios">Elogios</option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Suporte">Suporte</option>
              <option value="Outro">Outro motivo</option>
            </select>
          </div>

          <div className="form-floating">
            <textarea className="form-control" placeholder="Escreva aqui sua mensagem"
              style={{ height: '100px' }}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              id="floatingTextarea2">
            </textarea>
            <label for="floatingTextarea2">Comentário</label>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>

        </form>
      </div>

      <div className="container py-5">
        <div className="container px-4 py-4" id="icon-grid">
          <h3 className="pb-3 border-bottom"><strong>Dados Digitados</strong></h3>


          <p><b>NOME:</b> {form.nome}</p>
          <p><b>CPF:</b> {form.cpf}</p>
          <p><b>EMAIL:</b> {form.email}</p>
          <p><b>TEL:</b> {form.telefone}</p>

          <p><b>MOTIVO:</b> {motivo}</p>
          <p><b>MENSAGEM:</b> {mensagem}</p>

        </div>
      </div>

      <Footer />
    </>
  )
}