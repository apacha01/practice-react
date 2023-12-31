# Book web page with reading list
An exercise simulating an interview taken from [this website](https://pruebastecnicas.com/).

The instructions for the interview can be found in the [README.INSTRUCTIONS.md](./README.INSTRUCTIONS.md) in this same directory.

Demo: https://apacha01.github.io/reading-list-interview/

# Summary
A book store wants a web page to show their books with a reading list included in the page.

## Requirements
- [x] **Visualizing available books**: App must show a list of available books that the user can check.

- [x] **Create a reading list**: User should be capable of creating a reading list from the available books. Within the UI it must be clear which books are in this list and which aren't. It should also be possible to move a book from reading list to available list.

- [x] **Genre filter**: Users should be able to filter the list of available books by genre, and it has to have a counter with the number of available book, the number of reading list books and the number of books available in the selected genre.

- [x] **State synchronization**: There must be a synchronization between the global state that shows the number of books in reading list and the number of book still available. If a book moves from one list the other, both counters should update.

- [x] **Persistent**: App must persist reading list data in the user local storage. When refreshing the site, reading list must stay the same.

- [x] **Synchronization between tabs**: If the user open the app in two different tabs, the changes in one tab must be reflected on the other. Without using BackEnd.

- [x] **Deploy**: App must be deploy en some free hosting service (Netlify, Vercel, Firebase, etc) and must be accessible through a public URL. Indicate the URL in the README file.

- [x] **Test**: App must contain AT LEAST one test. Test whatever you consider to be the most important in your app.

# Extras
- [x] Implement search functionality in available books list.
- [x] Add a new filter to filter books by page number.
- [x] Allow reorganization of books by priority in reading list.
- [x] Make the web responsive.

# Installation
* Clone this repo.
* Run `npm install`
* Run `npm run dev` for a local run and `npm run tailwind` if you are going to edit styles.
* Run `npm build` for production or `npm run preview` for a production preview.