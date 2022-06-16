import { Form, Select, Input, message, Upload, Button } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

import { UploadOutlined } from '@ant-design/icons';

const Links = ({ form, handleFinish }) => {
  //rules={[{ required: true }]}
  return (
    <Form form={form} onFinish={handleFinish}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className="form-label ">Name of the service provider</span>
          <Form.Item name="name">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className="form-label ">Service provider type</span>
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
          <span className="form-label ">Super admin name</span>
          <Form.Item name="superAdminName">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className="form-label ">Super admin email</span>
          <Form.Item name="superAdminEmail">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          <span className="form-label ">Contact Number</span>
          <Form.Item name="contactNumber">
            <Input size="large" placeholder="Provider name" className="ant-custom-input" />
          </Form.Item>
        </div>

        <div style={{ width: '50%' }}>
          <span className="form-label ">Upload Logo</span>
          <Form.Item style={{ width: '100%' }} name="img">
            <Button size="large" style={{ width: '100%' }} icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Form.Item>
        </div>
      </div>

      <div>
        <span className="form-label">Address </span>
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
