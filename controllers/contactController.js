//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new  contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  console.log("The request body is :", req.body);
  res.status(201).json({ message: "Create contact" });
};

//@desc Get  contacts
//@route POST /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc update contacts
//@route POST /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc delete contacts
//@route POST /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(201).json({ message: "delete contact" });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
