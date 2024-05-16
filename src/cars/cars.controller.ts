import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
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

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this._carSrv.findOneById(id);
  }

  @Post()
  create(@Body() data: any) {
    return { ok: true, data };
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return { ok: true, data };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return { ok: true, method: 'delete', id };
  }
}
