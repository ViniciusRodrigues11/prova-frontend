import React, { useEffect, useState } from 'react'
import api from '../../services/api'


import './home.css'

interface DataInterface {
    id: number;
    codigo: string;
    descricao: string;
    valorVenda: string;
}

const Home = () => {

    const [data, setData] = useState<DataInterface[]>()

    useEffect(() => {
        api.get('/products').then(function (response) {
            setData(response.data)
        })
    }, [])

    console.log(data)

    if (!data) {
        return (
            <p>carregando</p>
        );
    }

    return (
        <>
            <div className="container">
                <h1>Lista de produtos</h1>

                <div className="products">
                    <ul>
                        <li>
                            <p className="description" style={{ fontWeight: "bold" }}>Descrição</p>
                            <p className="codigo" style={{ fontWeight: "bold" }}>Código</p>
                            <p className="valor" style={{ fontWeight: "bold" }}>Valor</p>
                        </li>
                        {data.map(dat => (
                            <li key={dat.id}>
                                <p className="description">{dat.descricao}</p>
                                <p className="codigo">{dat.codigo}</p>
                                <p className="valor">R${dat.valorVenda}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Home;