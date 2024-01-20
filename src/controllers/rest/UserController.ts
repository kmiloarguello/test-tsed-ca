import { User } from "src/models";

import { Controller, Post } from "@tsed/common";
import { BodyParams } from "@tsed/platform-params";

@Controller("/users")
export class UserController {
  @Post("/signup")
  register(@BodyParams() user: User): User {
    return user;
  }

  @Post("/login")
  login(@BodyParams() email: string, @BodyParams() password: string): User {
    const user = new User();
    return user;
  }

  @Post("/logout")
  logout(@BodyParams() user: User): User {
    return user;
  }
}
