import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{tsx,css}'],
    exclude: ['node_modules', '.git', '.next', 'public'],
  },
  theme: {
    fontFamily: {
      'overpass': 'Overpass, sans-serif',
      'ubuntu': 'Ubuntu, sans-serif',
    }
  }
});