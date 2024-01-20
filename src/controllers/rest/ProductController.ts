import { Controller } from "@tsed/di";
import { PathParams, QueryParams } from "@tsed/platform-params";
import { Delete, Get, Post, Put } from "@tsed/schema";

@Controller("/product")
export class ProductController {
  @Get("/")
  get(
    @QueryParams("search") search: string = "",
    @QueryParams("page") page: number = 0,
    @QueryParams("limit") limit: number = 20,
    @QueryParams("sort") sort: string = "ASC"
  ): string {
    return `product ${search} ${page} ${limit} ${sort}`;
  }

  @Get("/:id")
  getById(@PathParams("id") id: string): string {
    return `product ${id}`;
  }

  @Post("/")
  post() {
    return "new product";
  }

  @Put("/:id")
  put(@PathParams("id") id: string): string {
    return `update product ${id}`;
  }

  @Delete("/:id")
  delete(@PathParams("id") id: string): string {
    return `delete product ${id}`;
  }
}
