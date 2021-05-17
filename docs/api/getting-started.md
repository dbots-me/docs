---
id: getting-started
title: Getting started
sidebar_label: Getting started
description: Learn how to use the dbots.me API
slug: /api/getting-started
---

---

## Base URL

```bash
https://api.dbots.me/v1/
```


---


## Authentication

For some of our API functions you have to authenticate yourself.
Each bot has its own token for authentication.
You can find this token on your bot page in the "Edit Bot" section.

```json title="Headers"
Authorization: <DBOTS.ME BOT TOKEN>
```


---


## Rate Limit

Our API is protected with a rate limit to prevent it from spam requests.
The limit ensures that our api is not overloaded or abused.
Attempts to bypass this limit will be banned from our platform.

| Route | Request Type  | Max Requests  |
| ----- | ------------- | ------------- |
| `*`   | `*`           | 60/minute     |

### Hitting the Rate Limit
If you have reached the RateLimit you will receive an HTTP 429 Error and are temporarily blocked for new requests.
```json title="HTTP HEADER"
retry-after: 3600
retry-at: 2021-04-25T22:30:56+00:00
```

| Field         | Type              | Description                                               |
| ------------- | ----------------- | --------------------------------------------------------- |
| `retry-after` | `integer`         | The time in seconds until you can send another request    |
| `retry-at`    | `date (ISO8601)`  | The date when you can send another request                |


---


## Response Caching

Some API responses are cached by our system and reset after a specified time.
This is to protect our API from overloading and reduce response time.
When a response was cached can be seen in the response at `cache_date`.

| Route                         | Request Type  | Cache Time    |
| ----------------------------- | ------------- | ------------- |
| `bots/:bot_id`                | `GET`         | 3 minutes     |
| `bots/:bot_id/stats`          | `GET`         | 1 minute      |
| `bots/:bot_id/votes`          | `GET`         | 1 minute      |
| `bots/:bot_id/votes/:user_id` | `GET`         | 1 minute      |
| `users/:user_id`              | `GET`         | 3 minutes     |


---


## Response Codes
Our API returns a status code for each request.
For this the default [HTTP codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used.

| Code  | Type      | Message                                                                   |
| ----- | --------- | ------------------------------------------------------------------------- |
| 200   | success   | The request completed successfully                                        |
| 400   | error     | The request was incorrectly formatted                                     |
| 401   | error     | The [Authorization](#authentication) header was missing or invalid                         |
| 403   | error     | The passed [Authorization](#authentication) token did not have permission for the resource |
| 404   | error     | The requested path or function was not found                              |
| 405   | error     | The requested method is not allowed                                       |
| 429   | error     | The request has reached the [Rate Limit](#rate-limit) and has been blocked                |
| 5xx   | error     | The server has an error processing your request                           |