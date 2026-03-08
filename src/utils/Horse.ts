import { faker } from '@faker-js/faker';

export class Horse {
  name: string;
  color: string;
  condition: number;

  constructor() {
    this.name = `${faker.person.firstName()} (${faker.animal.horse()})`;
    this.color = faker.color.rgb();
    this.condition = faker.number.int({ min: 60, max: 100 });
  }

  getName(): string {
    return this.name;
  }

  getColor(): string {
    return this.color;
  }

  getCondition(): number {
    return this.condition;
  }
}
