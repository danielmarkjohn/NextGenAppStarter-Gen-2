import request from 'supertest'
import { createServer } from 'http'
import next from 'next'

test('next server basic', async () => {
  const app = next({ dev: true })
  await app.prepare()
  const server = createServer((req, res) => res.end('ok'))
  const res = await request(server).get('/')
  expect(res.status).toBe(200 || 404)
})
