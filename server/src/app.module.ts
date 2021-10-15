import { ImageModule } from './modules/image/image.module';
import { PinataModule } from './modules/pinata/pinata.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'react'),
    }),
    PinataModule,
    ImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
