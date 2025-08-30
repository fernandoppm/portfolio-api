
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('portfolios')
export class Portfolio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column('text', { array: true, default: [] })
  skills: string[];

  @Column('jsonb', { default: [] })
  experiences: { id: string, title: string, company: string, years: string }[];

  @Column('jsonb', { default: [] })
  projects: { id: string, title: string, description: string, link: string }[];
}