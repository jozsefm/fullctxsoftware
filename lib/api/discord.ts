import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'

const CHANNEL_ID = '722001736587542558'
const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

// Catch the errors at the call site with the logger
export async function createDiscordInvite(uses = 1) {
  const res: any = await rest.post(
    // @ts-ignore
    Routes.channelInvites(CHANNEL_ID),
    {
      body: {
        'max_age': 0,
        'max_uses': uses,
        unique: true,
      }
    }
  )

  return `https://discord.com/invite/${res.code}`
}