import { ImageModule } from './modules/image/image.module';
import { PinataModule } from './modules/pinata/pinata.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PinataModule, ImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
