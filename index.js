const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`✅ Bot connecté en tant que ${client.user.tag}`);
  console.log(`🌐 Présent sur ${client.guilds.cache.size} serveur(s)`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('🏓 Pong !');
  }

  if (message.content === '!hello') {
    message.reply(`Salut ${message.author.username} ! 👋`);
  }
});