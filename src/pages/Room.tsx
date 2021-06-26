import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg'
import { Button } from "../components/Button";
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/room.scss'

type RoomParams = {
    id: string;
}

export function Room(){
    const {user} = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState('');

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();
        if(newQuestion.trim() === '') {
            return;
        }

        if(!user) {
            throw new Error('You must be logged in');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false,
        };
        await database.ref(`rooms/${roomId}/questions`).push(question);
        setNewQuestion('');
    }

    
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
                <form onSubmit={handleSendQuestion}>
                    <textarea 
                        placeholder="O que vc quer perguntar?" 
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça login</button>.</span>
                        <Button type="submit" disabled={!user}>enviar pergunta</Button>
                    </div>
                </form>
            </main>

        </div>
    )
}