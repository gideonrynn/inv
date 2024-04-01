const mongoose = require("mongoose");

const templateSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Add name"],
        trim: true,
    },
})
   
const Template = mongoose.model("Template", templateSchema);

module.exports = Template;