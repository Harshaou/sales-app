import { useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Steps } from 'antd';
import { Form } from 'antd';
import FormTypeOne from './FormOne';
import FormTypeTwo from './FormTwo';
import FormThree from './FormThree';

const Index = () => {
  const { Step } = Steps;
  const [form] = Form.useForm();
  const [step, setStep] = useState(0);

  const handleFinish = (values) => {
    setStep(1);
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <div>
          <h1 className={styles.pageTitle}>Service Provider Details</h1>
          <FormTypeOne form={form} handleFinish={handleFinish} />
        </div>
      );
    }
    if (step === 1) {
      return (
        <div>
          <h1 className={styles.pageTitle}>Service Details</h1>
          <FormTypeTwo setStep={setStep} />
        </div>
      );
    }
    if (step === 2) {
      return (
        <div>
          <h1 className={styles.pageTitleThree}>Branches</h1>
          <FormThree setStep={setStep} />
        </div>
      );
    }
  };

  return (
    <Main pageName="Onboard provider">
      <div className={styles.container}>
        <div className={styles.formContainer}>{renderStep()}</div>
        {/* <div style={{ margin: 'auto' }}>
          <Steps direction="vertical" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div> */}
      </div>
    </Main>
  );
};

export default Index;
