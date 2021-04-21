import React from "react";

import styles from "./Botao.module.css";

import {useAuth} from "../../contexts/auth"
import { useInterest } from "../../contexts/interest";

export function Botao({User}) {
  const { user } = useAuth();
  const { solicitar, verificarSolicitacao, mensagem } = useInterest();

  verificarSolicitacao(User.id)

  const onClick = async () => {
    const body = await {
      origem: user.id,
      destino: User.id,
      aceito: false,
    };
    solicitar(body);

    //envio de email
    Email.send({
      SecureToken: "9e2682c6-a381-4bd3-8c00-2b0bcc556ad5",
      To: User.email,
      From: "moramigo.comunicacao@gmail.com",
      Subject: "Nova demonstração de interesse",
      Body:
        `<html><body><table width="100%" cellpadding="0" cellspacing="0" role="presentation"> <tr> <td align="center"> <table> <tr> <td width="570" cellpadding="0" cellspacing="0"> <table align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"> <tr> <td > <div> <h1>Olá, ` +
        User.nome +
        ` </h1> <p>Você recebeu uma nova demonstração de interesse. <strong>Acesse o site para ver suas novas interações.</strong> </p> <!-- Action --> <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation"> </table> <p>Atenciosamente, <br>Equipe moramigo </p> <!-- Sub copy --> <table role="presentation"> <tr> <td> <p>Encontrar uma galera bacana para dividir moradia não precisa ser uma tarefa difícil.</p> </td> </tr> </table> </div> </td> </tr> </table> </td> </tr> <tr> <td> <table align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"> <tr> <td align="center"> <p>&copy; 2021 moramigo. Todos os direitos reservados.</p> <p> [moramigo] <br>Natal <br>Rio Grande do Norte </p> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <style> @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); * { font-family: 'Alegreya', serif; } </style></body></html>`,
    }).then((message) => alert("Solicitação enviada!"));
  };

  if (mensagem === 'Amigos'){
    return (
      <button className={styles.button} id={styles.btnDemostrarInteresse}>
        {mensagem}
      </button>
    );
  }else if (mensagem === 'Solicitação pendente'){
    return (
      <button className={styles.button} id={styles.btnDemostrarInteresse}>
        {mensagem}
      </button>
    );
  }else if (mensagem === 'Solicitação enviada'){
    return (
      <button className={styles.button} id={styles.btnDemostrarInteresse}>
        {mensagem}
      </button>
    );
  } else {
    return (
      <button onClick={onClick} className={styles.button} id={styles.btnDemostrarInteresse}>
        Demostrar interesse
      </button>
    )
  }

}