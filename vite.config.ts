import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import prerender from 'vite-plugin-prerender';
import path from 'path';

const PRODUCT_IDS = [
  'mineral-water-plant',
  'fruit-juice-plant',
  'soft-drink-plant',
  'bottled-water-plant',
  'industrial-alkaline-water',
  'glass-bottling-plant',
  'csd-carbonator',
  'fruit-juice-filling-machine',
  'fully-automatic-filling-machine',
  'natural-mineral-water-plants',
  'packaged-drinking-water-plant',
  'fully-automatic-labeling-machine',
  'semi-automatic-shrink-wrapping-machine',
  'industrial-ro-plant',
  'fully-automatic-pet-blow-molding-machine',
  'processing-equipment',
  'fully-automatic-shrink-wrapping-machine',
  'semi-automatic-pet-blowing-machine'
];

const BLOG_POST_IDS = [
  'top-7-mistakes-to-avoid-mineral-water-business',
  'mineral-water-plant-setup-cost-process-profit-2026',
  'how-to-start-mineral-water-business-india-2026',
  'future-of-mineral-water-2026',
  'benefits-of-turnkey-solutions',
  'quality-assurance-iso-standards'
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/about',
        '/products',
        '/services',
        '/projects',
        '/contact',
        '/blog',
        ...PRODUCT_IDS.map(id => `/products/${id}`),
        ...BLOG_POST_IDS.map(id => `/blog/${id}`)
      ],
      renderer: new prerender.PuppeteerRenderer({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        renderAfterTime: 5000,
        renderAfterDocumentEvent: 'prerender-trigger'
      })
    }),
  ],
  resolve: {
    alias: {
      '@': '.',
    }
  }
});
