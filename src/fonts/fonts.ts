import localFont from 'next/font/local';

export const ppNeueMachina = localFont({
  src: [
    {
      path: './PPNeueMachina-PlainLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './PPNeueMachina-PlainRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './PPNeueMachina-PlainUltrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-pp-neue-machina',
  display: 'swap',
});

export const biformPixel = localFont({
  src: './biform_pixel.otf',
  variable: '--font-biform-pixel',
  display: 'swap',
});
