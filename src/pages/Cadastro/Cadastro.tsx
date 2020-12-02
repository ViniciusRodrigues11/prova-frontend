import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

import './Cadastro.css'

const Cadastro = () => {

  const history = useHistory();

  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState('');
  const [profundidade, setProfundidade] = useState('');
  const [peso, setPeso] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [valorVenda, setValorVenda] = useState('');


  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      descricao,
      codigo,
      largura: Number(largura),
      altura: Number(altura),
      profundidade: Number(profundidade),
      peso: Number(peso),
      valorCompra: Number(valorCompra),
      valorVenda: Number(valorVenda)
    }

    await api.post('/products', data)

    history.push('/')
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Descrição</p>
          <input type="text" value={descricao} onChange={event => setDescricao(event.target.value)} name="descricao" id="descricao" />
        </div>
        <div>
          <p>Código</p>
          <input type="text" value={codigo} onChange={event => setCodigo(event.target.value)} name="codigo" id="codigo" />
        </div>
        <div>
          <p>Largura</p>
          <input type="text" value={largura} onChange={event => setLargura(event.target.value)} name="largura" id="largura" />
        </div>
        <div>
          <p>Altura</p>
          <input type="number" onChange={event => setAltura(event.target.value)} value={altura} name="altura" id="altura" />
        </div>
        <div>
          <p>Profundidade</p>
          <input type="number" onChange={event => setProfundidade(event.target.value)} value={profundidade} name="profundidade" id="profundidade" />
        </div>
        <div>
          <p>Peso</p>
          <input type="number" onChange={event => setPeso(event.target.value)} value={peso} name="peso" id="peso" />
        </div>
        <div>
          <p>Valor de compra</p>
          <input type="number" onChange={event => setValorCompra(event.target.value)} value={valorCompra} name="valorCompra" id="valorCompra" />
        </div>
        <div>
          <p>Valor de venda</p>
          <input type="number" onChange={event => setValorVenda(event.target.value)} value={valorVenda} name="valorVenda" id="valorVenda" />
        </div>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastro