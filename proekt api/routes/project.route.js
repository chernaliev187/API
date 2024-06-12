const express = require('express');
const { getProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/project.controller');

const router = express.Router();
router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', createProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
