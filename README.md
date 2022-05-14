## Description

Tiny messenger app almost without 3-rd party js-libraries.

Supported features:

- Sign Up, Sign In, Logout;
- Edit profile;
- Add/Delete Chatroom, Add/Remove user from created chatroom;
- Leave chat;
- Get/send messages;

## Install

- `npm i` — get required npm-packages;
- `npm run build` — make production build;
- `npm run build:image` — make docker-image;
- `npm run docker` — dockerize app and run it on port 3000;
- `npm run dev` — run in development mode (webpack dev server);
- `npm run test` — run tests;
- `npm run lint` — check lint errors;

## Figma Template

https://www.figma.com/file/kqWKWcB5G9ftqEFnkh2Sr9/Chat-(Copy)?node-id=0%3A1

## App published on Netlify
https://elated-aryabhata-ab7239.netlify.app

## App published on Heroku
https://chat-app-krasnokutskiy.herokuapp.com/

## API Documentation

https://ya-praktikum.tech/api/v2/swagger/#/

## Pull request SPRINT 3

https://github.com/KrasnokutskiyEA/middle.messenger.praktikum.yandex/pull/8

- Router (`classes/Route.ts`, `classes/Router.ts`)
- Api, Controllers layer added
- Store (`Store.ts`)
- Websocket
- Loading chat messages on scroll
- Unit-tests
- Security: xssFilter, rate-limiter (helmet)

## Pull request SPRINT 4

https://github.com/KrasnokutskiyEA/middle.messenger.praktikum.yandex/pull/11

- Using Webpack instead of Parcel
- Packaged App in a Docker image
- Deploy on Heroku
- Added pre-commit (husky)

## todo

- add avatars to messages on chat page. Improve avatars everywhere;
- add chatroom search functionality on a main page;
- send files to chat
- fix time format in messages and chats
- Use login instead of id to Add user/Remove user from chat.


