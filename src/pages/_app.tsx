import { globalStyles } from '@/lib/stitches.config';

import type { AppProps } from 'next/app'
import { Josefin_Sans } from 'next/font/google'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <main className={josefin_Sans.className}>
      <Component {...pageProps} />
    </main>
  )
}
