import { Metadata } from 'next';

import './globals.css';

interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Droppii Q&A',
  description: 'Droppii Q&A',
};

export default function RootLayout({ children, sidebar }: Readonly<Props>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
        <head>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </head>
      </head>
      <body>
        <main>
          {sidebar}
          <div className="mt-[62px] p-4 sm:ml-80">{children}</div>
        </main>

        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js" defer />
      </body>
    </html>
  );
}
