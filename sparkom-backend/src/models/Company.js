const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const CompanySchema = new Schema({
  company_name: {
    type: String,
    required: false,
  },
  company_details: {
    type: String,
  },
  company_owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

module.exports = Company = mongoose.model("company", CompanySchema);
