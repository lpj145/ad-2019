module.exports = {
  $instances: {},
  person: {
    name: {
      type: String,
      required: function () {
        return this.name.length > 5
      }
    },
    friend: {
      type: String,
      default: '',
      required: false
    },
    email: {
      type: String,
      required: true
    }
  }
}
