import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // Sirve para validar todos los endpoints en los que se envia data
export class CarsController {
  constructor(private readonly _carSrv: CarsService) {}

  @Get()
  getAll() {
    return this._carSrv.findAll();
  }

  /* @Get(':id')
  findOne(@Param() params: any) {
    if (isNumber(params.id)) {
      return this._carSrv.findOneById(params.id);
    } else {
      return `No es un número`;
    }
  } */

  // Ejemplo de la seccion 3
  /* @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this._carSrv.findOneById(id);
  } */

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this._carSrv.findOneById(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this._carSrv.create(createCarDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: UpdateCarDto) {
    return this._carSrv.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this._carSrv.delete(id);
  }
}
