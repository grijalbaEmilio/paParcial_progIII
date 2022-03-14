const mongoose = require("mongoose");

const buySchema = mongoose.Schema({
  DueDate: {
    type: String,
    require: true,
  },
  dni: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
  Line: {
    type: Object,
    require: true,
    buy: {
      Amount: {
        type: Number,
        require: true,
      },
      DetailType: {
        type: String,
        require: true,
      },
      ExpenseDetail: {
        type: Object,
        require: true,
        Customer: {
          type: Object,
          require: true,
          value: {
            type: String,
            require: true,
          },
          name: {
            type: String,
            require: true,
          },
          Ref: {
            type: String,
            require: true,
            value: {
              type: String,
              require: true,
            },
            name: {
              type: String,
              require: true,
            },
          },
        },
        Account: {
          type: String,
          require: true,
          value: {
            type: String,
            require: true,
          },
          name: {
            type: String,
            require: true,
          },
        },
        LineStatus: {
          type: String,
          require: true,
        },
      },
    },
  },
  Vendor: {
    type: Object,
    require: true,
    value: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  TotalAmt: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model('Compras', buySchema)
