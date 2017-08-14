# MyReads
A simple Book Tracking Application. 

## Table of contents

- [Quick Start](#quick-start)
- [App Functionality](#app-functionality)
- [Folder Structure](#folder-structure)
- [Important Notice](#important-notice)

## Quick Start

- Clone the repo: `https://github.com/andyhu92/reactnd-project-myreads-starter.git`
- Install dependency: `npm install`
- Run the app: `npm start`

## App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

![The static page (and your completed app) should look something like this.](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f12_react-project1-a/react-project1-a.png)

Each book has a **control** that lets you select the shelf for that book. When you select a different shelf, the book moves there. 

![Each book has a control](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f26_react-project1-b/react-project1-b.png)

The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 

![Search Page](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f40_react-project1-c/react-project1-c.png)

The search page also has a link to `/` (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.



## Folder Structure
```
+--public/
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of the app. Contains static HTML right now.
 |-- App.css - Styles for the app.
 |-- App.test.js - Used for testing. Provided with Create React App.
 Testing is encouraged, but not required.
 |-- ListBook.js - Component for the list book view (Default route).
 |-- SearchBook.js - Component for the search book view.
 |-- BOOKSHELVES_METADATA.js - export const which contains bookshelf category information.
 |-- BookShelves.js - Component for all there bookshelves.
 |-- BookShelf.js - Component for single bookshelf.
 |-- BookItem.js - Comonent for each single book item.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 Instructions for the methods are below.
 |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Important Notice
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

