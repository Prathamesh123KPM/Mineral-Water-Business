import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { createRequire } from 'module';

// Shim require globally for CommonJS compatibility in ES modules (specifically for vite-plugin-prerender)
globalThis.require = createRequire(import.meta.url);

// Dynamically import the prerender plugin after shimming require
const prerender = (await import('vite-plugin-prerender')).default;


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
  'quality-assurance-iso-standards',
  'eco-friendly-packaging-2026-shift',
  'digital-marketing-strategies-water-business-2026',
  'water-purification-technologies-beyond-ro',
  'guide-to-maintenance-water-bottling-plants',
  'isi-fssai-certification-importance-water-plant',
  'how-to-clean-ro-membrane-chemical',
  'choosing-water-softener-plant-manufacturer',
  'guide-to-commercial-water-processing-plant',
  'mineral-water-plant-in-kenya',
  'mineral-water-plant-in-nigeria',
  'mineral-water-plant-in-tanzania',
  'setup-juice-plant-uganda',
  'bottled-water-plant-in-ethiopia',
  'ro-water-filter-system-installation-guide',
  'water-bottle-manufacturing-cost-machinery',
  'how-to-start-bisleri-water-pani-bottle-business',
  'isi-mark-registration-fees-compliance-water-plant',
  'manufacturing-cost-coca-cola-beverage-industry',
  'mineral-water-plant-project-report-packing-machine',
  'mineral-water-bottling-plant-price-machine-cost-india',
  'small-scale-mineral-water-plant-layout-packaging',
  'small-mineral-water-plant-project-report-pdf-guide'
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
  build: {
    target: 'es2022',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-lucide': ['lucide-react'],
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '.',
    }
  }
});
