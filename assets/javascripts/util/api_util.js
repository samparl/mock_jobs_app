const Util = require('../util/util');

module.exports = {
  fetchJobs(options, callback) {
    $.ajax({
      url: Util.formatRequest("https://api-v2.themuse.com/jobs", options),
      method: "GET",
      data: options,
      success(response) {
        callback(response);
      }
    });
  },

  // fetchCompanies() {
  //   $.ajax({
  //     url: "https://api-v2.themuse.com/companies",
  //     method: "GET",
  //     success(response) {
  //       // debugger
  //       console.log(response);
  //     }
  //   });
  // }
};
