/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('words').del()
  await knex('words').insert([
    { id: 1, word: 'simon', level: 1, user: false },
    { id: 2, word: 'neil', level: 1, user: false },
    { id: 3, word: 'yuekai', level: 1, user: false },
    { id: 4, word: 'humaid', level: 1, user: false },
    { id: 5, word: 'youn', level: 1, user: false },
    { id: 6, word: 'caleb', level: 1, user: false },
    { id: 7, word: 'laura', level: 1, user: false },
    { id: 8, word: 'ryan', level: 1, user: false },
    { id: 9, word: 'sharon', level: 1, user: false },
    { id: 10, word: 'tyrone', level: 1, user: false },
    { id: 11, word: 'hannah', level: 1, user: false },
    { id: 12, word: 'rodolfo', level: 1, user: false },
  ])
}
