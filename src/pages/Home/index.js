import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router"; //para enviar dados de uma página para outra
import * as S from "./style"

function Home() {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState("");
  const [ erro, setErro ] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map(repository => repositoriesName.push(repository.name));
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false)
      history.push('/repositories')
    }).catch(erro => {
      setErro(true)}
    );
  }

  return (
    <>
      <S.Container>
        <S.Title>Usuário GitHub:</S.Title>
        <div>
          <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button> 
          { erro ? <S.ErrorMessage>Usuário não localizado, tente novamente</S.ErrorMessage> : " " }
        </div>
      </S.Container>
    </>
  );
}

export default Home;