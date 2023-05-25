'use client';

import { colors } from '@/styles/theme/foundations/colors';
import { boxShadow } from '@/styles/theme/foundations/boxShadow';
import { textStyles } from '@/styles/theme/foundations/textStyles';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <span className="h1 text-error shadow-toast">head1 - tailwind custom theme</span>
      <Box css={textStyles.h1} color={colors.error} boxShadow={boxShadow.toast}>
        head1 - chakra-ui custom theme
      </Box>
      <span className="text-purple-300 h2 shadow-insightCard">head2</span>
      <Box css={textStyles.h2} color={colors.purple['300']} boxShadow={boxShadow.insightCard}>
        head1 - chakra-ui custom theme
      </Box>
      <span className="text-gray-900 subhead1 shadow-S5">subhead1</span>
      <Box css={textStyles.subhead1} color={colors.gray[900]} boxShadow={boxShadow.S5}>
        head1 - chakra-ui custom theme
      </Box>
    </main>
  );
}
