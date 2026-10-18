import './globals.css';

export const metadata = {
  title: 'Note App',
  description: 'Simple Next.js note app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
