import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { Property, Required } from "@tsed/schema";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Property()
  @Required()
  email: string;

  @Column()
  @Property()
  @Required()
  password: string;

  @Column()
  @Property()
  @Required()
  firstName: string;

  @Column()
  @Property()
  @Required()
  lastName: string;
}
