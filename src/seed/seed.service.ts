import { Injectable } from '@nestjs/common';

import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly _carSrv: CarsService,
    private readonly _brandSrv: BrandsService,
  ) {}

  populateDb() {
    this._carSrv.fillDataFromSeed(CARS_SEED);
    this._brandSrv.fillDataFromSeed(BRANDS_SEED);
    return 'Seed executed';
  }
}
