import styles from "./MaxContainer.module.scss";
import type { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
  background: string;
}

const MaxContainer = (props: MainContainerProps) => {
  const { children, background } = props;

  return (
    <div
      className={styles.MainContainer}
      style={{ background: `${background}` }}>
      <div className={styles.MainContainer_max}>{children}</div>
    </div>
  );
};

export default MaxContainer;
