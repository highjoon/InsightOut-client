import './globals.css';
import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import TanstackQueryProvider from '@/components/providers/TanstackQueryProvider';
import ChakraUIProvider from '@/components/providers/ChakraProvider';
import AuthProvider from '@/components/providers/AuthProvider';
import classNames from 'classnames';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body
        className={classNames(pretendard.className, ' bg-[#f5f5f5]')}
        suppressContentEditableWarning
        suppressHydrationWarning>
        <TanstackQueryProvider>
          <ChakraUIProvider>
            <AuthProvider />
            {children}
          </ChakraUIProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
