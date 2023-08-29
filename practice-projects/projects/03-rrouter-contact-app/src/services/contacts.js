import { contacts } from '../mocks/contacts.json'

function extractContacts() { return JSON.parse(window.localStorage.getItem("contacts")); }

export async function getContacts(query) {
	if (!window.localStorage.getItem('contacts')) {
		window.localStorage.setItem("contacts", JSON.stringify(contacts));
	}
	if (query?.length > 0) {
		return contacts.filter(c =>
			c.first.toLowerCase().startsWith(query.toLowerCase())
			|| c.last.toLowerCase().startsWith(query.toLowerCase())
		);
	}
	return extractContacts();
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
	let contacts = extractContacts();
	let contact = contacts.find(contact => contact.id === id);
	return contact ?? null;
}

export async function updateContact(id, updates) {
	let contacts = extractContacts();
	let contact = contacts.find(contact => contact.id === id);
	if (!contact) throw new Error("No contact found for", id);
	Object.assign(contact, updates);
	await set(contacts);
	return contact;
}

export async function deleteContact(id) {
	let contacts = extractContacts();
	let index = contacts.findIndex(contact => contact.id === id);
	if (index >= 0) {
		contacts.splice(index, 1);
		await set(contacts);
		return true;
	}
	return false;
}

async function set(contacts) {
	return window.localStorage.setItem("contacts", JSON.stringify(contacts));
}