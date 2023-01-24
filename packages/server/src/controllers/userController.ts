import { Service as UserModel } from "../models/User";

const userController = {
    create: async(req, res) => {
        try {
            const service = {
                nome: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                cpf: req.body.cpf,
            };
            const response = await UserModel.create(service);
            res.status(201).json({response, msg: 'User created'});
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(_req, res) => {
        try {
            const service = await UserModel.find();
            res.status(200).json(service);
        } catch (error) {
            console.log(error)
        };
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const service = await UserModel.findById(id);

            if (!service) {
                res.status(404).json({msg: 'User not found!'});
                return;
            };
            res.status(200).json(service);
        } catch (error) {
            console.log(error)
        };
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const service = await UserModel.findById(id);

            if (!service) {
                res.status(404).json({msg: 'User not found!'});
                return;
            };

            const deletedService = await UserModel.findByIdAndDelete(id)

            res.status(200).json({deletedService, msg: 'User deleted'});
        } catch (error) {
            console.log(error)
        };
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;
            const service = {
                nome: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                cpf: req.body.cpf,
            };

            const response = await UserModel.findByIdAndUpdate(id, service)

            if (!response) {
                res.status(404).json({msg: 'User not found!'});
                return;
            };

            res.status(200).json({service, msg: 'User updated'});
        } catch (error) {
            console.log(error)
        };
    },
};

module.exports = userController;