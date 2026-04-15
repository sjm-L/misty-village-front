import './globals.css';

export const metadata = {
  title: '안개 마을 연대기',
  description: '마을을 만들고 탐험을 시작하세요',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
