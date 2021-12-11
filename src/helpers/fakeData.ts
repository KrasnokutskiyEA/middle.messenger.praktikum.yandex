export const chats = [
  {
    id: '1',
    name: 'Steve Jordan',
    isGroup: false,
    lastMessage: "Hi, how are you? I'd like to introduce you to my new friend who knows a lot of interesting stuff about political situation in a middle eastern region",
    ownerLastMessage: 'Steve Jordan',
    counterUnreadMessages: 1,
    avatar: null,
    updatedAt: '2021-05-27T19:18:15.563Z'
  },
  {
    id: '2',
    name: 'Peter Ganapolsky',
    isGroup: false,
    lastMessage: 'What are you talking about?',
    ownerLastMessage: 'Peter Ganapolsky',
    counterUnreadMessages: 0,
    avatar: null,
    updatedAt: '2021-05-24T15:18:02.563Z'
  },
  {
    id: '3',
    name: 'Work',
    isGroup: true,
    lastMessage: 'I assume, we are going to fail deadline. Again.',
    ownerLastMessage: 'George Hampton',
    counterUnreadMessages: 0,
    avatar: null,
    updatedAt: '2021-05-23T10:21:07.563Z'
  }
]

export const messages = [
  {
    id: '1',
    authorId: 'a1',
    authorName: 'Steve Jordan',
    ownerId: 'a1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, nibh sed condimentum dapibus, erat nunc suscipit sem, sed sollicitudin nisi velit non justo. Nulla luctus ligula ac laoreet viverra. Duis quis pellentesque nunc. Phasellus pretium neque orci, et tincidunt risus pretium vel. Vivamus sagittis, lectus quis sollicitudin sagittis, lacus risus faucibus leo, id condimentum arcu magna sed massa. Donec sodales vestibulum erat dapibus viverr Nulla varius in enim at fringilla. Duis at arcu consequat, pulvinar ante non, vehicula felis. Ut at sapien eu sem interdum ultricies id id neque. Aenean non enim iaculis, tincidunt augue vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: null,
    date: '2021-05-24T15:17:02.563Z'
  },
  {
    id: '2',
    authorId: 'a2',
    authorName: 'Peter Ganapolsky',
    ownerId: 'a1',
    text: 'Man, who are you?',
    image: null,
    date: '2021-05-24T15:18:02.563Z'
  },
  {
    id: '3',
    authorId: 'a1',
    authorName: 'Steve Jordan',
    ownerId: 'a1',
    text: 'I am your creator',
    image: null,
    date: '2021-05-24T15:19:02.563Z'
  },
  {
    id: '4',
    authorId: 'a1',
    authorName: 'Steve Jordan',
    ownerId: 'a1',
    text: 'I created you two days ago...',
    image: null,
    date: '2021-05-27T15:20:02.563Z'
  },
  {
    id: '5',
    authorId: 'a2',
    authorName: 'Peter Ganapolsky',
    ownerId: 'a1',
    text: "Ok... I'm calling 911. Seems you need help!",
    image: null,
    date: '2021-05-28T15:21:02.563Z'
  }
]
