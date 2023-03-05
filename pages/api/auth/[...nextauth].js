import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import "dotenv/config";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    })
  ]
}
export default NextAuth(authOptions)