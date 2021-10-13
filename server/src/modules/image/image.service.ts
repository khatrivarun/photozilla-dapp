import { PinataPinOptions } from '@pinata/sdk';
import { PinataService } from './../pinata/pinata.service';
import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ImageService {
  private readonly logger: Logger = new Logger(ImageService.name);
  constructor(private readonly pinataService: PinataService) {}

  public async uploadToIpfsStorage(
    imageFile: Express.Multer.File,
  ): Promise<string> {
    try {
      const imageName = uuidv4();
      const readableImageStream = fs.createReadStream(imageFile.path);

      const options: PinataPinOptions = {
        pinataMetadata: {
          name: imageName,
        },
        pinataOptions: { cidVersion: 0 },
      };

      const result = await this.pinataService.pinataClient.pinFileToIPFS(
        readableImageStream,
        options,
      );

      return result.IpfsHash;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException({
        error: 'Something went wrong, please try again later',
      });
    }
  }
}
