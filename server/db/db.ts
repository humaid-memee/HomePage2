import connection from './connection.ts'

import { NewWord, Word } from '../../client/model/Words.ts'

export function getAllWords(db = connection): Promise<Word[]> {
  return db<Word>('words').select()
}

export function getRandomWord(db = connection) {
  return db('words').select().orderByRaw('RANDOM()').limit(1).first()
}

export function addWord(newWord: NewWord, db = connection): Promise<Word[]> {
  return db<Word>('words').insert(newWord)
}

export function deleteWord(id: number, db = connection) {
  return db('words').where('id', id).delete()
}

export function getUserWord(db = connection): Promise<Word[]> {
  return db<Word>('words')
    .select()
    .where('user', true)
    .orderByRaw('RANDOM()')
    .limit(1)
    .first()
}
