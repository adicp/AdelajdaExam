const Pet = require('../models/pet.model');

module.exports = {
    getAllPets: ((req, res) => {
        Pet.find().sort({petType: -1}).collation({locale: "en" , caseLevel:true})
            .then((allPets) => {
                console.log(allPets)
                res.json(allPets)
            })
            .catch((err) => {
                console.log(err);
                res.json(`error for getting all players is : ${err}`)
            })
    }),
    addPets: ((req, res) => {
        Pet.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }),

    deletePets: ((req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then((deletedPet) => {
                console.log(`you have succesfully deleted ${deletedPet}`)
                res.json(deletedPet)
            })
            .catch((req,res) => {
                console.log(`there was this probelem with deleting ${deletedPet}: ${err}`)
            })
    }),

    editPets: ((req, res) => {
        console.log("entered editeach")
        Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedPet => {
            console.log(`you have succesfully updated ${updatedPet}`);
            res.json(updatedPet);
        })
        .catch(err => {
            response.json(err);
            console.log(`there was this probelem with updating ${updatedPet}: ${err}`);
        })
    }),

    getOnePet: ((req, res) => {
        console.log(req.params.id);
        console.log("entered geteach");
        Pet.findOne({_id:req.params.id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err))
    })

}