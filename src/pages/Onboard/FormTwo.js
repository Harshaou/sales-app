import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const App = ({ setStep }) => (
  <div>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Dragger>
    <div style={{ float: 'right', display: 'flex', gap: 15, marginTop: 20 }}>
      <Button onClick={() => setStep(0)} size="middle" type="dashed" htmlType="submit">
        Prev
      </Button>
      <Button onClick={() => setStep(2)} size="middle" type="primary" htmlType="submit">
        Next
      </Button>
    </div>
  </div>
);

export default App;
