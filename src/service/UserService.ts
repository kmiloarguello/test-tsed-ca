import { Service } from "@tsed/di";

import { User } from "../models";

@Service()
export class UserService {
  async save(user: User): Promise<User> {
    return user;
  }
}
