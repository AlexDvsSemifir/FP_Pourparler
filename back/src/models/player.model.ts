import { Schema, model, ObjectId } from "mongoose";

const playerSchema: Schema = new Schema({
    id: {
        fisrtName: {type: String, required: true},
        lastName: {type: String, required: false},
        age: {type: Number, required: false},
        description: {type: String, required: false},
        psychologie: {type: String, required: false}
    },
    carac: {
        cha: {type: Number, required: true},
        str: {type: Number, required: true},
        ins: {type: Number, required: true},
        int: {type: Number, required: true},
        mob: {type: Number, required: true},
        vig: {type: Number, required: true},
        wil: {type: Number, required: true},
        des: {type: Number, required: true},
        for: {type: Number, required: true}
    }
    
});

const PlayerModel = model('Player', playerSchema)
export default PlayerModel;