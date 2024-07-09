import HeaderBottom from '../HeaderBottom/HeaderBottom.tsx';
import HeaderTop from '../HeaderTop/HeaderTop.tsx';
import styles from './Header.module.scss';

export const Header = () => (
    <div className={styles.Header}>
        <HeaderTop isAccountPage={false} />
        <HeaderBottom />
    </div>
);
