---
id: users
title: Users
sidebar_label: Users
description: Get information about users on dbots.me
slug: /api/users
---

---

## Get User

```bash
GET /users/:user_id
```

### Response Fields
| Field                 | Type                                                                      | Description                                                                                                   |
| --------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| id                    | [`snowflake`](https://discord.com/developers/docs/reference#snowflakes)   | The id of the user                                                                                            |
| username              | `string`                                                                  | The username of the user                                                                                      |
| discriminator         | `string`                                                                  | The discriminator of the user                                                                                 |
| avatar                | `string`                                                                  | The avatar of the user                                                                                        |
| avatar_url            | `string`                                                                  | The avatar url of the user                                                                                    |
| status                | `string`                                                                  | The status of the user (active, banned)                                                                       |
| role                  | `string`                                                                  | The role of the user (User, Moderator, Administrator)                                                         |
| description           | `string`                                                                  | The description of the user                                                                                   |
| social                |                                                                           | The social links of the user                                                                                  |
| social.website        | `string`                                                                  | The website url of the user                                                                                   |
| social.github         | `string`                                                                  | The github username of the user                                                                               |
| social.twitter        | `string`                                                                  | The twitter username of the user                                                                              |
| bots                  | [`snowflake[]`](https://discord.com/developers/docs/reference#snowflakes) | Snowflake list with bots from the user                                                                        |
| discord               |                                                                           | Some Discord information                                                                                      |
| discord.flags         | `integer`                                                                 | Visit [Discord User Flags](https://discord.com/developers/docs/resources/user#user-object-user-flags)         |
| discord.premium_type  | `integer`                                                                 | Visit [Discord Premium Types](https://discord.com/developers/docs/resources/user#user-object-premium-types)   |
| registered            | `date (ISO8601)`                                                          | Date when the user registered on dbots.me                                                                     |
| cache_date            | `date (ISO8601)`                                                          | Date when the response was cached                                                                             |

### Example Response

```json title="/users/231091710195662848"
{
  "id": "231091710195662848",
  "username": "Floxiii",
  "discriminator": "0001",
  "avatar": "/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
  "avatar_url": "https://cdn.discordapp.com/avatars/231091710195662848/a89fe003842cd449c7c21600faa0ce33.png",
  "status": "active",
  "role": "Administrator",
  "description": "dbots.me Administrator & Discord Bot Developer",
  "social": {
    "website": "https://floxiii.net/",
    "github": "floxiii",
    "twitter": "floxiii_"
  },
  "bots": [
    "437618149505105920",
    "773566104202379315",
    "821097846270328894",
    "826856029365993493"
  ],
  "discord": {
    "flags": 131136,
    "premium_type": 2
  },
  "registered": "2021-04-01T19:41:32+00:00",
  "cache_date": "2021-04-27T22:03:40+00:00"
}
```