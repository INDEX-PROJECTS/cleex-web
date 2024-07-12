import { memo } from "react";
import clsx from "clsx";
import styles from "./Skeleton.module.scss";
import type { CSSProperties } from "react";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  flex?: boolean;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, flex, width, border } = props;

  const style: CSSProperties = {
    height,
    width,
    flex: flex ? "flex" : "none",
    borderRadius: border,
  };
  return (
    <div
      className={classNames(styles.Skeleton, {}, [className])}
      style={style}
    />
  );
});
