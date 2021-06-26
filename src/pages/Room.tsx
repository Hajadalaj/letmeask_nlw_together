import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg'
import { Button } from "../components/Button";
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss'

type RoomParams = {
    id: string;
}

export function Room(){

    const params = useParams<RoomParams>();
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={params.id} />
                </div>
            </header>

            <main>
                <div className="room-tittle">
                    <h1>Sala teste</h1>
                    <span>12</span>
                </div>
                <form>
                    <textarea 
                        placeholder="O que vc quer perguntar?" 
                    />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça login</button>.</span>
                        <Button type="submit">enviar pergunta</Button>
                    </div>
                </form>
            </main>

        </div>
    )
}