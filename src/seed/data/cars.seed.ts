import { v4 as uuidv4 } from 'uuid';

import { CarItf } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Array<CarItf> = [
  { id: uuidv4(), brand: 'NISSAN', model: 'Sentra' },
  { id: uuidv4(), brand: 'BMW', model: 'M3' },
  { id: uuidv4(), brand: 'TOYOTA', model: 'Rav4' },
];
