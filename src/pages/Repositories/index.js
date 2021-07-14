import React, { useEffect, useState } from "react";
import * as S from "./style"
import { useHistory } from "react-router";


export default function Repositories() {
  const history = useHistory();
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

   return (
    <>  
        <S.Container>
          <S.Title>Repositórios:</S.Title>
          <S.List>
            { repositories.map(repository => {
                return (<S.List>{repository}</S.List>)
              })
            }
          </S.List> 
          <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    </>
  );
}

