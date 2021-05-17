---
id: bots
title: Bots
sidebar_label: Bots
description: Get information about bots listed on dbots.me
slug: /api/bots
---

---

## Get Bot

```bash
GET /bots/:bot_id
```

### Response Fields
| Field                 | Type                                                                          | Description                                               |
| --------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| id                    | [`snowflake`](https://discord.com/developers/docs/reference#snowflakes)       | The id of the bot                                         |
| username              | `string`                                                                      | The username of the bot                                   |
| discriminator         | `string`                                                                      | The discriminator of the bot                              |
| avatar                | `string`                                                                      | The avatar of the bot                                     |
| avatar_url            | `string`                                                                      | The avatar url of the bot                                 |
| status                | `string`                                                                      | The status of the bot (pending, active, inactive, banned) |
| custombotname         | `string`                                                                      | The custom name of the bot                                |
| nsfw                  | `boolean`                                                                     | Is the bot nsfw?                                          |
| certified             | `boolean`                                                                     | Is the bot certified?                                     |
| partnered             | `boolean`                                                                     | Is the bot partnered?                                     |
| owners                | [`snowflake[]`](https://discord.com/developers/docs/reference#snowflakes)     | Snowflake list of the bot owners                          |
| tags                  |                                                                               | List of the bot tags                                      |
| tags.id               | `integer`                                                                     | The id of the tag                                         |
| tags.name             | `string`                                                                      | The name of the tag                                       |
| tags.friendlyname     | `string`                                                                      | The friendly name of the tag                              |
| prefix                | `string`                                                                      | The prefix of the bot                                     |
| invite                | `string`                                                                      | The invite url of the bot                                 |
| website               | `string`                                                                      | The website url of the bot                                |
| repository            | `string`                                                                      | The repository url of the bot                             |
| supportdiscord        | `string`                                                                      | The support discord code of the bot                       |
| supportdiscord_url    | `string`                                                                      | The support discord url of the bot                        |
| cardbackground        | `string`                                                                      | The card background url of the bot                        |
| shortdesc             | `string`                                                                      | The short description of the bot                          |
| longdesc              | `string`                                                                      | The long description of the bot                           |
| registered            | `date (ISO8601)`                                                              | Date when the bot registered on dbots.me                  |
| cache_date            | `date (ISO8601)`                                                              | Date when the response was cached                         |

### Example Response

```json title="/bots/437618149505105920"
{
  "id": "437618149505105920",
  "username": "EasyPoll",
  "discriminator": "3712",
  "avatar": "/avatars/437618149505105920/ccd040b6f6f979628bf0ddaf48d2b362.png",
  "avatar_url": "https://cdn.discordapp.com/avatars/437618149505105920/ccd040b6f6f979628bf0ddaf48d2b362.png",
  "status": "active",
  "custombotname": "easypoll",
  "nsfw": false,
  "certified": true,
  "partnered": true,
  "owners": [
    "231091710195662848"
  ],
  "tags": [
    {
      "id": 18,
      "name": "Looking For Game",
      "friendlyname": "looking+for+game"
    },
    {
      "id": 21,
      "name": "Moderation",
      "friendlyname": "moderation"
    },
    {
      "id": 24,
      "name": "Poll",
      "friendlyname": "poll"
    },
    {
      "id": 32,
      "name": "Statistics",
      "friendlyname": "statistics"
    },
    {
      "id": 37,
      "name": "Utility",
      "friendlyname": "utility"
    }
  ],
  "prefix": "ep!",
  "invite": "https://discord.com/oauth2/authorize?client_id=437618149505105920&permissions=337984&redirect_uri=https%3A%2F%2Feasypoll.me%2Fdiscord&response_type=code&scope=bot%20applications.commands",
  "website": "https://easypoll.me/",
  "repository": "https://github.com/dbots-me/easypoll-bot/",
  "supportdiscord": "JnuXNCv",
  "supportdiscord_url": "https://discord.gg/JnuXNCv",
  "cardbackground": "",
  "shortdesc": "With EasyPoll, a Discord Poll Bot, they can easily create polls and your members can vote by clicking on a reaction very easily and quickly.",
  "longdesc": "",
  "registered": "2021-04-01T23:20:11+00:00",
  "cache_date": "2021-04-06T22:04:20+00:00"
}
```


---


## Bot Stats

```bash
GET /bots/:bot_id/stats
```

### Response Fields
| Field                         | Type                                                                          | Description                                                   |
| ----------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------- |
| id                            | [`snowflake`](https://discord.com/developers/docs/reference#snowflakes)       | The id of the bot                                             |
| server_count                  | `integer`                                                                     | The server count of the bot                                   |
| user_count                    | `integer`                                                                     | The user count of the bot                                     |
| voiceconnections_count        | `integer`                                                                     | The voice connections count of the bot                        |
| shards_count                  | `integer`                                                                     | The shards count of the bot                                   |
| shards                        |                                                                               | The shards list of the bot                                    |
| shards.shard_id               | `integer`                                                                     | The id of the shard                                           |
| shards.server_count           | `integer`                                                                     | The server count of the shard                                 |
| shards.user_count             | `integer`                                                                     | The user count of the shard                                   |
| shards.voiceconnections_count | `integer`                                                                     | The voice connections count of the shard                      |
| bot_status                    | `string`                                                                      | The discord status of the bot (OFFLINE, ONLINE, IDLE, DND)    |
| bot_lastseen                  | `date (ISO8601)`                                                              | When the bot was last seen (bot_status != OFFLINE)            |
| bot_lastfetch                 | `date (ISO8601)`                                                              | When the bot was last checked                                 |
| votes                         | `integer`                                                                     | The number of votes for the bot                               |
| monthlyvotes                  | `integer`                                                                     | The number of votes this month for the bot                    |
| cache_date                    | `date (ISO8601)`                                                              | Date when the response was cached                             |

### Example Response

```json title="/bots/437618149505105920/stats"
{
  "id": "437618149505105920",
  "server_count": 1495,
  "user_count": 267363,
  "voiceconnections_count": 39,
  "shards_count": 3,
  "shards": [
    {
        "shard_id": 0,
        "server_count": 539,
        "user_count": 94923,
        "voiceconnections_count": 19,
        "updated": "2021-04-01T22:13:09+00:00"
    },
    {
        "shard_id": 1,
        "server_count": 495,
        "user_count": 104019,
        "voiceconnections_count": 4,
        "updated": "2021-04-01T22:14:46+00:00"
    },
    {
        "shard_id": 2,
        "server_count": 461,
        "user_count": 68421,
        "voiceconnections_count": 16,
        "updated": "2021-04-01T22:16:54+00:00"
    }
  ],
  "bot_status": "ONLINE",
  "bot_lastseen": "2021-04-01T23:20:11+00:00",
  "bot_lastfetch": "2021-04-01T23:20:11+00:00",
  "votes": 483,
  "monthlyvotes": 59,
  "cache_date": "2021-04-06T22:25:11+00:00"
}
```


---


## Update Bot Stats

```bash
POST /bots/:bot_id/stats
```

### Post Body
| Field                     | Type          | Description                                                                                                                                                                                   | Required  |
| ------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| server_count              | `integer`     | The server count of the bot - If the `shard_id` is provided, `server_count` is specified with the number of servers of this shard (Our system automatically adds up all shard server counts)  | ✅         |
| user_count                | `integer`     | The user count of the bot                                                                                                                                                                  | ❌         |
| voiceconnections_count    | `integer`     | The voiceconnections count of the bot                                                                                                                                                                  | ❌         |
| shards_count              | `integer`     | The shards count of the bot                                                                                                                                                                  | ❌         |
| shard_id                  | `integer`     | The current zero-based bot shard id                                                                                                                                                           | ❌         |

### Example Response

```json title="/bots/437618149505105920/stats"
{
  "code": 200,
  "message": "The request completed successfully."
}
```

:::info
[Authentication](/api/getting-started#authentication) is required for this request!
:::


---


## Last Votes (Limit 1.000)

```bash
GET /bots/:bot_id/votes
```

### Response Fields
| Field                 | Type                                                                          | Description                       |
| --------------------- | ----------------------------------------------------------------------------- | --------------------------------- |
| votes                 |                                                                               | The list of votes                 |
| votes.id              | [`snowflake`](https://discord.com/developers/docs/reference#snowflakes)       | The id of the user                |
| votes.username        | `string`                                                                      | The username of the user          |
| votes.discriminator   | `string`                                                                      | The discriminator of the user     |
| votes.avatar          | `string`                                                                      | The avatar of the user            |
| votes.avatar_url      | `string`                                                                      | The avatar url of the user        |
| votes.date            | `date (ISO8601)`                                                              | The date when the vote was made   |
| cache_date            | `date (ISO8601)`                                                              | Date when the response was cached |

### Example Response

```json title="/bots/437618149505105920/votes"
{
    "votes": [
        {
            "id": "231091710195662848",
            "username": "Floxiii",
            "discriminator": "0001",
            "avatar": "/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "avatar_url": "https://cdn.discordapp.com/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "date": "2021-04-12T07:57:04+00:00"
        },
        {
            "id": "290893007044083714",
            "username": "RealPanter",
            "discriminator": "6055",
            "avatar": "/avatars/290893007044083714/4c437784db1c4e22555f3a267e215dfd.png",
            "avatar_url": "https://cdn.discordapp.com/avatars/290893007044083714/4c437784db1c4e22555f3a267e215dfd.png",
            "date": "2021-04-10T13:34:00+00:00"
        },
        {
            "id": "330148908531580928",
            "username": "AdriDoesThings",
            "discriminator": "1260",
            "avatar": "/avatars/330148908531580928/945f5c329da480774a124f3d116795d6.png",
            "avatar_url": "https://cdn.discordapp.com/avatars/330148908531580928/945f5c329da480774a124f3d116795d6.png",
            "date": "2021-04-09T22:04:53+00:00"
        },
        {
            "id": "386564352788004864",
            "username": "NurKai_",
            "discriminator": "9061",
            "avatar": "/avatars/386564352788004864/2304fe58225f4a623b21671bd97fca7f.png",
            "avatar_url": "https://cdn.discordapp.com/avatars/386564352788004864/2304fe58225f4a623b21671bd97fca7f.png",
            "date": "2021-04-09T13:43:31+00:00"
        }
    ],
    "cache_date": "2021-05-14T12:56:51+00:00"
}
```

:::info
[Authentication](/api/getting-started#authentication) is required for this request!
:::


---


## Last Votes by User (Limit 1.000)

```bash
GET /bots/:bot_id/votes/:user_id
```

### Response Fields
| Field                 | Type                                                                          | Description                       |
| --------------------- | ----------------------------------------------------------------------------- | --------------------------------- |
| votes                 |                                                                               | The list of votes from the user   |
| votes.id              | [`snowflake`](https://discord.com/developers/docs/reference#snowflakes)       | The id of the user                |
| votes.username        | `string`                                                                      | The username of the user          |
| votes.discriminator   | `string`                                                                      | The discriminator of the user     |
| votes.avatar          | `string`                                                                      | The avatar of the user            |
| votes.avatar_url      | `string`                                                                      | The avatar url of the user        |
| votes.date            | `date (ISO8601)`                                                              | The date when the vote was made   |
| cache_date            | `date (ISO8601)`                                                              | Date when the response was cached |

### Example Response

```json title="/bots/437618149505105920/votes/231091710195662848"
{
    "votes": [
        {
            "id": "231091710195662848",
            "username": "Floxiii",
            "discriminator": "0001",
            "avatar": "/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "avatar_url": "https://cdn.discordapp.com/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "date": "2021-05-13T20:44:22+00:00"
        },
        {
            "id": "231091710195662848",
            "username": "Floxiii",
            "discriminator": "0001",
            "avatar": "/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "avatar_url": "https://cdn.discordapp.com/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "date": "2021-05-12T07:22:15+00:00"
        },
        {
            "id": "231091710195662848",
            "username": "Floxiii",
            "discriminator": "0001",
            "avatar": "/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "avatar_url": "https://cdn.discordapp.com/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
            "date": "2021-05-07T22:34:39+00:00"
        }
    ],
    "cache_date": "2021-05-14T12:53:23+00:00"
}
```

:::info
[Authentication](/api/getting-started#authentication) is required for this request!
:::
