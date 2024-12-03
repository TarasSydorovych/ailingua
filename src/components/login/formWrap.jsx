import { useState } from "react";
import css from "./login.module.css";
import googleM from "../../img/googleM.png";
import faccebokkO from "../../img/faccebokkO.png";

import microsortK from "../../img/microsortK.png";
const FormWrap = () => {
  const [email, setEmail] = useState("");
  const [pasw, setPasw] = useState("");

  return (
    <div className={css.formWrap}>
      <p className={css.pLogIn}>Log In</p>
      <div className={css.wrapTwoInput}>
        <div className={css.wrapTwoInput}>
          <label className={css.label}>Email</label>
          <input
            className={css.inputLogin}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={css.wrapTwoInput}>
          <div className={css.wrapTwoInp}>
            <label className={css.label}>Password</label>
            <label className={css.labelPasw}>Forgot Password</label>
          </div>
          <input
            className={css.inputLogin}
            placeholder="Password"
            value={pasw}
            onChange={(e) => setPasw(e.target.value)}
          />
        </div>
      </div>
      <div className={css.orWrapL}>
        <div className={css.line}></div>
        <p className={css.orP}>OR</p>
        <div className={css.line}></div>
      </div>
      <div className={css.wrapGoogleAuth}>
        <div className={css.wrapOneAuth}>
          <img className={css.icongoogleM} alt="log" src={googleM} />
        </div>
        <div className={css.wrapOneAuth}>
          {" "}
          <img className={css.icongoogleM} alt="log" src={faccebokkO} />
        </div>
        <div className={css.wrapOneAuth}>
          {" "}
          <img className={css.icongoogleM} alt="log" src={microsortK} />
        </div>
      </div>
      <div className={css.logInBut}>Log In</div>
      <p className={css.haveAccount}>
        Don't have an account? <span className={css.haveSpan}>Register</span>
      </p>
    </div>
  );
};
export default FormWrap;
