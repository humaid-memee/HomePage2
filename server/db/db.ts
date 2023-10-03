import connection from './connection.ts'

export function saveLocationById(
  db = connection,
  coord: { id: number; x: number; y: number }
) {
  return db('locations').insert({ id: coord.id, x: coord.x, y: coord.y })
}

export function getLocationById(id: number, db = connection) {
  return db('locations').select('id', id)
}
