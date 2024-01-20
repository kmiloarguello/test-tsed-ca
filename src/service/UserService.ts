import { emailAndPasswordAreValid } from "src/utils";

import { Service } from "@tsed/di";

import { User } from "../models";

@Service()
export class UserService {
  async save(user: User): Promise<User> {
    return user;
  }
  // login
  async login(email: string, password: string): Promise<any> {
    if (emailAndPasswordAreValid(email, password)) {
      const currentUser = new User();
      const returnedUser = { ...currentUser, token: "token" };
      return returnedUser;
    }
  }

  async findOne(id: string): Promise<User> {
    return new User();
  }
}
