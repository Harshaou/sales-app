import { useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Form } from 'antd';
import InitialForm from './InitailForm';
import FinalForm from './FinalForm';

const Index = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(1);

  const handleFinish = (value) => {
    console.log(value);
    setStep(1);
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <div>
          <h1 className={styles.pageTitle}>Service Provider Details</h1>
          <InitialForm form={form} handleFinish={handleFinish} />
        </div>
      );
    }
    if (step === 1) {
      return (
        <div>
          <h1 className={styles.pageTitleThree}>Branches</h1>
          <FinalForm setStep={setStep} />
        </div>
      );
    }
  };

  return (
    <Main pageName="Onboard provider">
      <div className={styles.container}>
        <div className={styles.formContainer}>{renderStep()}</div>
      </div>
    </Main>
  );
};

export default Index;
