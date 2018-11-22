
exports.up = function(knex, Promise) {
    return knex.schema.createTable("department", table => {
      table.increments("id").primary();
      table.text("name").notNullable();
      table.text("description").notNullable();
      table
        .timestamp("created_at")
        .notNullable()
        .default(knex.raw("now()"));
      table
        .timestamp("updated_at")
        .notNullable()
        .default(knex.raw("now()"));
    });
  };
  
  exports.down = function(knex, Promise) {
  return knex.schema.dropTable('deparment');
  
  };
  