import { blob2Base64 } from '../lib'

it('test blob2Base64', async () => {
  const blob = new Blob(['hello world'])
  const base64 = await blob2Base64(blob)
  expect(base64.toString().length).toBeGreaterThan(0)
})
