// Vercel adapter for SvelteKit. Using the Vercel adapter makes deployments to Vercel seamless.
// See: https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel
import vercel from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: vercel(),
  },
}

export default config
