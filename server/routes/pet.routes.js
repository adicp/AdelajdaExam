const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/', PetController.getAllPets);
    app.get('//pets/:id/edit', PetController.getOnePet);
    app.get('/pets/:id', PetController.getOnePet);
    app.post('/pets', PetController.addPets);
    app.put('//pets/:id/edit', PetController.editPets);
    app.delete('/pets/:id', PetController.deletePets);
}  