import { Form, Select, Input, message, Upload, Button, Divider } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
import styles from './index.module.css';
import { UserAddOutlined } from '@ant-design/icons';

import { UploadOutlined } from '@ant-design/icons';

const Links = ({ form, handleFinish }) => {
  return (
    <Form form={form} onFinish={handleFinish}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>Branch Name</span>
          <Form.Item name="superAdminName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>
            Contact number <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminEmail" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>
            Name of Branch Admin <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminName" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>
            Email of Branch Admin <span style={{ color: '#f87d4e' }}>*</span>
          </span>
          <Form.Item name="superAdminEmail" rules={[{ required: true }]}>
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>
      </div>
      <div>
        <p style={{ textDecoration: 'underline', color: 'gray', marginBottom: 13 }}>
          Payment details
        </p>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ width: '50%' }}>
            <span className={styles.formLabell}>
              Account number <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="superAdminName" rules={[{ required: true }]}>
              <Input size="large" placeholder="Provider name" className="ant-custom-input" />
            </Form.Item>
          </div>

          <div style={{ width: '50%' }}>
            <span className={styles.formLabell}>
              Name of beneficiary <span style={{ color: '#f87d4e' }}>*</span>
            </span>
            <Form.Item name="superAdminEmail" rules={[{ required: true }]}>
              <Input size="large" placeholder="Provider name" className="ant-custom-input" />
            </Form.Item>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 13,
          justifyContent: 'space-between',
        }}
      >
        <p style={{ textDecoration: 'underline', marginBottom: 0, color: 'gray' }}>Add Users</p>
        {/* <Button type="" icon={<UserAddOutlined />} size="small" /> */}
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>User Email address</span>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className={styles.formLabell}>Role</span>
          <Form.Item name="type">
            <Select initialvalues="lucy" onChange={() => console.log()}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>
        </div>
      </div>

      <div>
        <span className="form-label">
          Address <span style={{ color: '#f87d4e' }}>*</span>
        </span>
        <Form.Item name="address">
          <TextArea rows={4} placeholder="Address" required />
        </Form.Item>

        <Form.Item style={{ float: 'right' }}>
          <Button size="middle" type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Links;
