import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const clsx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={clsx('header')}>
      <button className={clsx('back-btn')} onClick={onBack}>
        <i className="fa-solid fa-chevron-left mr-8"></i>
      </button>
      <h4 className={clsx('header-title')}>{title}</h4>
    </header>
  );
}

export default Header;
