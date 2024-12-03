import css from "./login.module.css";
import aiLogoForLogin from "../../img/logoInLd.png";
import FormWrap from "./formWrap";
const Main = () => {
  return (
    <div className={css.main}>
      <img src={aiLogoForLogin} alt="logo" className={css.logoInRed} />
      <FormWrap />
    </div>
  );
};
export default Main;
