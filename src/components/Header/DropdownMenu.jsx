import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';

import { useAuth } from '../../contexts/AuthUserContext';
import { useInterest } from '../../contexts/interest';
import { encodeId } from '../../libs';

import styles from './Dropdown.module.css';

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { authUser, signOut } = useAuth();

  const { listarPendentes } = useInterest();

  const formattedName = name => name.replaceAll('-', ' ');

  const onClickSair = () => {
    signOut();
  };

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href=""
        className={styles.menuItem}
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className={styles.iconButton}>{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames={styles.menuPrimary}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menuDropdown}>
          <DropdownItem>
            <Link
              href="/usuario/[slug]/"
              as={`/usuario/${formattedName(authUser.name)}-${encodeId(
                authUser.id
              )}/`}
            >
              <a>
                <FontAwesomeIcon icon="user" /> Perfil
              </a>
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link href="/buscarpessoas/" as={'/buscarpessoas/'}>
              <a>
                <FontAwesomeIcon icon="user-friends" /> Buscar Pessoas
              </a>
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link
              href="/interesses/solicitacoes/"
              as={'/interesses/solicitacoes/'}
            >
              <a onClick={listarPendentes}>
                <FontAwesomeIcon icon="user-friends" /> Meus interesses
              </a>
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link href="/login/">
              <a onClick={onClickSair}>
                <FontAwesomeIcon icon="sign-out-alt" />
                Sair
              </a>
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export function Navbar(props) {
  return (
    <nav className={styles.navbarDropdown}>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  );
}
// abrir o Dropdown
export function NavItem(props) {
  const [open, setOpen] = useState(false);
  const { authUser } = useAuth();

  return (
    <li className={styles.navItem}>
      <div className={styles.imgButton} onClick={() => setOpen(!open)}>
        {authUser.avatar ? (
          <img src={`${authUser.avatar}`} alt="Avatar perfil"></img>
        ) : (
          <img src="/img/pessoa1.svg" alt="Avatar perfil"></img>
        )}
      </div>

      {open && props.children}
    </li>
  );
}
