import "antd/dist/antd.css";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import { useState } from "react";
import { Button, ConfigProvider, Modal } from "antd";
import SignIn from "./SignIn";
import SignUp from "./Signup";

function Login() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

  const showSignupModal = () => {
    setIsSignupModalOpen(true);
  };
  const showSigninModal = () => {
    setIsSigninModalOpen(true);
  };

  const handleSignupCancel = () => {
    setIsSignupModalOpen(false);
  };

  const handleSigninCancel = () => {
    setIsSigninModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src="/logohome.png"
          alt="Logo Twitter"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.connexion}>
        <Image
          className={styles.logo}
          src="/logohome.png"
          alt="Logo Twitter"
          width={50}
          height={50}
        />
        <div className={styles.connexionContent}>
          <p>
            <strong className={styles.title}>See what's<br /> happening</strong>
          </p>
          <p>
            <strong className={styles.subtitle}>Join Hackatweet today.</strong>
          </p>
          <Button
            className={styles.signupButton}
            type="primary"
            onClick={showSignupModal}
          >
            Sign up
          </Button>
          <ConfigProvider>
            <Modal
              className="modal"
              open={isSignupModalOpen}
              onCancel={handleSignupCancel}
              footer={null}
            >
              <SignUp />
            </Modal>
          </ConfigProvider>
          <p className={styles.text}>Already have an account?</p>
          <Button
            className={styles.signinButton}
            type="secondary"
            onClick={showSigninModal}
          >
            Sign in
          </Button>
          <Modal
            className='modal'
            open={isSigninModalOpen}
            onCancel={handleSigninCancel}
            footer={null}
          >
            <SignIn />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Login;
