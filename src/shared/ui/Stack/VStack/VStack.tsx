import { Flex } from '../Flex/Flex';
import type { FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: HStackProps) => (
    <Flex
        direction="column"
        {...props}
    />
);
