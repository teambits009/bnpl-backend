import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'bnpl',
      autoLoadEntities: true,
      synchronize: true, // Note: Disable in production.
    }),
  ],
})
export class AppModule {}