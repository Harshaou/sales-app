import React from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import Table from './Table';

const Index = () => {
  const onSearch = (value) => console.log(value);

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  return (
    <Main>
      <div className={styles.container}>
        <div className={styles.topMenu}>
          {/* <input className={styles.search} /> */}
          <Search
            size="large"
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            allowClear
            style={{ width: 304 }}
          />

          <div className={styles.addBox}>
            <img src="/icons/plusSign.webp" style={{ height: 35 }} alt="" />
            <div className={styles.whiteBox}>New Provider</div>
          </div>
        </div>
        <Table />
      </div>
    </Main>
  );
};

export default Index;
