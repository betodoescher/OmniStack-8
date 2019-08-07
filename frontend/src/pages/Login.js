import React from 'react'
import './Login.css'

import logo from '../assets/logo.svg'

export default function Login() {

    // const [username, setUsername] = useState()

    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário do GitHub"
                    // value={username}
                    // onChange={ e }
                 />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
  }  