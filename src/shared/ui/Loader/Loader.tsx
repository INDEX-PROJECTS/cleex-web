import clsx from "clsx";
import "./Loader.module.scss";

export enum ThemeLoader {
  MAIN_LOADER = "mainLoader",
  BTN_LOADER = "btnLoader",
}

interface LoaderProps {
  className?: string;
  theme?: ThemeLoader;
}

export const Loader = ({
  className,
  theme = ThemeLoader.MAIN_LOADER,
}: LoaderProps) => {
  return <span className={clsx(theme, {}, [className])} />;
};
