import request from 'superagent'

const rootUrl = '/api/v1/coord'

export async function getCoordsById(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function saveCoord(coord: { id: number; x: number; y: number }) {
  await request.post(`${rootUrl}`).send(coord)
}
