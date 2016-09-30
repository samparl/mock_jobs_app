# Muse Job Query Mockup
### Description
The purpose of this project is to demonstrate a connection to the Muse jobs API and format the results with a simple user interface.

### Search fields
The user is able to enter company names and locations in text format, and select job levels as well as job categories in checkboxes.

In order to finalize a text input (e.g. the company name "Google"), the user must press enter in the input field. The input will then be presented in the field with an "x", which the user can click in order to remove that value from the query parameters.

#### Results Page
Results are displayed on a results page, to which the user is directed upon submission of the search form. Results are fetched on a page by page basis, and users can navigate the pages by clicking through the pagination list at the top of the results index.

The user can click on the header to return to the search page.

N.B.: Text information must match the stored format backend (for example, "Boston, MA", not "Boston, Massachusetts"). Results will include remote opportunities as well as those local to the selected location.

### Code and Architecture
The code is written with React.js and laid out in a Flux pattern.

##### Flux Cycle
component > action > dispatcher > store > component

* Components: These hold the layout and basic logic of the user interface.
* Actions: Actions are the connection points between the internal flux cycle and the outside world.
  * Some are callbacks that reference a front-end API (written in the api_util file in the util folder) and handle the response. Actual formatting of the request occurs in the Api Utility.
  * Some actions handle information internally (saving input and query information for later use in the API).
* Dispatcher: The dispatcher connects actions with stores, letting any store initialized with the dispatcher that an action has occurred.
* Store: The store holds most of the data used in the applications presentation. For example, all job query results are held in the Results Store and fetched when appropriate by listening components. Components listening to the store generally set state when the store is updated, causing them to re-render.

### Installation
1. Fork the repository to a local directory and, from your console in the directory, run "npm install" to install the package.json contents.

2. Open the index.html top level file in your browser, and enjoy!
