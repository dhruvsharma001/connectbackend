const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    connectToken: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      dafault: {},
    },
  },
  // {
  //   addresses: {
  //     type: Array,
  //     default: [],
  //   },
  //   contactType: {
  //     type: String,
  //     default: '',
  //   },
  //   emails: {
  //     type: Array,
  //     default: [],
  //   },
  //   firstName: {
  //     type: String,
  //     default: '',
  //   },
  //   id: {
  //     type: String,
  //     default: '',
  //   },
  //   imageAvailable: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   lastName: {
  //     type: String,
  //     default: '',
  //   },
  //   maidenName: {
  //     type: String,
  //     default: '',
  //   },
  //   namePrefix: {
  //     type: String,
  //     default: '',
  //   },
  //   nameSuffix: {
  //     type: String,
  //     default: '',
  //   },
  //   nickname: {
  //     type: String,
  //     default: '',
  //   },
  //   phoneticFirstName: {
  //     type: String,
  //     default: '',
  //   },
  //   phoneticMiddleName: {
  //     type: String,
  //     default: '',
  //   },
  //   phoneticLastName: {
  //     type: String,
  //     default: '',
  //   },
  //   name: {
  //     type: String,
  //     default: '',
  //   },
  //   company: {
  //     type: String,
  //     default: '',
  //   },
  //   jobTitle: {
  //     type: String,
  //     default: '',
  //   },
  //   department: {
  //     type: String,
  //     default: '',
  //   },
  //   note: {
  //     type: String,
  //     default: '',
  //   },
  //   lastimageAvailableName: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   birthday: {
  //     type: Date,
  //   },
  //   instantMessageAddresses: {
  //     type: Array,
  //     default: [],
  //   },
  //   urlAddresses: {
  //     type: Array,
  //     default: [],
  //   },
  //   instantMessageAddresses: {
  //     type: Array,
  //     default: [],
  //   },
  //   phoneNumbers: {
  //     type: Array,
  //     default: [],
  //   },
  //   dates: {
  //     type: Array,
  //     default: [],
  //   },
  // },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('contact', ContactSchema);
