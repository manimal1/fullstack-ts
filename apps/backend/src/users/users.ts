import { builder } from "../../pothos/builder";
import prisma from "../../prisma";

// Define the User type based on Prisma model
builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeInt("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
  }),
});

// Define a query to get all users
builder.queryType({
  fields: (t) => ({
    users: t.prismaField({
      type: ["User"],
      resolve: async (query, root, args, ctx, info) =>
        prisma.user.findMany({ ...query }),
    }),
  }),
});
