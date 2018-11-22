const express=require('express');
import * as departmentService from '../service/departmentService';

const router = express();

router.get('/getDepartment', (req, res, next) => {
  departmentService
    .getAllDepartment()
    .then(data => res.status(201).send({ data:data.rows }))
    .catch(err => next(err));
});
// router.post('/'department')router.post('/'department')

export default router;