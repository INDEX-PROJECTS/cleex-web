import styles from "./AnnouncementsGrid.module.scss";
import type { FC, ReactNode } from "react";

interface GridWrapperProps {
  children: ReactNode;
}

const AnnouncementsGrid: FC<GridWrapperProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default AnnouncementsGrid;
