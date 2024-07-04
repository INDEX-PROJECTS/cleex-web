import { memo } from "react";
import clsx from "clsx";
import { getUppercaseFirstLetter } from "@/shared/utils/getUppercaseFirstLetter/getUppercaseFirstLetter.ts";
import { stringToColor } from "@/shared/utils/stringToColor/stringToColor.ts";
import styles from "./Avatar.module.scss";
import type { FC } from "react";
import type { Mods } from "@/shared/types";

export enum AvatarSize {
  SIZE32 = "size-32",
  SIZE48 = "size-48",
  SIZE64 = "size-64",
  SIZE88 = "size-88",
}

interface AvatarProps {
  name: string;
  size?: AvatarSize;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({
  name,
  className,
  size = AvatarSize.SIZE48,
  ...props
}) => {
  const splitName = name.split(" ");
  const firstName = splitName[0] || "";
  const lastName = splitName[1] || "";

  const formatFirstName = getUppercaseFirstLetter(firstName);
  const formatLastName = getUppercaseFirstLetter(lastName);

  const title = `${formatFirstName}${formatLastName}`.trim();
  const backgroundColor = stringToColor(`${firstName} ${lastName}`.trim());

  const mods: Mods = {
    [styles[size]]: true,
  };

  return (
    <div
      style={{ backgroundColor: `${backgroundColor}` }}
      className={clsx(styles.avatar, mods, [className])}
      {...props}>
      {title}
    </div>
  );
};

export default memo(Avatar);
