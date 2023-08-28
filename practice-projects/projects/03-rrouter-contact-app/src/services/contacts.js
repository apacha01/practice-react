import { contacts } from '../mocks/contacts.json'

export async function getContacts() {
	localStorage.setItem('contacts', contacts);
	return contacts;
}

export async function createContact() {
	let id = Math.random().toString(36).substring(2, 9);
	let contact = { id, createdAt: Date.now() };
	let contacts = await getContacts();
	contacts.unshift(contact);
	await set(contacts);
	return contact;
}

export async function getContact(id) {
	let contacts = localStorage.getItem("contacts");
	let contact = contacts.find(contact => contact.id === id);
	return contact ?? null;
}

export async function updateContact(id, updates) {
	let contacts = localStorage.getItem("contacts");
	let contact = contacts.find(contact => contact.id === id);
	if (!contact) throw new Error("No contact found for", id);
	Object.assign(contact, updates);
	await set(contacts);
	return contact;
}

export async function deleteContact(id) {
	let contacts = localStorage.getItem("contacts");
	let index = contacts.findIndex(contact => contact.id === id);
	if (index >= 0) {
		contacts.splice(index, 1);
		await set(contacts);
		return true;
	}
	return false;
}

async function set(contacts) {
	return localStorage.setItem("contacts", contacts);
}