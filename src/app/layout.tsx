import './globals.css';
import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import classNames from 'classnames';
import TanstackQueryProvider from '@/components/Providers/TanstackQueryProvider';
import ChakraUIProvider from '@/components/Providers/ChakraProvider';
import AuthProvider from '@/components/Providers/AuthProvider';
import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';

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
            <AuthProvider>
              <GlobalNavigationBar />
              {children}
            </AuthProvider>
          </ChakraUIProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}

export const pretendard = localFont({
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
