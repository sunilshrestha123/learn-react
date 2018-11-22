import knex from 'knex';
import knewfile from '../knexfile';

const knexConfig = knex(knewfile);

const GET_DEPARTMENT= 'SELECT * FROM department';

class Department {
  static async getAllDepartment() {
    let results = await knexConfig.raw(GET_DEPARTMENT);
    return results;
  }
}

export default Department;