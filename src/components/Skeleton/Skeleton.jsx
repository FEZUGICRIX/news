import style from './styles.module.css';

const Skeleton = ({ count, type }) => {
  const itemType = type || (count > 1 ? 'banner' : 'item');

  return (
    <>
      {count > 1 ? (
        <ul className={style.list}>
          {Array.from({ length: count }, (_, index) => (
            <li key={index} className={style[itemType]}></li>
          ))}
        </ul>
      ) : (
        <li className={style[itemType]}></li>
      )}
    </>
  );
};

export default Skeleton;