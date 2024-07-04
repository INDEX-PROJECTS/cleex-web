import { memo } from "react";
import { VStack } from "@/shared/ui/Stack";
import { Text, TextVariant } from "@/shared/ui/Text/Text.tsx";
import { ImageSwiper } from "@/entities/announcement/ui/AnnouncementCard/ImageSwiper/ImageSwiper.tsx";
import { AppLink } from "@/shared/ui/AppLink/AppLink.tsx";
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
      <ImageSwiper />
      <VStack
        align="flex-start"
        gap="4"
        max={true}>
        <Text
          gap="0"
          title={price + " ₽"}
          variant={TextVariant.SUBTITLE}
        />
        <AppLink
          href={href}
          className={styles.title}>
          {title}
        </AppLink>
        <VStack
          align="flex-start"
          gap="2">
          <Text
            gap="0"
            text={address}
            variant={TextVariant.ADDITIONAL}
            className={styles.address}
          />
          <Text
            gap="0"
            text={date}
            variant={TextVariant.ADDITIONAL}
          />
        </VStack>
      </VStack>
    </VStack>
  );
});
