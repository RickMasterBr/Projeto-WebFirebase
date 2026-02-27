import { useState } from "react";
import "./Contato.css";

export const Contato = ({categoria}) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            alert ("Mensagem enviada com sucesso!")

            setNome("");
            setEmail("");
            setMensagem("");

        } catch (error) {
            console.error("Erro ao enviar fomrulário:", error);
        }
    };

    return (
        <div className="contato">
            <div>
                <h2>Voce pode me enviar uma mensagem!</h2>
                <p>Preencha seu nome, seu email e escreva a mensagem que deseja enviar para mim.</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome: </label>
                        <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Seu Email</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="exemplo@gmail.com"
                        />
                        <div>
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea
                            id="mensagem"
                            name="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );

}