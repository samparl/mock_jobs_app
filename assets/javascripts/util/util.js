const Util = {
  formatRequest (url, options) {
    return Object.keys(options).reduce(function(query, key) {
      if(options[key].length > 0) {
        let connect = query.length > url.length ? "&" : "?";
        let params = Util.arrayParams(key, options[key]);
        let newQuery = query + connect + Util.arrayParams(key, options[key]);
        newQuery = newQuery.replace(/%20/g, "+");
        return newQuery;
      } else {
        return query;
      }
    }, url);
  },

  arrayParams(key, array) {
    return array.reduce(function(query, parameter) {
      let connect = query.length > 0 ? "&" : "";
      let temp = {};
      temp[key] = parameter;
      return query + connect + $.param(temp);
    }, "");
  },

  formatDate(dateString) {
    let date = new Date(dateString);
    let dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleString('en-us', dateOptions);
  },

  // getPageNumbers(pageCount) {
  //   let res = [];
  //   for(let i =  0; i < pageCount; i++) {
  //     res.push(i + 1);
  //   }
  //   return res;
  // },
  
  getValues(objArray, key) {
    return objArray.map(function(obj) {
      return obj[key];
    });
  },

  range(start, end) {
    let res = [];
    for(let i =  start; i < end; i++) {
      res.push(i);
    }
    return res;
  },

  getPageNumbers(currentPage, pageCount) {
    let leftBound, rightBound, leftLength, rightLength;
    leftBound = currentPage <  5;
    rightBound = pageCount - currentPage < 6;

    if(leftBound) {
      leftLength = currentPage;

      if(rightBound) {
        rightLength = pageCount - currentPage;
      } else {
        rightLength = 10 - leftLength;
      }
    } else {
      if(rightBound) {
        rightLength = pageCount - currentPage;
        leftLength = 10 - rightLength;
      } else {
        leftLength = 5;
        rightLength = 5;
      }
    }

    let left = Util.range(currentPage - leftLength, currentPage);
    let right = Util.range(currentPage, currentPage + rightLength);

    return left.concat(right);
  }
};

module.exports = Util;
