import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaPowerOff,
  FaCircle,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());

    history.push('/');
  };
  return (
    <Nav>
      <Link to="/" aria-label="Página inicial">
        <FaHome size={24} />
      </Link>

      <Link to="/register" aria-label="Entrar">
        <FaUserAlt size={24} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/login" aria-label="Sair">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login" aria-label="Perfil">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
    </Nav>
  );
}
