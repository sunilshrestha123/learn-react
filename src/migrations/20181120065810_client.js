
exports.up = function(knex, Promise) {
    return knex.schema.createTable("patient",table=>{
table.integer('id').primary();
table.text('name').notNullable();
table.text('gender').notNullable();
table.date('birthdate').notNullable();
table.text('address').notNullable();
table.text('phone').notNullable();
table
.timestamp("created_at")
.notNullable()
.default(knex.raw("now()"));
table
.timestamp("updated_at")
.notNullable()
.default(knex.raw("now()"))


    });
  
};

    
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('patient');
    
  
};
