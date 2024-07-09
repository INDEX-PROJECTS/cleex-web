import HeaderBottom from "@/widgets/header/ui/HeaderBottom/HeaderBottom.tsx";
import HeaderTop from "@/widgets/header/ui/HeaderTop/HeaderTop.tsx";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <HeaderTop isAccountPage={false} />
      <HeaderBottom />
    </div>
  );
};
