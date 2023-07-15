import { AUTH_BASE_URL } from "@/common/constants";
import { User } from "next-auth";
import axios from "axios";

const createUser = async (user: User) => {
  const res = await fetch(`${AUTH_BASE_URL}/createUser`, {
    headers: {
      accept: "application/json",
    },
  });

  return await res.json();
};
// getUser(id: any)
// getUserByEmail(email: any)
const getUserByAccount = async (provider: string, providerAccountId: string) => {
  console.log(">>>getUserByAccount LKASHDKASHDK", JSON.stringify(providerAccountId, null, 2))
  const providerParam = `provider=${provider}`
  const providerAccountParam = `accountId=${providerAccountId}`
  const params = [providerParam, providerAccountParam].join('&')

  const res = await axios.get(`${AUTH_BASE_URL}/auth/getUserByAccount?${params}`)

  return res.data ? JSON.parse(res.data) : null;
}
// updateUser(user: any)
// deleteUser(userId: any)
// linkAccount(account: any)
// unlinkAccount
// createSession
// getSessionAndUser(sessionToken: any)
// updateSession({ sessionToken }: { sessionToken: any })
// deleteSession(sessionToken: any)
// createVerificationToken
// useVerificationToken

export { createUser, getUserByAccount };
