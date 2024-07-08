import styles from "./MaxContainer.module.scss";
import type { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MaxContainer = (props: MainContainerProps) => {
  const { children } = props;

  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainContainer_max}>{children}</div>
    </div>
  );
};

export default MaxContainer;
