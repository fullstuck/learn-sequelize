const models = require('../../models')

const employee = models.employee;

const controller = {
    get: (req, res, next) => {
        employee
            .findAll()
            .then(employees => {
                res.send({
                    employees
                });
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    getOneById: (req, res, next) => {
        const id = Number(req.params.id)
        employee
            .findById(id)
            .then(employee => {
                if (employee) {
                    res.send({
                        employee
                    })
                } else {
                    res.send({
                        message: `Employee not found`
                    })
                }
            }).catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    insert: (req, res, next) => {
        employee
            .build({
                birth_date: req.body.birth_date,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                gender: req.body.gender,
                hire_date: req.body.hire_date,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .save()
            .then(employee => {
                res.send({
                    employee
                })
            })
            .catch(err => {
                res.status(400).send({
                    error: err.stack
                })
            })
    },

    update: (req, res, next) => {
        const id = Number(req.params.id)
        employee
            .update({
                birth_date: req.body.birth_date,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                gender: req.body.gender,
                hire_date: req.body.hire_date,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                where: {
                    emp_no: id
                }
            })
            .then(employee => {
                res.send({
                    employee
                })
            })
            .catch(err => {
                res.status(400).send({
                    error: err.stack
                })
            })
    },

    delete: (req, res, next) => {
        const id = Number(req.params.id)
        employee
            .destroy({
                where: {
                    emp_no: id
                }
            })
            .then(employees => {
                res.send({
                    employees
                });
            })
            .catch(err => {
                res.status(400).send({
                    error: err.stack
                })
            })
    },

    create: (req, res, next) => {
        res.send({
            employees
        });
    }
}

module.exports = controller