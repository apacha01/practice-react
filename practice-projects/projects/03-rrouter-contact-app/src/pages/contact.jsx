// useFetcher allows us to communicate with loaders and actions without causing a navigation.
import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getContact, updateContact } from "../services/contacts";

export async function loader({ params }) {
	const contact = await getContact(params.contactId);
	if (!contact) {
		throw new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
	return { contact };
}

export async function action({ request, params }) {
	let formData = await request.formData();
	return updateContact(params.contactId, {
		favorite: formData.get("favorite") === "true",
	});
}

export default function Contact() {
	const { contact } = useLoaderData();

	return (
		<div id="contact">
			<div>
				<img
					key={contact.avatar}
					src={contact.avatar || null}
				/>
			</div>

			<div>
				<h1>
					{contact.first || contact.last ? (
						<>
							{contact.first} {contact.last}
						</>
					) : (
						<i>No Name</i>
					)}{" "}
					<Favorite contact={contact} />
				</h1>

				{contact.twitter && (
					<p>
						<a
							target="_blank"
							href={`${contact.twitter}`}
						>
							{contact.twitter}
						</a>
					</p>
				)}

				{contact.phone && <p>{contact.phone}</p>}

				<div>
					<Form action="edit">
						<button type="submit">Edit</button>
					</Form>
					<Form
						method="post"
						action="destroy"
						onSubmit={(event) => {
							if (
								!confirm(
									"Please confirm you want to delete this record."
								)
							) {
								event.preventDefault();
							}
						}}
					>
						<button type="submit">Delete</button>
					</Form>
				</div>
			</div>
		</div>
	);
}

function Favorite({ contact }) {
	const fetcher = useFetcher();
	let favorite = contact.favorite;

	// Optimistic ui
	// The fetcher knows the form data being submitted to the action, 
	// so it's available to you on fetcher.formData. Use that to immediately update 
	// the star's state, even though the network hasn't finished.
	// Note: This is for pages w/latency since i'm using mocks it's the same
	if (fetcher.formData) {
		favorite = fetcher.formData.get("favorite") === "true";
	}

	return (
		<fetcher.Form method="post">
			<button
				name="favorite"
				value={favorite ? "false" : "true"}
				aria-label={
					favorite
						? "Remove from favorites"
						: "Add to favorites"
				}
			>
				{favorite ? "★" : "☆"}
			</button>
		</fetcher.Form>
	);
}