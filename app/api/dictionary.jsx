var axios = require('axios');

const DICTIONARY_URL = 'https://oke5yaeave.execute-api.us-west-2.amazonaws.com/prod';

//KMqemZPPeXa2oVa0JZXBPwEKDhJXJAf8U8qWjnag

module.exports = {
  getDef: function (word) {
    var encodedDefinition = encodeURIComponent(word);
    var requestUrl = `${DICTIONARY_URL}&q=${encodedDefinition}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp; //edit this!
      }
    }, function (err) {
      throw new Error('Unable to fetch definition for that word.');
      //throw new Error('res.data.message'); //returns open weathers error message if it sends one
    });
  }
}
