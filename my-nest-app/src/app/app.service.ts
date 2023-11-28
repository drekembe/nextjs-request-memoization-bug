import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('one')
    return { message: 'Hello API' };
  }
}
