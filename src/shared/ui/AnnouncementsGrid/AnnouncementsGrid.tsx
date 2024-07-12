import type { FC, ReactNode } from 'react';
import styles from './AnnouncementsGrid.module.scss';

interface GridWrapperProps {
  children: ReactNode;
}

const AnnouncementsGrid: FC<GridWrapperProps> = ({ children }) => <div className={styles.grid}>{children}</div>;

export default AnnouncementsGrid;
