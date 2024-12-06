import fs from 'fs/promises';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src');

const structure = {
  'app': {
    'api': {
      'telegram': ['route.ts'],
      'posts': ['route.ts']
    },
    'home': ['page.tsx', 'loading.tsx'],
    'chrono-vox': {
      'feed': ['page.tsx'],
      'contesto': ['page.tsx'],
      'altri': ['page.tsx'],
      'layout.tsx': null,
      'page.tsx': null
    },
    'contenuti': {
      'articoli': {
        '[slug]': ['page.tsx', 'loading.tsx'],
        'categoria': ['page.tsx'],
        'page.tsx': null
      },
      'video': {
        '[slug]': ['page.tsx', 'loading.tsx'],
        'categoria': ['page.tsx'],
        'page.tsx': null
      },
      'podcast': {
        '[slug]': ['page.tsx', 'loading.tsx'],
        'categoria': ['page.tsx'],
        'page.tsx': null
      },
      'infografiche': {
        '[slug]': ['page.tsx', 'loading.tsx'],
        'categoria': ['page.tsx'],
        'page.tsx': null
      },
      'layout.tsx': null,
      'page.tsx': null
    },
    'formazione': {
      'corsi': {
        '[courseId]': {
          'lezioni': ['page.tsx'],
          'page.tsx': null
        },
        'page.tsx': null
      },
      'layout.tsx': null,
      'page.tsx': null
    },
    'chi-siamo': {
      'faq': ['page.tsx'],
      'risorse': ['page.tsx'],
      'contatti': ['page.tsx'],
      'page.tsx': null
    },
    'sostienici': {
      'donazioni': ['page.tsx'],
      'page.tsx': null
    },
    'profilo': {
      'impostazioni': ['page.tsx'],
      'layout.tsx': null,
      'page.tsx': null
    },
    'layout.tsx': null,
    'error.tsx': null,
    'not-found.tsx': null
  },
  'components': {
    'layout': ['header.tsx', 'footer.tsx', 'navigation.tsx', 'sidebar.tsx'],
    'ui': {
      'forms': {},
      'button.tsx': null,
      'card.tsx': null,
      'input.tsx': null
    },
    'shared': ['content-card.tsx', 'media-player.tsx', 'audio-player.tsx', 'video-player.tsx', 'image-gallery.tsx', 'tag-list.tsx']
  },
  'lib': {
    'types': ['index.ts'],
    'utils': ['index.ts', 'api-helpers.ts', 'media-helpers.ts'],
    'config': ['index.ts'],
    'db': {
      'models': ['Post.ts', 'User.ts', 'Course.ts'],
      'connect.ts': null
    },
    'api': ['telegram.ts', 'posts.ts']
  },
  'hooks': ['useMediaPlayer.ts', 'usePosts.ts'],
  'styles': ['globals.css'],
  'middleware.ts': null
};

async function createStructure(currentPath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const fullPath = path.join(currentPath, key);
    if (value === null) {
      await fs.writeFile(fullPath, '');
      console.log(`Created file: ${fullPath}`);
    } else if (Array.isArray(value)) {
      await fs.mkdir(fullPath, { recursive: true });
      console.log(`Created directory: ${fullPath}`);
      for (const file of value) {
        const filePath = path.join(fullPath, file);
        await fs.writeFile(filePath, '');
        console.log(`Created file: ${filePath}`);
      }
    } else {
      await fs.mkdir(fullPath, { recursive: true });
      console.log(`Created directory: ${fullPath}`);
      await createStructure(fullPath, value);
    }
  }
}

async function main() {
  try {
    console.log('Starting to create folder structure...');
    await createStructure(baseDir, structure);
    console.log('Folder structure created successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();