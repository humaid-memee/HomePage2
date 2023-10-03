import request from 'superagent'

const rootUrl = '/api/v1/coords'

export async function getCoordsById(id: number) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body
}

export async function saveCoord(coord: { id: number; x: number; y: number }) {
  console.log('api save hit')
  await request.post(`${rootUrl}`).send(coord)
}
