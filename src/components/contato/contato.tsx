import React, { useState } from 'react';
import "./contato.css";

const Contato: React.FC = () => {
    const [toMail, setToMail] = useState('');
    const [content, setContent] = useState('');

    function handleMail() { 

        fetch('/api', {
            method: 'POST',
            headers: {
                'Authorization': ` Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5NzYyNDQ4MzkzODAxNTY3OTIwIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJqYWxlaXRlQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkJhTTVUV1A5LVNybXQ3T283Y1NGQkEiLCJuYmYiOjE3MzIxMjUyMTAsImlhdCI6MTczMjEyNTUxMCwiZXhwIjoxNzMyMTI5MTEwLCJqdGkiOiI3OGNlNzdiNTI2Y2ExYjgxZmMxN2Y2MmZjOTIzOTc1MThjY2Y5YTI3In0.Qv_zvTxIpyxfira3-Sty_k6QqHrsuFco_pnr67JRyH8mKSEWRhS8k1VojH5DgbNnaql8Tc04InIi4uAySH4H7Eo25bOZ9e0xqDQ1-HjqPsfWqIBsdXK_WWM_VWz69GxeuZ_xIdd-QNF0UIxFRT5SrqiC9VSPJui7jWevsRMucWQXTBA3b5ryREYBoMXuWXFuZSAKnCpFoAFlJkr4BN_U1uA21pe3IGinECdhZ8TlqZAH2KhcqlWmB7lEP7H9F9ZRlHaFpoOGXGhOrQHlCDW6tEBBMxFN3MORhe2vSYYiXBtXvBAKrwuuaCVj6Hlnlo-0yVBLKxMaDrU4dknyk9hCxw`, // Insira seu token de autenticação aqui
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                toMail: toMail,
                content: content
            })
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => { throw new Error(err.message); });
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Erro ao enviar:', error));
    }

    return (
        <section className="contato">
            <header>
                <span>
                    <p className="desktop-only">Envie sua dúvida</p>
                    <h2>Entre em contato</h2>
                </span>
                <p>
                    Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.
                </p>
            </header>
            <section className="contato-form">
                <div>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={toMail}
                        onChange={(e) => setToMail(e.target.value)}
                    />
                    <textarea
                        placeholder="Motivo do contato"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button onClick={handleMail}>Enviar</button>
                </div>
            </section>
        </section>
    );
};

export default Contato;
