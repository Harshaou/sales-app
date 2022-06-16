/* eslint-disable react/jsx-key */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './layout.module.css';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineLogout, AiOutlineUnorderedList } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { BsBuilding } from 'react-icons/bs';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <img src="icons/logo.png" className={styles.logo} />
      <div className={styles.links}>
        <Link to={'/'} className={styles.linkItem}>
          <MdOutlineDashboard className={styles.icons} />
          <p>Dashboard</p>
        </Link>
        <Link to={'/onboard'} className={styles.linkItem}>
          <GrAddCircle size={22} />
          <p>Onboard</p>
        </Link>
        <Link to={'/providers'} className={styles.linkItem}>
          <BsBuilding size={22} />
          <p>Provders</p>
        </Link>
        <Link to={'/'} className={styles.linkItem}>
          <AiOutlineLogout size={22} />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
