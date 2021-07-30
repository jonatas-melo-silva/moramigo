import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import { useAuth } from '../../contexts/auth';
import { useInterest } from '../../contexts/interest';

import Link from 'next/link';

export function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { logout, user } = useAuth();
  const { listarPendentes } = useInterest();
  const onClickSair = () => {
    logout();
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
            <Link href="/usuario/[id]}" as={`/usuario/${user.id}`}>
              <a>
                <FontAwesomeIcon icon="user" /> Perfil
              </a>
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link href="/buscar/pessoas">
              <a>
                <FontAwesomeIcon icon="user-friends" /> Buscar Pessoas
              </a>
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link href="/interesses/solicitacoes">
              <a onClick={listarPendentes}>
                <FontAwesomeIcon icon="user-friends" /> Meus interesses
              </a>
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link href="/usuario/login">
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

  return (
    <li className={styles.navItem}>
      <div className={styles.imgButton} onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </li>
  );
}
