import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateCarDto, UpdateCarDto } from './dto';
import { CarItf } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private _cars: Array<CarItf> = [
    { id: uuidv4(), brand: 'NISSAN', model: 'Sentra' },
    { id: uuidv4(), brand: 'BMW', model: 'M3' },
    { id: uuidv4(), brand: 'TOYOTA', model: 'Rav4' },
  ];

  get cars() {
    return this._cars;
  }

  findAll() {
    return this._cars;
  }

  findOneById(id: string) {
    const result = this.cars.find(car => car.id === id);
    if (!result) throw new NotFoundException(`Car with id '${id} not found'`);

    return result;
  }

  create(createCarDto: CreateCarDto) {
    const data: CarItf = { id: uuidv4(), ...createCarDto };
    this._cars.push(data);
    return data;
  }

  update(id: string, data: UpdateCarDto) {
    let carDb = this.findOneById(id);

    this._cars = this._cars.map(car => {
      if (car.id === id) {
        carDb = { ...carDb, ...data, id };
        return carDb;
      }
      return car;
    });

    return carDb;
  }

  delete(id: string) {
    this.findOneById(id);
    this._cars = this._cars.filter(car => car.id !== id);
  }
}
