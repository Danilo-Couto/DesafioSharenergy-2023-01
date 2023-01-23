import mongoose from "mongoose";

const { Schema } = mongoose;

export const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    endereco:{
        type: String,
        required: true
    },
    cpf:{
        type: Number,
        required: true
    },
},  {timestamps: true}
);

export const Service = mongoose.model('User', userSchema);

module.exports = {
    Service, 
    userSchema
};