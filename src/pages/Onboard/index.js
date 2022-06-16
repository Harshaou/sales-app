import { useState } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
// import { Steps } from 'antd';
import { Form } from 'antd';
import FormTypeOne from './FormOne';
import FormTypeTwo from './FormTwo';
import FormThree from './FormThree';

const Index = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(0);

  const handleFinish = (values) => {
    setStep(1);
  };

  const renderStep = () => {
    if (step === 0) {
      return <FormTypeOne form={form} handleFinish={handleFinish} />;
    }
    if (step === 1) {
      return <FormTypeTwo setStep={setStep} />;
    }
    if (step === 2) {
      return <FormThree setStep={setStep} />;
    }
  };

  return (
    <Main>
      <div className={styles.container}>
        <div className={styles.formContainer}>{renderStep()}</div>
      </div>
    </Main>
  );
};

export default Index;
