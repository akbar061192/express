const sup = (req, res, next) => {
  console.log('running sup func');
  next();
};

const how = (req, res, next) => {
  console.log('how you dng?');
  next();
};

module.exports = { sup, how };
