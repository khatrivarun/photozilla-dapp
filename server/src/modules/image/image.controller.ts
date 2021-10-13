import { ImageResponse } from './../../dto/image/image_reponse.dto';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './images',
    }),
  )
  public async uploadToIpfsStorage(
    @UploadedFile() imageFile: Express.Multer.File,
  ): Promise<ImageResponse> {
    const hash = await this.imageService.uploadToIpfsStorage(imageFile);
    const response: ImageResponse = { hash };

    return response;
  }
}
