import { memo } from "react";
// eslint-disable-next-line import/no-internal-modules
import { VStack } from "@/shared/ui/Stack";
// eslint-disable-next-line import/no-internal-modules
import { Text, TextVariant } from "@/shared/ui/Text/Text.tsx";
import { ImageSwiper } from "@/entities/announcement/ui/AnnouncementCard/ImageSwiper/ImageSwiper.tsx";
import styles from "./AnnouncementCard.module.scss";

interface AnnouncementProps {
  imageUrl: string;
  price: string;
  title: string;
  address: string;
  date: string;
}

// eslint-disable-next-line react/display-name
export const AnnouncementCard = memo((props: AnnouncementProps) => {
  const { imageUrl, price, title, address, date } = props;

  return (
    <VStack gap="8">
      <ImageSwiper />
      <VStack
        align="start"
        gap="4"
        max={true}>
        <Text
          gap="0"
          title={price + " ₽"}
          variant={TextVariant.SUBTITLE}
        />
        <Text
          gap="0"
          title={title}
          variant={TextVariant.MAIN_REGULAR}
          isActive={true}
          className={styles.title}
        />
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
            text={date}
            variant={TextVariant.ADDITIONAL}
          />
        </VStack>
      </VStack>
    </VStack>
  );
});
