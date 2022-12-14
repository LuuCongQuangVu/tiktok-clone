import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const clsx = classNames.bind(styles);

function Wrapper({ children }) {
  return <div className={clsx('wrapper')}>{children}</div>;
}

export default Wrapper;
