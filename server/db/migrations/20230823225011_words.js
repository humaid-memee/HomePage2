export function up(knex) {
  return knex.schema.createTable('words', (table) => {
    table.increments('id')
    table.string('word')
    table.integer('level')
    table.boolean('user')
  })
}

export function down(knex) {
  return knex.schema.dropTable('words')
}
