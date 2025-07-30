import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from '../css/signin.module.css';

const Signin = () => {

  /*로그인시 사용하는 useState 훅*/
  const [value1, setValue1] = useState("");
  const [password1, setPassword1] = useState("");

  /*회원가입시 사용하는 useState 훅*/
  const [name, setName] = useState("");
  const [value2, setValue2] = useState("");
  const [password2, setPassword2] = useState("");

  /*로그인, 회원가입 전환하는 useState 훅*/
  const [change, setChange] = useState(true);

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log('제출된 이메일: ', value1);
    console.log('제출된 비밀번호: ', password1);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log('회원가입 하는 이름: ', name);
    console.log('회원가입 하는 이메일: ', value2);
    console.log('회원가입 하는 비밀번호: ', password2);
  };

  return (
    <>
      {change ? (
        <div className={styles.container}>
          <h2 className={styles.heading}>로그인</h2>
          <form onSubmit={handleSubmit1} className={`${styles.card} ${styles.form}`}>
            <div className={styles.social_icons_container}>
              <FontAwesomeIcon icon={faTwitter} size="2x"className ={styles.social_icon} />
              <FontAwesomeIcon icon={faInstagram} size="2x" className ={styles.social_icon} />
              <FontAwesomeIcon icon={faGoogle} size="2x"  className ={styles.social_icon} />
            </div>
            <input
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="Email address"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="Password"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <button type="submit" className={styles.button_primary}>로그인</button>
            <button type="button" onClick={() => setChange(false)}  className={styles.button_primary}>회원가입</button>
          </form>
        </div>
      ) : (
        <div className={styles.container}>
          <h2 className={styles.heading}>회원가입</h2>
          <form onSubmit={handleSubmit2} className={`${styles.card} ${styles.form}`}>
            <div className={styles.social_icons_container}>
              <FontAwesomeIcon icon={faTwitter} size="2x" className ={styles.social_icon} />
              <FontAwesomeIcon icon={faInstagram} size="2x" className ={styles.social_icon} />
              <FontAwesomeIcon icon={faGoogle} size="2x" className ={styles.social_icon} />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <input
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder="Email address"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Password"
              className={styles.input_field}
            />
            <hr className={styles.divider} />
            <button type="submit" className={styles.button_primary}>회원가입</button>
            <button type="button" onClick={() => setChange(true)}  className={styles.button_primary}>다시 로그인</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Signin;
