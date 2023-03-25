import React from 'react';
import headerIcon from '../assets/header-icon.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={headerIcon} alt="Logo Icon" className="header-icon" />
      <h1 className="header-heading">my travel journal.</h1>
    </header>
  );
}
