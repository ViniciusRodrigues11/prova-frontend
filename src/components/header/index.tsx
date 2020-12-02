import React from 'react'
import { FiList, FiFilePlus } from 'react-icons/fi'
import {Link} from 'react-router-dom'
import './index.css'

export const Header = () => (
    <header>
        <div style={{display: "flex", alignItems: "center"}}>
            <FiList />
            <Link to="/">Listar</Link>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
            <FiFilePlus />
            <Link to="/cad">Cadastrar</Link>
        </div>
    </header>
)