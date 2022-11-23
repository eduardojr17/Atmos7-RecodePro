import './App.css';
import { useEffect, useState } from 'react';

import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  // Objeto viagem
  const viagens = {
    idViagem : 0,
    origem : '',
    destino : '',
    dataIda : '',
    dataVolta : '',
    preco : ''
  }

  // useState
  const[btnCadastrar, setBtnCadastrar] = useState(true);
  const[viagem, setViagem] = useState([]);
  const [objViagens, setObjViagens] = useState(viagens);

  // useEffect - Faz a requisição com o backend
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setViagem(retorno_convertido));
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjViagens({...objViagens, [e.target.name]:e.target.value});
  }

  //Cadastrar Viagem
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body:JSON.stringify(objViagens),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      } 
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
        if(retorno_convertido.mensagem !== undefined){
          alert(retorno_convertido.mensagem);
        }else {
          setViagem([...viagem, retorno_convertido]);
          alert('Viagem cadastrada com Sucesso!');
          limparFormulario();
        }
    })
  }


//Alterar Viagem
const alterar = () => {
  fetch('http://localhost:8080/alterar', {
    method: 'put',
    body:JSON.stringify(objViagens),
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    } 
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido => {
    
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else {

            //Mensagem
            alert('Viagem alterada com Sucesso!');

           //Cópia do Vetor de Viagens
           let vetorTemp = [...viagem];

            //Índice
            let indice = vetorTemp.findIndex((v) =>{ 
        return v.idViagem === objViagens.idViagem;
        });


      //Remover Viagem do VetorTemp
      vetorTemp[indice] = objViagens.idViagem;

      //Atualizar vetor de viagens
      setViagem(vetorTemp);
      limparFormulario();
      }

  })
}


  //Remover Viagem
  const remover = () => {
    fetch('http://localhost:8080/remover/'+objViagens.idViagem, {
      method: 'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      } 
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      //mensagem de remoção
      alert(retorno_convertido.mensagem);

      //Cópia do Vetor de Viagens
      let vetorTemp = [...viagem];

      //Índice
      let indice = vetorTemp.findIndex((v) =>{ 
        return v.idViagem === objViagens.idViagem;
      });

      //Remover Viagem do VetorTemp
      vetorTemp.splice(indice, 1);

      //Atualizar vetor de viagens
      setViagem(vetorTemp);

      //Limpar Fomulario e trocar botões
      limparFormulario();
    })
  }


  //Limpar formulário
  const limparFormulario = () => {
    setObjViagens(viagens);
    setBtnCadastrar(true);
  }


  //Selecionar Viagem
  const selecionarViagem = (indice) => {
    setObjViagens(viagem[indice]);
    setBtnCadastrar(false);
  }


  //Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objViagens} cancelar={limparFormulario} remover={remover} alterar={alterar} />
      <Tabela vetor={viagem} selecionar={selecionarViagem} />
    </div>
  );
}

export default App;
