import http from './HttpTransport'

describe('HttpTransport test', () => {
  it('GET request', async () => {
    const data = await http.get(
      'https://jsonplaceholder.typicode.com/comments',
      { data: { postId: 1, id: 1 } }
    )

    const result = JSON.parse(data.response)[0]

    expect(result).toHaveProperty('postId', 1)
    expect(result).toHaveProperty('id', 1)
    expect(result).toHaveProperty('name', 'id labore ex et quam laborum')
  })

  it('POST request', async () => {
    const data = await http.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        data: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        })
      }
    )

    const result = JSON.parse(data.response)

    expect(result).toHaveProperty('title', 'foo')
    expect(result).toHaveProperty('body', 'bar')
    expect(result).toHaveProperty('userId', 1)
    expect(result).toHaveProperty('id', 101)
  })
})
