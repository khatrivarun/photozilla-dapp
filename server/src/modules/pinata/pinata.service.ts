import { PinataClient } from '@pinata/sdk';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PinataService implements OnModuleInit {
  public pinataClient: PinataClient;
  private logger: Logger = new Logger(PinataService.name);
  onModuleInit() {
    this.pinataClient = require('@pinata/sdk')(
      process.env.PINATA_API_KEY,
      process.env.PINATA_API_SECRET,
    );

    this.pinataClient
      .testAuthentication()
      .then((_) => this.logger.log('Pinata SDK has been initialized'))
      .catch((error) => this.logger.error(error));
  }
}
