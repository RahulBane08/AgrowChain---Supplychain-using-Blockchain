const SupplyChainModel = require('../models/supplyChain.js');

exports.register = async (req, res) => {
   const batchNo = req.body.batchNo;
   try {
      const result = await SupplyChainModel.create({
         batchNo,
      });

      res.status(201).json({ result });
   } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
      console.log(error);
   }
};
exports.addData = async (req, res) => {
   const batchNo = req.body.batchNo;
   const data = req.body.data;
   const dataType = req.body.dataType;
   console.log(data, dataType);

   try {
      if (dataType === 'retailerData') {
         const result = await SupplyChainModel.update({ batchNo }, { $set: { [dataType]: data, completed: true } });
      } else {
         const result = await SupplyChainModel.update({ batchNo }, { $set: { [dataType]: data } });
      }

      res.status(201).json({ result });
   } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
      console.log(error);
   }
};

exports.showAll = async (req, res) => {
   try {
      const result = await SupplyChainModel.find();
      res.status(200).json({ result });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};
