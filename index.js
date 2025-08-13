import 'dotenv/config';
import { Client, GatewayIntentBits, Events } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, (c) => {
  console.log(`Eingeloggt als ${c.user.tag}`);
});

client.on(Events.MessageCreate, (msg) => {
  if (!msg.guild || msg.author.bot) return;
  const text = msg.content.trim().toLowerCase();
  if (text === 'hallo') {
    msg.reply('hallo');
  }
});

client.login(process.env.DISCORD_TOKEN);
