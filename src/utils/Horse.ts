import { faker } from '@faker-js/faker';

export class Horse {
  id: string;
  name: string;
  color: string;
  condition: number;

  constructor() {
    this.id = faker.string.uuid();
    this.name = `${faker.person.firstName()} (${faker.animal.horse()})`;
    this.color = faker.color.rgb();
    this.condition = faker.number.int({ min: 60, max: 100 });
  }

  getId(): string {
    return this.id;
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
