import React, { useState, memo } from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);
import { fas } from '@fortawesome/free-solid-svg-icons';

import { useInterest } from '../../contexts/interest';
import { useAuth } from '../../contexts/AuthUserContext';
import { encodeId } from '../../libs';

import { Navbar, NavItem } from './DropdownMenu';
import { DropdownMenu } from './DropdownMenu';

import styles from './Header.module.css';

export const Header = () => {
  const { authUser, signOut } = useAuth();
  const { listarPendentes } = useInterest();

  const formattedName = name => name.replaceAll('-', ' ');

  const onClickSair = () => {
    signOut();
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Navbar>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/" onClick={closeMobileMenu}>
              <img src="/img/logo.svg" alt="MorAmigo" />
            </Link>
          </div>

          <div className={styles.menuIcon} onClick={handleClick}>
            <li className={styles.navItem}>
              <div>
                {click ? (
                  <FontAwesomeIcon icon="times" className={styles.icon} />
                ) : (
                  <FontAwesomeIcon icon="bars" className={styles.icon} />
                )}
              </div>
            </li>
          </div>

          <ul
            className={
              click
                ? `${styles.navMenu}  ${styles.active}`
                : `  ${styles.navMenu}`
            }
          >
            {authUser && (
              <li className={styles.navItem}>
                <div className={styles.buttomClose}>
                  <Link href="/login/">
                    <a onClick={onClickSair}>
                      <FontAwesomeIcon icon="sign-out-alt" />
                      Sair
                    </a>
                  </Link>
                </div>
              </li>
            )}

            <li className={styles.navItem}>
              <Link
                href="/sobrenos/"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                <a>
                  <FontAwesomeIcon icon="home" /> Sobre Nós
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/buscarpessoas/"
                as={'/buscarpessoas/'}
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                <a data-cy="buscar-pessoas-link">
                  <FontAwesomeIcon icon="user-friends" /> Buscar Pessoas
                </a>
              </Link>
            </li>
            {authUser && (
              <li className={styles.navItem}>
                <Link
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                  href="/interesses/solicitacoes/"
                  as={'/interesses/solicitacoes/'}
                >
                  <a data-cy="meus-interesses-link" onClick={listarPendentes}>
                    <FontAwesomeIcon icon="user-friends" /> Meus interesses
                  </a>
                </Link>
              </li>
            )}
            {authUser ? (
              <>
                <li>
                  <div className={styles.conta}>
                    <Link
                      className={styles.link}
                      href="/usuario/[slug]/"
                      as={`/usuario/${formattedName(authUser.name)}-${encodeId(
                        authUser.id
                      )}/`}
                    >
                      <p>Olá, {authUser.name}</p>
                    </Link>

                    <NavItem>
                      <DropdownMenu></DropdownMenu>
                    </NavItem>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className={styles.navItem}>
                  <Link
                    className={styles.navLinks}
                    onClick={closeMobileMenu}
                    href="/login/"
                  >
                    <a data-cy="link-entrar">
                      <FontAwesomeIcon icon="sign-in-alt" /> Entrar
                    </a>
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    className={styles.navLinks}
                    onClick={closeMobileMenu}
                    href="/cadastrese/"
                  >
                    <a>
                      <FontAwesomeIcon icon="file-alt" /> Cadastre-se
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Navbar>
    </>
  );
};

export default memo(Header);
