import * as migration_20251022_074003 from './20251022_074003';
import * as migration_20251022_121557 from './20251022_121557';

export const migrations = [
  {
    up: migration_20251022_074003.up,
    down: migration_20251022_074003.down,
    name: '20251022_074003',
  },
  {
    up: migration_20251022_121557.up,
    down: migration_20251022_121557.down,
    name: '20251022_121557'
  },
];
