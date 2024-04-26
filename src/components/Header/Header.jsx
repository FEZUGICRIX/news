import { formatDate } from "../../helpers/formatDate";
import style from './styles.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <h1>News Today</h1>
      <p>{formatDate(new Date())}</p>
    </header>
  );
}

export default Header