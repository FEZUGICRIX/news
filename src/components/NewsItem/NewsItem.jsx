import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image';
import style from './styles.module.css';

const NewsItem = ({ item }) => {
  return (
    <li className={style.item}>
      <Image image={item?.image} />
      <div>
        {item.title}
        <p className={style.header}>
          <b>{formatTimeAgo(item.published)}</b> by {item.author}
        </p>
      </div>
    </li>
  )
}

export default NewsItem;