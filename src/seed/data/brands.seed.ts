import { v4 as uuidv4 } from 'uuid';

import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Array<Brand> = [
  {
    id: uuidv4(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
];
