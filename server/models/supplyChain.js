const mongoose = require('mongoose');

const supplChain = mongoose.Schema({
   batchNo: { type: String, required: true },
   farmerData: { type: Object },
   manufacturerData: { type: mongoose.Schema.Types.Mixed },
   retailerData: { type: mongoose.Schema.Types.Mixed },
   distributerData: { type: mongoose.Schema.Types.Mixed },
   completed: { type: Boolean, default: false },
});

const supplyChainSchema = mongoose.model('SupplyChain', supplChain);
module.exports = supplyChainSchema;
