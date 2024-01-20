import { User } from "src/models";
import { emailAndPasswordAreValid } from "src/utils";
import { Repository } from "typeorm";

import { Controller, Get, Inject, Post } from "@tsed/common";
import { BodyParams, PathParams } from "@tsed/platform-params";

@Controller("/users")
export class UserController {
  constructor(
    @Inject(User) private readonly userRepository: Repository<User>
  ) {}

  @Post("/signup")
  register(@BodyParams() user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  @Post("/login")
  login(
    @BodyParams() email: string,
    @BodyParams() password: string
  ): Promise<any> | { error: string } {
    const user = this.userRepository.findOne({ where: { email } });
    if (user && emailAndPasswordAreValid(email, password)) {
      const res = { ...user, token: "token" };
      return res;
    } else {
      return { error: "Invalid credentials" };
    }
  }

  @Post("/logout")
  logout(@BodyParams() user: User): User {
    return user;
  }

  @Get("/")
  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  @Get("/:id")
  async get(@PathParams() id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id: Number(id) } });
  }
}
