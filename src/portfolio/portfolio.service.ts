
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { Portfolio } from './entities/portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepository: Repository<Portfolio>,
  ) {}

  create(createPortfolioDto: CreatePortfolioDto) {
    const portfolio = this.portfolioRepository.create(createPortfolioDto);
    return this.portfolioRepository.save(portfolio);
  }

  findAll() {
    return this.portfolioRepository.find();
  }

  async findOne(id: string) {
    const portfolio = await this.portfolioRepository.findOneBy({ id });
    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID "${id}" not found`);
    }
    return portfolio;
  }

  async update(id: string, updatePortfolioDto: UpdatePortfolioDto) {
    const portfolio = await this.portfolioRepository.preload({
      id,
      ...updatePortfolioDto,
    });
    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID "${id}" not found`);
    }
    return this.portfolioRepository.save(portfolio);
  }

  async remove(id: string) {
    const portfolio = await this.findOne(id);
    await this.portfolioRepository.remove(portfolio);
    return; 
  }
}