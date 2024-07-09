import { memo } from "react";
// eslint-disable-next-line import/no-internal-modules
import Image from "next/image";
import { VStack } from "@/shared/ui/Stack";
import { Text, TextVariant } from "@/shared/ui/Text/Text.tsx";

import { AppLink } from "@/shared/ui/AppLink/AppLink.tsx";

import { normalizeDateTime } from "@/shared/utils/normalizeDateTime/normalizeDateTime.ts";
import { priceFormatter } from "@/shared/utils/priceFormatter/priceFormatter.ts";
import styles from "./AnnouncementCard.module.scss";

interface AnnouncementProps {
  href: string;
  imageUrl: string;
  price: string;
  title: string;
  address: string;
  date: string;
}

// eslint-disable-next-line react/display-name
export const AnnouncementCard = memo((props: AnnouncementProps) => {
  const { href, imageUrl, price, title, address, date } = props;

  return (
    <VStack gap="8">
      <Image
        src={`https://testguru.ru/kvik_v3/api/v1/images/640x480/${imageUrl}`}
        className={styles.image}
        width={640}
        height={480}
        alt={title}
        title={`Объявление «${title}»`}
      />
      <VStack
        align="start"
        gap="4"
        max={true}>
        <Text
          gap="0"
          title={priceFormatter(price)}
          variant={TextVariant.SUBTITLE}
        />
        <AppLink
          href={href}
          className={styles.title}
          title={title}>
          {title}
        </AppLink>
        <VStack
          align="start"
          gap="4">
          <Text
            gap="0"
            text={address}
            variant={TextVariant.ADDITIONAL}
            className={styles.address}
          />
          <Text
            gap="0"
            text={normalizeDateTime(date)}
            variant={TextVariant.ADDITIONAL}
          />
        </VStack>
      </VStack>
    </VStack>
  );
});
