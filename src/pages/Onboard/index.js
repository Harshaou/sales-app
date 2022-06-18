import { useState, useEffect } from 'react';
import Main from '../../layout/Main';
import styles from './index.module.css';
import { Button, Form } from 'antd';
import InitialForm from './InitailForm';
import FinalForm from './FinalForm';
import { firestore } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Index = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(0);
  const [state, setState] = useState(0);
  const providersCollectionref = collection(firestore, 'providers');

  //Initial form
  const handleFirstForm = (value) => {
    setState(value);
    if (value['Branch exist'] === 'Yes') {
      setStep(1);
    }
  };

  //HandleSubmit
  const handleFinish = async (value) => {
    let updateValue = {
      ...state,
      ...value,
    };

    try {
      addDoc(providersCollectionref, updateValue);
    } catch (error) {
      console.log(error);
    }
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <div>
          <h1 className={styles.pageTitle}>Service Provider Details</h1>
          <InitialForm state={state} form={form} handleFinish={handleFirstForm} />
        </div>
      );
    }
    if (step === 1) {
      return (
        <div>
          <h1 className={styles.pageTitleThree}>Branches</h1>
          <FinalForm form={form} handleFinish={handleFinish} setStep={setStep} />
        </div>
      );
    }
  };

  return (
    <Main pageName="Onboard provider">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          {renderStep()}
          <Button>test</Button>
        </div>
      </div>
    </Main>
  );
};

export default Index;
