import { User } from "src/models";
import { UserService } from "src/service";

import { Controller, Get, Post } from "@tsed/common";
import { BodyParams, PathParams } from "@tsed/platform-params";

@Controller("/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/signup")
  register(@BodyParams() user: User): Promise<User> {
    return this.userService.save(user);
  }

  @Post("/login")
  login(
    @BodyParams() email: string,
    @BodyParams() password: string
  ): Promise<User> {
    return this.userService.login(email, password);
  }

  @Post("/logout")
  logout(@BodyParams() user: User): User {
    return user;
  }

  @Get("/")
  async getAll(): Promise<User[]> {
    return [];
  }

  @Get("/:id")
  async get(@PathParams() id: string): Promise<User> {
    return this.userService.findOne(id);
  }
}
