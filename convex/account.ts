import { GenericMutationCtx } from "convex/server";
import { mutation } from "./_generated/server";

//TODO: if already exist, just redirect to the destinatio n, if newly created, create animation and welcome then redirect to destination

const fetchUserByEmail = async ({
  email,
  ctx,
}: {
  email: string;
  ctx: any;
}) => {
  return await ctx.db
    .query("users")
    .withIndex("by_email", (q: any) => q.eq("email", email))
    .first();
};

const fetchUserById = async ({ id, ctx }: { id: string; ctx: any }) => {
  return await ctx.db.get(id);
};

const createAccountWithNameAndEmail = async (
  ctx: any,
  name: string,
  email: string
) => {
  return await ctx.db.insert("users", {
    name,
    email,
  });
};

export const signInCreateAccount = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("User not authenticated");
    }
    if (!identity.email) {
      throw new Error("User email not found");
    }
    if (!identity.name) {
      throw new Error("User name not found");
    }

    const user = await fetchUserByEmail({ email: identity.email, ctx });
    if (user) {
      return {
        user,
        new: false,
      };
    }

    const createdAccountId = await createAccountWithNameAndEmail(
      ctx,
      identity.name,
      identity.email
    );

    console.log(createdAccountId);
    const createdAccountUser = await fetchUserById({
      id: createdAccountId,
      ctx,
    });
    return {
      user: createdAccountUser,
      new: true,
    };
  },
});
