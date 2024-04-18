import style from './styles.module.css';

const Image = ({ image }) => {
  return (
    <>
      {image ?
        <img src={image} alt='news' className={style.image} /> :
      null}
    </>
  );
}

export default Image;