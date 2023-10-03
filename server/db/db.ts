import connection from './connection.ts'

export function saveLocationById(
  coord: { id: number; x: number; y: number },
  db = connection
) {
  return db('locations').insert({ id: coord.id, x: coord.x, y: coord.y })
}

export function getLocationById(id: number, db = connection) {
  return db('locations').where('id', id).first()
}
