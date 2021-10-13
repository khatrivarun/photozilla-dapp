import { PinataModule } from './modules/pinata/pinata.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PinataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
