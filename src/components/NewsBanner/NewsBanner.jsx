import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image'
import style from './styles.module.css';

export const NewsBanner = ({ item }) => {
  return (
    <div className={style.newsBanner}>
      <Image image={item?.image} />
      <h3>{item.title}</h3>
      <p>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}