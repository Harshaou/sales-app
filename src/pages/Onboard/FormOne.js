/* eslint-disable quotes */
import { Form, Select, Input, Button } from 'antd';
import styles from './index.module.css';
const { Option } = Select;
const { TextArea } = Input;

import { UploadOutlined } from '@ant-design/icons';

const Links = ({ form, handleFinish }) => {
  //rules={[{ required: true }]}
  return (
    <Form form={form} onFinish={handleFinish}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Name of the service provider <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="name">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Service provider type <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="type">
            <Select size="large" initialvalues="lucy" onChange={() => console.log()}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Super admin name <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminName">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Super admin email <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminEmail">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>
            Contact Number <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="contactNumber">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabel}>Upload Logo</span>
          <Form.Item style={{ width: '100%' }} name="img">
            <Button size="large" style={{ width: '100%' }} icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Form.Item>
        </div>
      </div>

      <div>
        <span className={styles.formLabel}>
          {' '}
          Address <span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="address">
          <TextArea rows={4} placeholder="Address" />
        </Form.Item>

        <Form.Item style={{ float: 'right' }}>
          <Button size="middle" type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Links;
