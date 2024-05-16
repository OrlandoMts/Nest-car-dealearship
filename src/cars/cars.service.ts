import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private _cars = [
    { id: 1, brand: 'NISSAN', model: 'Sentra' },
    { id: 2, brand: 'BMW', model: 'M3' },
    { id: 3, brand: 'TOYOTA', model: 'Rav4' },
  ];

  get cars() {
    return this._cars;
  }

  findAll() {
    return this._cars;
  }

  findOneById(id: string | number) {
    const result = this.cars.find(car => car.id === Number(id));
    if (!result) throw new NotFoundException(`Car with id '${id} not found'`);

    return result;
  }
}
