export function up(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id')
    table.integer('x')
    table.integer('y')
  })
}

export function down(knex) {
  return knex.schema.dropTable('locations')
}
