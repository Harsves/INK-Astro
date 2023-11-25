import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import vercel from '@astrojs/vercel/serverless';
const env = loadEnv('', process.cwd(), 'STORYBLOK');


export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    apiOptions: {
      region: ''
    },
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      hero: 'storyblok/Hero',
      material: 'storyblok/Material',
      financial: 'storyblok/Financial',
      clothing: 'storyblok/Clothing'
    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  site: 'https://harsves.github.io',
  base: '/INK-Astro',
  output: 'server',
  adapter: vercel(),
});
