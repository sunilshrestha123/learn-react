
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('department').del()
    .then(function () {
      // Inserts seed entries
      return knex('department').insert([
        {name:'health',description:'these is the health department'},
        {name: 'optical',description:'these is the optical department' },
        
      ]);
    });
};
