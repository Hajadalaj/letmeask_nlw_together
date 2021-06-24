import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'

import '../styles/auth.scss'

export function NewRoom() {
    const {user} = useContext(AuthContext)
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <h2>Criar nova sala</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o nome da sala"
                        />
                        <Button type="submit">
                            Crias sala
                        </Button>
                    </form>
                    <p>Deseja entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}