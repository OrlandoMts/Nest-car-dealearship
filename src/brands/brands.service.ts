import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private _brands: Array<Brand> = [
    /*  {
      id: uuidv4(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    }, */
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuidv4(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    };

    this._brands.push(brand);

    return brand;
  }

  findAll() {
    return this._brands;
  }

  findOne(id: string) {
    const brand = this._brands.find(brand => brand.id === id);

    if (!brand) throw new NotFoundException('No se encontro el recurso');

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);

    this._brands = this._brands.map(brand => {
      if (brand.id === id) {
        brandDb.updatedAt = new Date().getTime();
        brandDb = { ...brandDb, ...updateBrandDto, id };
        return brandDb;
      }
      return brand;
    });

    return brandDb;
  }

  remove(id: string) {
    this.findOne(id);
    this._brands = this._brands.filter(brand => brand.id !== id);
  }

  fillDataFromSeed(data: Array<Brand>) {
    this._brands = data;
  }
}
