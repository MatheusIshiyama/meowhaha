import { animatedEmojiIds, staticEmojiIds } from '@/config/discord/emojis';
import { ChannelDescription } from '@/types/discord';

export const channelIds: Record<string, string> = {
  'announcements': '1387041828313890979',
  'arrivals': '1386231606695559188',
  'bot-commands': '1386215391310778528',
  'booster-count': '1388422157301977209',
  'cat-gpt': '1386215448617549924',
  'cat-snaps': '1386214709279330335',
  'choose-your-cat': '1388924911359365200',
  'deep-meows': '1387047186692440094',
  'design-dump': '1387047738348146799',
  'gg-chat': '1386226744771608586',
  'git-cat': '1387050828644483163',
  'introduce-meowself': '1387041328935993375',
  'lfg-meowers': '1386215369961766952',
  'members-count': '1386226043320537190',
  'meme-meltdown': '1387046990214463641',
  'meow-art': '1387047716194095135',
  'meow-chat': '1386214684293861376',
  'meow-edits': '1387047761072885910',
  'meow-fm': '1387049333500809266',
  'meow-meow': '1387049587893866686',
  'meow-nights': '1387048497932402838',
  'meow-overflow': '1386215466888069240',
  'read-the-rules': '1386880928374067313',
  'resources': '1387051172090876006',
  'server-mood': '1386219879673237571',
  'start-here': '1386212820382777489',
  'welcome': '1386229940130676767',
} as const;

export const channelDescriptions: ChannelDescription[] = [
  {
    id: channelIds['introduce-meowself'],
    title: `${animatedEmojiIds.panda_wave} Introduce Meowself`,
    content: 'Say hi and share your vibe. New cats, step into the chaos!',
  },
  {
    id: channelIds['announcements'],
    title: `${animatedEmojiIds.artist_bark} Announcements`,
    content: 'All the big stuff lands here. Stay tuned, stay meownformed.',
  },
  {
    id: channelIds['meow-chat'],
    title: `${animatedEmojiIds.meow_meow} Meow Chat`,
    content: 'The main hangout for all things meow. Talk, scream, vibe—let the chaos begin.',
  },
  {
    id: channelIds['bot-commands'],
    title: `${animatedEmojiIds.smash_keyboard} Bot Commands`,
    content: 'Use your commands here! Summon bots, test features, and unleash the code chaos.',
  },
  {
    id: channelIds['meme-meltdown'],
    title: `${staticEmojiIds.squirl} Meme Meltdown`,
    content: 'Unleash your cursed, chaotic, or cat-approved memes. No dignity, just pixels.',
  },
  {
    id: channelIds['cat-snaps'],
    title: `${animatedEmojiIds.admire_cat} Cat Snaps`,
    content: 'Show off your cats, plushies, or creatures of chaos. Every snap is a purrtrait.',
  },
  {
    id: channelIds['deep-meows'],
    title: `${staticEmojiIds.tired_cat} Deep Meows`,
    content: 'For late-night thoughts, existential catspiracies, and emotional chaos. Meow it out.',
  },
  {
    id: channelIds['meow-nights'],
    title: `${animatedEmojiIds.fish_pog} Meow Nights`,
    content: 'Gather for game nights and multiplayer mayhem. Fluff up your team and press start.',
  },
  {
    id: channelIds['gg-chat'],
    title: `${animatedEmojiIds.burn} GG Chat`,
    content: 'The place for all things gaming. No exceptions, no excuses.',
  },
  {
    id: channelIds['lfg-meowers'],
    title: `${animatedEmojiIds.angry_ping} LFG Meowers`,
    content: 'Looking for a group to play with? Post here and find your squad.',
  },
  {
    id: channelIds['meow-art'],
    title: `${animatedEmojiIds.clap_cat} Meow Art`,
    content: 'Show off your art, screenshots, and creative chaos. Show off your skills.',
  },
  {
    id: channelIds['design-dump'],
    title: `${animatedEmojiIds.fox_wiggle} Design Dump`,
    content: 'Drop your UI, graphics, layouts, and pretty pixels. Feedback or flex—it’s all welcome.',
  },
  {
    id: channelIds['meow-edits'],
    title: `${staticEmojiIds.cat_heart} Meow Edits`,
    content: 'Post your memes, video cuts, or chaotic cat edits. Creativity meets unhinged energy.',
  },
  {
    id: channelIds['cat-gpt'],
    title: `${animatedEmojiIds.cat_drinking} Cat GPT`,
    content: 'Talk code, share commits, break things (responsibly). Where dev cats push and purr.',
  },
  {
    id: channelIds['meow-overflow'],
    title: `${staticEmojiIds.panic_cat} Meow Overflow`,
    content: 'Ask questions, share answers, and debug the fluff outta your code. No judgment, just meows.',
  },
  {
    id: channelIds['meow-fm'],
    title: `${animatedEmojiIds.dance} Meow FM`,
    content: 'Share music, playlists, and audio chaos. From lo-fi purrs to screamy meows.',
  },
] as const;
