const isNameValid = (name) => name.length > 0;
const isAddressValid = (address) => address.length > 0;

const shippingInfo = {
  name: "",
  address: "1234 mulderberry drive",
};

const errorGoals = {
  name: true,
  address: false,
};

const errorMap = {};
const validations = {
  name: isNameValid,
  address: isAddressValid,
};

for (let field in shippingInfo) {
  const validationFn = validations[field];
  const fieldValue = shippingInfo[field];
  errorMap[field] = validationFn(fieldValue);
}

console.log(errorMap);
