import * as migration_20251022_074003 from './20251022_074003';
import * as migration_20251022_121557 from './20251022_121557';
import * as migration_20251022_153227 from './20251022_153227';

export const migrations = [
  {
    up: migration_20251022_074003.up,
    down: migration_20251022_074003.down,
    name: '20251022_074003',
  },
  {
    up: migration_20251022_121557.up,
    down: migration_20251022_121557.down,
    name: '20251022_121557',
  },
  {
    up: migration_20251022_153227.up,
    down: migration_20251022_153227.down,
    name: '20251022_153227'
  },
];
