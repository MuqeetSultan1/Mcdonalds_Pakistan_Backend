import mongoose from "mongoose";


let breakfastSchema = new mongoose.Schema({

    image:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
        unique: true
    },

    price:{
        type: Number,
        default: 0,
    }
},
{timestamps: true}
)

export default mongoose.model("breakfasts", breakfastSchema )