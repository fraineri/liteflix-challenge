import {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters";
import { createUser, getUserByAccount } from "@/services/auth.service";
import { Awaitable, User } from "next-auth";

export function BackendAdapter(): Adapter {
  return {
    createUser(user: Omit<AdapterUser, "id">): Awaitable<AdapterUser> {
      return createUser({ name: user.name, email: user.email } as User);
    },
    getUser(id: string): Awaitable<AdapterUser | null> {
      console.log(">>>getUser", JSON.stringify(id, null, 2));
      return null;
    },
    getUserByEmail(email: string): Awaitable<AdapterUser | null> {
      console.log(">>>getUserByEmail", JSON.stringify(email, null, 2));
      return null;
    },
    getUserByAccount({
      providerAccountId,
      provider,
    }): Awaitable<AdapterUser | null> {
      return getUserByAccount(provider, providerAccountId);
    },
    updateUser(user): Awaitable<AdapterUser> {
      console.log(">>>updateUser", JSON.stringify(user, null, 2));
      return {} as Awaitable<AdapterUser>;
    },
    deleteUser(
      userId
    ): Promise<void> | Awaitable<AdapterUser | null | undefined> {
      console.log(">>>deleteUser", JSON.stringify(userId, null, 2));
      return;
    },
    linkAccount(
      account
    ): Promise<void> | Awaitable<AdapterAccount | null | undefined> {
      console.log(">>>linkAccount", JSON.stringify(account, null, 2));
      return;
    },
    unlinkAccount({
      providerAccountId,
      provider,
    }): Promise<void> | Awaitable<AdapterAccount | undefined> {
      console.log(
        ">>>unlinkAccount A",
        JSON.stringify(providerAccountId, null, 2)
      );
      console.log(">>>unlinkAccount P", JSON.stringify(provider, null, 2));

      return;
    },
    createSession({
      sessionToken,
      userId,
      expires,
    }): Awaitable<AdapterSession> {
      console.log(">>>createSession", JSON.stringify(sessionToken, null, 2));
      console.log(">>>createSession", JSON.stringify(userId, null, 2));
      console.log(">>>createSession", JSON.stringify(expires, null, 2));
      return {} as Awaitable<AdapterSession>;
    },
    getSessionAndUser(
      sessionToken
    ): Awaitable<{ session: AdapterSession; user: AdapterUser } | null> {
      console.log(
        ">>>getSessionAndUser",
        JSON.stringify(sessionToken, null, 2)
      );
      return null;
    },
    updateSession({
      sessionToken,
    }): Awaitable<AdapterSession | null | undefined> {
      console.log(">>>updateSession", JSON.stringify(sessionToken, null, 2));

      return;
    },
    deleteSession(
      sessionToken
    ): Promise<void> | Awaitable<AdapterSession | null | undefined> {
      console.log(">>>deleteSession", JSON.stringify(sessionToken, null, 2));
      return;
    },
    createVerificationToken({
      identifier,
      expires,
      token,
    }): Awaitable<VerificationToken | null | undefined> {
      console.log(
        ">>>createVerificationToken",
        JSON.stringify(identifier, null, 2)
      );
      console.log(
        ">>>createVerificationToken",
        JSON.stringify(expires, null, 2)
      );
      console.log(">>>createVerificationToken", JSON.stringify(token, null, 2));

      return;
    },
    useVerificationToken({
      identifier,
      token,
    }): Awaitable<VerificationToken | null> {
      console.log(
        ">>>useVerificationToken",
        JSON.stringify(identifier, null, 2)
      );
      console.log(">>>useVerificationToken", JSON.stringify(token, null, 2));

      return null;
    },
  };
}
