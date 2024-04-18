import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image'
import style from './styles.module.css';

export const NewsBanner = ({ item }) => {
  return (
    <div className={style.header}>
      <Image image={item?.image} />
      <h3 className={style.header}>{item.title}</h3>
      <p className={style.header}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}