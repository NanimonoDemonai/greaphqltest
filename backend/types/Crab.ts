import "reflect-metadata";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType({ description: "かに" })
export class Crab {
  @Field(() => ID)
  id: string;

  @Field({ description: "かにの名前" })
  name: string;

  @Field({ description: "かにの説明", nullable: true })
  description: string;

  @Field(() => Int, { description: "かにの値段" })
  price: number;

  @Field(() => [String], { description: "かにの失った脚", nullable: true })
  lostLegs: string[];

  constructor(data: {
    id: string;
    name: string;
    description: string;
    price: number;
    lostLegs: string[];
  }) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.lostLegs = data.lostLegs;
  }
}
