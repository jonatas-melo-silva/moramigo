import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

import { memo } from "react";
import { useAuth } from "../../contexts/auth";
import { useInterest } from "../../contexts/interest";
import {Navbar, NavItem} from "./DropdownMenu"

import Link from "next/link";
import styles from "./Header.module.css";
import Image from 'next/image';


import {DropdownMenu} from './DropdownMenu';

 function Img(){
   return (
     <div>
      <Image src={'/img/imgPerfil.svg' }
          height={25}
          width={25}
      />
    </div>
   )
 }

export const Header = () => {
  console.log("Header");
  const { logado, logout, user } = useAuth();
  const { listarPendentes } = useInterest();

  const onClickSair = () => {
    logout();
  };


  return (
    <>
      <header className={styles.headerContainer}>
          <Navbar >
          <nav className={styles.headerContente}>
            <div className="logo">
              <Link href="/">
                <img src="/img/logo.svg" alt="MorAmigo" />
              </Link>
            </div>

            <div className={styles.navMenu}>
              <Link href="/sobrenos" className={styles.active}>
                <a>
                  {" "}
                  <FontAwesomeIcon icon="home" /> Sobre - Nós
                </a>
              </Link>
              <Link href="/buscar/pessoas">
                <a>
                  <FontAwesomeIcon icon="user-friends" /> Buscar Pessoas
                </a>
              </Link>

              {logado ? (

                  <Link href="/interesses/solicitacoes">
                    <a onClick={listarPendentes}>
                      <FontAwesomeIcon icon="user-friends" /> Meus interesses
                    </a>
                  </Link>

              ) : (
                <>

                </>
              )}
          </div>

              {logado ? (
                <>

                <div className={styles.contaPerfil}>
                <Link href="/usuario/[id]}" as={`/usuario/${user.id}`}>
                      <p>
                      Olá, {user.nome}

                        {/* <span>Ver perfil</span> */}

                      </p>
                    </Link>
                      {/* <NavItem/> */}
                      <NavItem icon={<Img />}>
                        <DropdownMenu></DropdownMenu>
                      </NavItem>

                </div>

                </>

              ):(
                <div className={styles.conta}>
                  <Link href="/usuario/login">
                  <a>
                    <FontAwesomeIcon icon="sign-in-alt" /> Entrar
                  </a>
                </Link>

                <Link href="/usuario/registrar">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon="file-alt" /> Cadastre-se
                  </a>
                </Link>
              </div>

              )}
        </nav>


        </Navbar>
      </header>
    </>
  );
};


export default memo(Header);

