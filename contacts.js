const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
// const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const listContacts = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(listContacts) || null;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  console.log(result);
  return result;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const id = nanoid();
  const newContact = { id, name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = contacts;
