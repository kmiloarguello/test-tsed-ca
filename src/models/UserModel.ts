import { Property, Required } from "@tsed/schema";

export class User {
  @Property()
  @Required()
  email: string;

  @Property()
  @Required()
  password: string;

  @Property()
  @Required()
  firstName: string;

  @Property()
  @Required()
  lastName: string;
}
