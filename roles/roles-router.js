const knex = require('knex');

const router = require('express').Router();


const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/rolex.db3',
  },
  useNullAsDefault: true,
  debug: true
}

const db = knex(knexConfig);

router.get('/', (req, res) => {
  db('roles')
  .then(result => res.status(200).json(result))
  .catch(error => res.status(500).json(error))
});

router.get('/:id', (req, res) => {
  db('roles')
  .where({ id: req.params.id })
  .first()
  .then(roles => {
    if (roles) {
      res.status(200).json(role)
    }else {
      res.status(404).json({ message: 'Not Found'})
    }
    
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.post('/', (req, res) => {
  db('roles')
  .insert(req.body, 'id')
  .then(ids => {
    res.status(201).json(ids)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});


router.put('/:id', (req, res) => {
  const changes = req.body;
  db('roles').where({ id: req.params.id }).update(changes)
  .then(count => {
    if (count >){
      res.status(200).json(count)
    } else {
      res.status(404).json({ message: 'Role not found'})
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.delete('/:id', (req, res) => {
  // remove roles (inactivate the role)
  res.send('Write code to remove a role');
});

module.exports = router;
