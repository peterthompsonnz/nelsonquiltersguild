const moment = require('moment-timezone');
const format = require('date-fns/format');

module.exports = (function (eleventyConfig) {
    eleventyConfig.addFilter('date', function (date, dateFormat) {
      return format(date, dateFormat)
    });
    eleventyConfig.addFilter("dateFormat", function (dateIn) {
        return moment(dateIn).tz('GMT').format('DD/MM/YYYY');
    });

    return {
        templateFormats: ["njk", "md", "jpg", "jpeg", "png", "ico", "html", "css", "xml", "pdf"]
    };

});
