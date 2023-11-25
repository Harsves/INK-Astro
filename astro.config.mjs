import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import netlify from "@astrojs/netlify/functions";
const env = loadEnv('', process.cwd(), 'STORYBLOK');


// https://astro.build/config
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
  output: "server",
  adapter: netlify()
});

// astro.config.mjs
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: "server",
  adapter: netlify(),
});