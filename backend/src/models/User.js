// const ROLE = {
//     User: "User",
//     Admin: "Admin",
//     Basico: "Basico",
//     Medium: "Medium",
//     Premium: "Premium"
// }
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
