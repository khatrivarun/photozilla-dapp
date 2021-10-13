import { Module } from '@nestjs/common';
import { PinataService } from './pinata.service';

@Module({
  providers: [PinataService]
})
export class PinataModule {}
