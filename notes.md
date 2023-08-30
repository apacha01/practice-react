# React Notes
Following -> https://roadmap.sh/react

## CLI Tools: Vite
**Vite is a build tool** for a faster development.
* Supported templates:
	| JavaScript | TypeScript |
	| ---------- | ---------- |
	|	vanilla  | vanilla-ts |
	|	vue		 | vue-ts |
	|	react	 | react-ts |
	|	preact	 | preact-ts |
	|	lit		 | lit-ts |
	|	svelte	 | svelte-ts |
	|	solid	 | solid-ts |
	|	qwik	 | qwik-ts |
* It consists of two major parts:
	* A dev server that provides rich feature enhancements over native ES modules.
	* A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

#### Usage
Run: `$ npm create vite@latest`. Then follow the prompts.
Link for further details: `https://github.com/vitejs/vite/tree/main/packages/create-vite#create-vite`
*Command Line Interface:* you can use the `vite` binary in your npm scripts, or run it directly with `npx vite`. You can specify additional CLI options like `--port` or `--https`. Full list of CLI options: `npx vite --help`.

#### Features
Full feature list: `https://vitejs.dev/guide/features.html`
* NPM Dependency Resolving and Pre-Bundling
	* Detects imports in all source files and performs the following:
		* Pre-bundle them with esbuild to improve page loading speed and convert CommonJS / UMD modules to ESM.
		* Rewrite the imports to valid URLs like `/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd` so the browser can import them properly.
	* Caches dependency requests via HTTP headers.
* Hot Module Replacement (HMR)
	* What is HMR? **HMR exchanges, adds, or removes modules while an application is running, without a full reload.** Link for a further and better explanation: `https://webpack.js.org/concepts/hot-module-replacement/`
	* Vite provides an HMR API over native ESM. It doesn't need to be manually set , when creating an app via create-vite, the selected templates would have these pre-configured already.
* JavaScript XML (JSX)
	* JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Link for further explanation: `https://react.dev/learn/writing-markup-with-jsx`
	* `.jsx` and `.tsx` (jsx for typescript) files are also supported out of the box. And the transpilation is also handled via ***esbuild***.
* CSS
	* Importing `.css` files will inject its content to the page via a `<style>` tag with HMR support. This can be turned off via the `?inline` query parameter, e.g. `import style from  './style.css?inline'`.
	* The processed CSS can be retrieved as a string as a module export if the `?inline` query parameter is passed.
	* Supports CSS `@import` inlining via postcss-import.
	* All CSS `url()` references, even if the imported files are in different directories, are always automatically rebased to ensure correctness.
	* **PostCSS:** If the project contains valid PostCSS config it will be automatically applied to all imported CSS.
	* **CSS Modules:** Any CSS file ending with `.module.css` is considered a CSS module file. Importing such a file will return the corresponding module object. CSS modules behavior can be configured via the `css.modules` option.
	* **CSS Pre-processors:** Vite provides built-in support for `.scss`, `.sass`, `.less`, `.styl` and `.stylus` files (although Vite targets modern browsers only, so it's recommended to use native CSS variables with PostCSS plugins).
* Static Assest
	* Importing a static asset will return the resolved public URL. For exapmle:
		```js
		import imgUrl from './img.png'
		document.getElementById('img').src = imgUrl
		```
	* Special queries can modify how assets are loaded:
		```js
		// Load assets as strings
		import assetAsString from './shader.glsl?raw'
		```
* Dynamic Import
	* Supports dynamic import with variables, e.g. ``const module =  await  import(`./dir/${file}.js`)``

## Components
**Official docs:** https://react.dev/learn#components

### What is a Component?
Components are the building blocks of React applications. A component is a piece of the UI that has its own logic and appearance. React lets you combine your HTML, CSS, and JavaScript into custom *components*, **reusable UI elements for your app**, but under the hood, it still uses the same HTML tags.

### JSX
JSX is a **syntax extension for JavaScript** that lets you write HTML-like markup inside a JS file, but it's stricter than HTML. You have to close tags like `<br/>`. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper.

### Creating Components
React components are JavaScript functions that return markup.  A component name must always start with a capital letter (unlike HTML tags which must be lowercase):
```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```
##### Nesting Components

```js
function MyApp() {
	return (
		<div>
		<h1>Welcome to my app</h1>
		<MyButton /> // Note that starts with a capital letter
		</div>
	);
}
```
##### A *main* component
The `export default` keywords specify the main component in the file:
```js
export default function MyApp() {
	// Code
}
```

### Responding to events
Declare the event handler functions inside your components and use curly brackets to assign it to the event:
```js
// Replacing 'Event' for the actual event (e.g. click)
function myComponent() {
	function handleEvent(){...}
	return (<button onEvent=handleEvent>...<button/>)
}
```
*Note:* An arrow function inside the tag could also be used.

### What is a Hook?
Hooks are JS functions that allow developers to *hook into* React state and life-cycle features from **Function Components** (and *only function components*, see more on [Types of Components](#types-of-components)). This Hooks start with the word `use` (e.g. `useState`).
Hooks are more restrictive than other functions. They can only be called at the top of your components (or other Hooks).

### Updating the screen
To make a component *remember* some information and display it, add a **state** to it. To do this a **Hook** is used to get access to two things: the current state and the function to update that state.
```js
import {useState from 'react'}
const [state, stateUpdate] = useSate(initalState) // This has to go inside the component
``` 
A full example of a button that counts the clicks:
```js
function MyButton() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<button onClick={handleClick}>
			Clicked {count} times
		</button>
	);
}
```
This state is independent for each component, so multiple renders of the same component (e.g. `{<MyButton /><MyButton />}`) will have each its own state.

###  Sharing data between components
If there's a need to share data and always update multiple components together, the solution is to move the state from the individual components *upwards* to the closest component containing all of them.
Following the example in **Updating the screen**:
```js
function MyApp() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div>  
			<MyButton count={count} onClick={handleClick} />  
			<MyButton count={count} onClick={handleClick} />  
		</div>
	);
}
function MyButton({ count, onClick }) {
	return (
		<button onClick={onClick}>
		Clicked {count} times
		</button>
	);
}
```
The information passed down like this is called **props**. **Props are immutable**, when a component needs to change its props, it will have to *ask* its parent component to pass it *different props*. Now `MyApp` component contains the `count` state and the `handleClick` event handler, and **passes both of them down as props** to each of the buttons that *reads the props* `MyApp` passed down.

### Default props
React offers a way called `defaultProps`. This is a property in a component used to set default values for the `props` argument. It will be changed if the prop property is passed.
```js
// ES6 class
Component.defaultProps = {name: 'Jhon', lastName: 'Doe'}
// or as a static property inside the class
class Component extends React.Component {
	constructor(props) {...}
	static defaultProps = {name: 'Jhon', lastName: 'Doe'}
}
// Function Components
Component.defaultProps = {name: 'Jhon', lastName: 'Doe'}
```
Although (as per Dan Abramov, one of the core team) it seems it will be deprecated: `https://twitter.com/dan_abramov/status/1133878326358171650`. So using default parameters in Function Components seems the better alternative:
```js
function Component ({ name = 'Jhon', lastName: 'Doe' }) {...}
```

### Types of Components
All React Components share the common sense of how to use `React Props`, because they are just used to pass information down the component tree. However, the usage of state and side-effects varies from on type to another.
As for the official docs `https://react.dev/reference/react/Component`:
> We recommend defining components as functions instead of classes.
*  **createClass Components:** a factory method to create React class components without using a JS class ('cause before ES6 there was no JS class syntax). This is the first way that existed within React to create components, but React's createClass method is no longer available in the React core package. It should only be used if you have no JavaScript ES6 or beyond available in your project.
	* **Mixins:** with a Mixin, it's possible to extract logic from a React component as standalone object. When using a Mixin in a component, all features from it are introduced to the component. However... `https://legacy.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html` 
* **Class Components:** introduced with JavaScript ES6, because JS classes were made available to the language. The component class has to extend from `React.Component` which comes with methods like the class constructor and the mandatory render method to return JSX as output.
	* **React Higher-Order Components (HOCs):** an alternative for React Mixins to deploy reusable logic across React components. This is a component which takes a component as input and returns the component as output but with extended functionalities.
	* **Render prop Components:** components which implement the pattern **render prop**. This is the concept of *children as a function* or *child as a function*. Instead of passing components, you pass them as a function which renders them. Because of this function, you can use the *children prop* within the render prop component (that's what the wrapping component became by implementing this pattern). The *children prop* becomes a *children as a function*.
* **Function Components:** equivalent of React Class Components but expressed as functions instead of classes. This are used along with **React Hooks** which bring state and side-effects to this type of components.
Function Components can be enhanced by HOCs and Render Prop Components as well.
	* **Stateless:** They just receive an input as props and return an output as JSX: `(props) => JSX`. These kind of components don't manage state and don't have any side-effects.
	* **State:** *Hooks* made it possible to use state (and side-effects) in Function Components. A state is what makes React components interactive.

### Life-cycle & Life-cycle methods
A component life-cycle consists of three phases: **Mounting**, **Updating**, and **Unmounting** along with several *life-cycle methods* that can be used to run code at particular times in the process. Cheatsheet: `https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/`.
The *life-cycle methods* used in in **Class Components** are NOT recommended in **Function Components**, it's equivalent to calling `useEffect` in this last type.
* **componentDidMount():** React will call it when your component is added (mounted) to the screen.
* **componentDidUpdate():** React will call it immediately after your component has been re-rendered with updated props or state (not called for the initial render).
* **componentDidUnmount():** React will call it before your component is removed (unmounted) from the screen.
#### Life-cycle of Reactive Effects
Link to docs: `https://react.dev/learn/lifecycle-of-reactive-effects`.
Components may mount, update, or unmount. **An Effect can only do two things**: start synchronizing something, and stop synchronizing it.
[A `useEffect` function takes two *params*: an *effect*, i.e. a function to execute (specifying how to connect / synchronize) that returns a `cleanUp` function (specifying how to stop connecting / synchronizing) and a dependency array. This Hook will call the function once, therefore **synchronizing**, and whenever a dependency has changed React calls the  `cleanUp` function to **stop synchronizing** and re-calls the *effect*. If the second parameters is non-existent, `useEffect` will repeat the *effect* on every re-render.]
Every time after a component re-renders with a different dependency, the Effect will re-synchronize.
Finally, when the component unmounts, there is no need to stay connected, so React will **stop synchronizing** the Effect one last time.
*Note:* **In development**, React always remounts each component once. It verifies that your Effect can re-synchronize by forcing it to do it immediately in development. React starts and stops an Effect one extra time in development to check if its `cleanUp` was implemented well.
You can use multiple Effects and each Effect in your code should represent a separate and independent synchronization process. [Like with S in SOLID.]
##### Dependencies
**You can’t *choose* your dependencies.** Your dependencies must include every reactive value (meaning they can change) you read in the Effect. Values declared inside the component body are *reactive*.
##### An Effect with empty dependencies
Means that an Effect connects only when the component mounts, and disconnects only when the component unmounts.

## Data in JSX & Rendering
### Rendering
React follows a declarative approach to rendering components. ReactDOM is the *React Renderer* used to render an app in th browser. [Since the renderer is separated from the library itself, it allows for things like React Native, which uses the React library but uses another renderer, for mobile apps.]
**How React renders:**
* Components always return a description of what it should look like (JSX).
* When a component is rendered, React creates a virtual DOM (VDOM) representation of the component.
* Then compares the VDOM representation with the previous VDOM representation (if it exists). **If** there are differences, it calculates the minimum number of DOM updates needed.
* Finally, it updates the actual DOM with the minimum number of DOM updates needed to reflect the changes in the VDOM.

### Adding styles
Specify a CSS class with `className`. It works the same way as the HTML class attribute: `<img className="avatar" />`. Then just set the style for that class in a `.css` external file.
React does not prescribe how you add CSS files (so use a simple link tag in html).

### Displaying data
JSX lets you put markup into JavaScript. Curly braces let you *escape back* into JS, so, just like in string literals, you can use variables and such. This can be done from within a JSX tag or even inside JSX attributes.
```js
function Profile(){
	return (
		<>
			<h1>{user.name}</h1>
			<img
				src={user.imageUrl}
				alt={'Photo of ' + user.name}
				// {{...}} is not special syntax
				// It's an object {} passed to the style{} attribute
				style={{
					width: user.imageSize,
					height: user.imageSize
				}}
			/>
		</>
	);
}
``` 

### Conditional rendering
There's no special syntax for React, so just use the JS syntax in combination with JSX tags.
```js
let content;
if (isLoggedIn)	content = <AdminPanel />;
else content = <LoginForm />;
```
For a more compact code use the ternary (`?:`) operator which works inside JSX:
```jsx
<div>
	{isLoggedIn ? (<AdminPanel />) : (<LoginForm />)}
</div>
```
And if the `else` branch is unnecessary, a shorter logical syntax (`&&`) can be used:
```jsx
<div>
	{isLoggedIn && <AdminPanel />}
</div>
``` 

### Rendering lists
There's no feature in React for rendering lists, so it relies on JS `for` loops and `.map()` functions.
The idea is to use a loop to get a list of tags (e.g. `<li>...<li/>` tags) and store that value. Then, it can be used within JSX with the `{}` syntax.
```jsx
const listItems = products.map(product =>
	<li key={product.id}>
		{product.title}
	</li>
);
return (<ul>{listItems}</ul>);
```
*Note:* in the example above `<li>` has a `key` attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. React uses your keys to know what happened if you later insert, delete, or reorder the items.

### Keys
**Keys** provide a way to React to know which elements have changed or not. When adding / removing elements in a node, React compares the keys of the children to see which element needs to be added / removed.
Each child in a list should have a unique *key* prop, a string or a number that uniquely identifies it among other items in that list.
**A key should satisfy:**
* **Uniqueness among siblings**, although, it’s okay to use the same keys for JSX nodes in **different arrays**.
* Keys must **not change or be generated while rendering**.

## Elements
### What is an Element?
Whenever a **React Component** gets called (rendering, i.e. using `<></>`), React calls its `React.createElement()` method internally which returns the following object:
```jsx
const App = () => {
	return <p className="classInProps" >Hello React</p>;
};
{
	$$typeof: Symbol(react.element)
	"type": "p",
	"key": null,
	"ref": null,
	"props": {
		"children": "Hello React",
		"className": "classInProps"
	},
	"_owner": null,
	"_store": {}
}
```
Note that React treats `children` as pseudo HTML attribute that represents everything between the HTML tag (the content).  The `type` represents the actual HTML element, while the `props` are all HTML attributes plus the inner content (as `children` property). So, essentially, it could be translated as (not recommended):
```jsx
const App = () => {
	// return <p className="danger">Hello React</p>;
	return React.createElement(
		'p',
		{className: 'danger'},
		children: 'Hello React'
	);
};
``` 
It's possible to provide the HTML tag as first argument, the props as second argument, and the children as third argument or, since children are treated as props, it could also be passed in the second argument:
```jsx
const App = () => {
	// return <p className="danger">Hello React</p>;
	return React.createElement(
		'p',
		{
			className: 'danger',
			children: 'Hello React'
		},
	);
};
```

### Element vs Component vs Instances
A **React Component** is literally the declaration of a component, like the following:
```jsx
const Greeting = ({ text }) => {
	return <p>{text}</p>;
};
```
A **React Element** is when a component is rendered using the angle brackets syntax (`<>...</>`), like the following:
```jsx
// Component
const Greeting = ({ text }) => {
	return <p>{text}</p>;
};
const App = () => {
	// Element
	return <Greeting text="Hello React" />;
};
``` 
A component can be rendered as **React Element** multiple times. Whenever a component gets rendered as element, we create an **Instance of this Component**.
```jsx
const Greeting = ({ text }) => {
	return <p>{text}</p>;
};
const App = () => {
	return (
		<>
			<Greeting text="Hello Instance 1 of Greeting" />
			<Greeting text="Hello Instance 2 of Greeting" />
		</>
	);
};
```
A **React Component** is declared once, but it can be used multiple times as a **React Element** in JSX. When it's used, it becomes an **Instance of the Component** and lives in React's component tree.

## More about Hooks
### Types of Built-in Hooks
List of built-in Hooks: `https://react.dev/reference/react`.
* **State Hooks:** lets a component *remember* information. One of these Hooks can be used:
	* `useState`: declares a state variable that you can update directly.
	* `useReducer`: declares a state variable with the update logic inside a reducer function.
* **Context Hooks:** lets a component receive information from distant parents without passing it as props, e.g. `const theme = useContext(ThemeContext);`.
* **Ref Hooks:** lets a component hold information that isn’t used for rendering, so updating a ref does not re-render your component. [Basically `useRef` is used to store values to share between different renders and doesn't get created again after a re-render, took some time to understand :)].
	* `useRef`: declares a ref for any value.
	* `useImperativeHandle`: lets you customize the ref exposed by your component (rarely used).
* **Effect Hooks:** lets a component connect to and synchronize with external systems. Normally this functions returns a `cleanUp` function that stops connecting / synchronizing with that external system (if you don’t, React will behave as if you returned an empty cleanup function.).  There are two variations of `useEffect` with differences in timing:
	* `useLayoutEffect`: fires before the browser repaints the screen.
	* `useInsertionEffect`: fires before React makes changes to the DOM.
* **Performance Hooks:** There are to ways to use this type of hooks to optimize performance: skipping calculations  & unnecessary re-renders (optimizing re-render performance) and separating blocking updates that must be synchronous from non-blocking updates which don’t need to block the user interface (prioritizing one render over another).
	* Re-render Performance Optimization:
		* `useMemo`: cache the result of a calculation.
		* `useCallback`: cache a function definition before passing it down to an optimized component.
	* Render Prioritization Optimization:
		* `useTransition`: mark a state transition as non-blocking and allow other updates to interrupt it.
		* `useDeferredValue`: defer updating a non-critical part of the UI and let other parts update first.

### Custom Hooks
Custom Hooks are a good way to **reuse logic between components**. One can write a custom hooks with a certain logic and reuse it across components.
Extracting logic into hooks also allows to the code inside the components to describe what they want to do rather than how to do it (more declarative).
Consider the following example where we want to know whether a user is online or offline. One may want to know this to disable buttons or some other input, instead of repeating code to find out if the user is connected, it's possible to create a `useOnlineStatus` custom hook:
```js
function useOnlineStatus() {
	const [isOnline, setIsOnline] = useState(true);
	useEffect(() => {
		function handleOnline(){setIsOnline(true);}
		function handleOffline(){setIsOnline(false);}
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);
		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);
	return isOnline;
}
```
Now this hook can be used in multiple components to check the connection without the need to repeat the logic in each component.

#### Hook names always start with `use`
**Hook names must start with use followed by a capital letter**, e.g. `useState` instead of `usestate`.
This convention guarantees that you can always look at a component and know where its hooks are. If a function starts with `use` it'll be using hooks (unlike a `get` function since only hooks and components can call other hooks).

#### Custom Hooks share stateful logic, not state itself
When extracting logic into a custom hook, like in the example above (`useOnlineStatus`), each value is independent from each other. In that example, it's synchronized because the same external value is used to set the return value and there are no dependencies.
However, a simple hook like `useBoolean` that looks like
```js
const useBoolean = (initVal) => {
	const [state, setState] = useState(initVal);
	const handleTrue = () => setState(true);
	const handleFalse = () => setState(false);
	const handleToggle = () => setState(!state);
	return [
		state,
		{
			setTrue: handleTrue,
			setFalse: handleFalse,
			setToggle: handleToggle,
		},
	];
};
```
It would make no sense if by setting one boolean to true, another component that used the same hook also changes its value.
**Each call to a hook is completely independent from every other call to the same hook.** When you need to share the state itself between multiple components, lift it up and pass it down instead.

#### Passing reactive values between Hooks
The code inside your custom Hooks will re-run during every re-render of your component. Because of this, hooks always receive the latest *props* and *state*.

### Extra - Debouncing
Debouncing is a practice in software development which makes sure that certain heavy tasks don't get fired so often.
Example: let's say someone types any pin-code, and the app returns some data. The user types the pin-code 800001. When typed the first character, i.e. 8, it sends a request to the backend server. Then 0, and it sends another request to the server, and so on. This calls the API so many times, and in turn overuses the requests. So, to prevent this, something called a debounce function is used.
In case of debouncing, a function is only trigger after X amount of time passed, so if the function is set to request after 500 ms (of the last keyboard trigger, not for the entire pin), the user will have time to type the entire code. **Important** This time should reset after every keyboard strike, otherwise the user would have only 500 ms to write the full pin.

## React Router
Cheat sheet: `https://stackdiary.com/tutorials/react-router-cheat-sheet-reference/`.
Official Docs: `https://reactrouter.com/en/main/start/overview`.
Routers in React enable client-side routing, an extremely important concept for *Single Page Applications* (SPA).
**React Router** is the most famous library to implement routing in React apps. It includes several components and functions that helps with the routing of an app.

### Routers Components
There are different types of router depending on the environment an app is running in (but an app should only use one router):
* `<Router>`: the low-level interface that is shared by all router components.
*   `<BrowserRouter>`:  For web projects.
*   `<MemoryRouter>`:  For testing.
*   `<HashRouter>`:  For web browsers when the URL should not (or cannot) be sent to the server.
*   `<NativeRouter>`: For React Native projects. 
*   `<StaticRouter>`: For web apps in node.

In terms of React, **routers are context providers** that supplies routing information to the rest of the app. So an app should be contained within a **router** to  enable routing (e.g. `<Router><App /></Router>`).
But there's also the option to use a function instead of a component (e.g. `createBrowserRouter()` or `createHashRouter`), with the exception of the Native router. This functions come with v6.4 and support the new data APIs. List of APIs: `https://reactrouter.com/en/main/routers/picking-a-router#data-apis`

### Route Component
Routes are objects passed to the router creation functions. They couple URL segments to components, data loading and data mutations.
```jsx
{
	// it renders this element
	element: <TeamList />,
	// when the URL matches this segment
	path: "/teams/",
	// with this data loaded before rendering
	loader: async ({ request, params }) => {
		return fetch(
			`/fake/api/teams.json`,
			{ signal: request.signal }
		);
	},
	// performing this mutation when data is submitted to it
	action: async ({ request }) => {
		return updateFakeTeam(await request.formData());
	},
	// and renders this element in case something went wrong
	errorElement: <ErrorBoundary />,
}
``` 
In case the components are used, the props to the element are identical to the properties of the route objects.
*Note:* the `loader`, `action` and `errorElement` are part of the data APIs and therefore not available within a router component, only the router creation functions.

#### Dynamic Paths
Within a `<Route>` component the path uses a special syntax for dynamic segments in the path, the `:` (colon). 
```jsx
// code
<Route path: "/teams/:teamId" element{<Team />} />
// more code
```
When using dynamic segments, inside the component rendered by the `<Route>`, there's a special hook to retrieve this parameters in the path: `useParams()`.
The `useParams` hook returns an object of key / value pairs of the dynamic params from the current URL that were matched by the `<Route path>`. Child routes inherit *all* params from their parent routes.
```js
function Team () {
	const { teamId } = useParams();
}
```
You can have multiple dynamic segments in one route path:
`<Route path="/c/:categoryId/p/:productId" />;`
But these cannot be "partial":
* 🚫 `/teams-:teamId`
* ✅ `/teams/:teamId`
* 🚫 `/:category--:productId`
* ✅ `/:category/:productId`

#### Optional Paths
A route segment can be optional by adding a `?` to the end of the segment: `path="/:lang?/categories"`.

#### Splats
Also known as *catchall* and *star* segments. If a route path pattern ends with `/*` then it will match any characters following the `/`, including other `/` characters.

### Routes Component
Rendered anywhere in the app, `<Routes>` will match a set of child routes from the current location. Whenever the location changes, `<Routes>` looks through all its child routes to find the best match and renders that branch of the UI.
Previously, a `<Switch>` component existed that went downwards to select a route, but `<Routes>` doesn't do that, it does NOT go top to bottom but rather ranks the routes according to the number of segments, static segments, dynamic segments, splats, etc. and picks the most specific match.
For example:
```jsx
<Route path="/teams/:teamId" />
<Route path="/teams/new" />
```
The URL `http://example.com/teams/new` matches both routes, but the second one is more specific.

### Link Component
A `<Link>` is an element that lets the user navigate to another page by clicking or tapping on it. This component renders an accessible `<a>` element with a real `href`, but slightly different.

#### `<a>` vs `<Link>`
The `<a>` tag tells the browser to redirect to the `href` page, i.e. another page. On the contrary, the `<Link>` component uses client-side routing [so it doesn't redirect to another page, but shows a different URL while remaining in the page and changing it's content (this allows creating SPAs)].
However there's a prop called `reloadDocument` which makes the `<Link>` component act as a normal `<a>` with an `href` (skips client-side routing and let the browser handle the transition normally).

#### Routes in the `<Link>` component
To redirect to a certain path one needs to specify the `to` prop with the path to redirect to. A `path` can be:
* A relative value (that does not begin with `/`): resolves relative to the parent route.
* `..`: links to routes further up the hierarchy.
* Relative to: it's possible to specify whether a route is relative to another route or a  path (`relative="route"` or `relative="path"`). e.g.
	```jsx
	<Route path="/" element={...}>
	  <Route path="contacts/:id" element={...} />
	  <Route path="contacts/:id/edit" element={...} />
	</Route>;
	```
	* `relative="route"`: from `contacts/:id/edit` using `..` in a `<Link>` goes up to `'/'` (the previous route).
	* `relative="path"`: from `contacts/:id/edit` using `..` in a `<Link>` goes up to `contacts/:id` (the previous path).

### NavLink Component
A `<NavLink>` is a special kind of `<Link>` that knows whether or not it is *active* or *pending*. By default, an active class is added to this component when it is active (for CSS).
This special component allows the props `className` and `style` to receive functions which have two parameters: `isActive` and `IsPending` for conditional styling.

### Navigate Component
A `<Navigate>` element changes the current location when it is rendered. It's usually better to use `redirect` in `loaders` and `actions` (refer to [Route Component](#route-component)) than this hook wrapper or the hook itself (`useNavigate()`).

### Outlet Component
An `<Outlet>` should be used in parent route elements to render their child route elements, this allows nested UI. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
```jsx
function Dashboard() {
	return (
		<div>
			<h1>Dashboard</h1>
			{/* This element will render either <DashboardMessages> when the URL is "/messages", <DashboardTasks> at "/tasks", or null if it is "/" */}
			<Outlet />
		</div>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />}>
				<Route
					path="messages"
					element={<DashboardMessages />}
				/>
				<Route path="tasks" element={<DashboardTasks />} />
			</Route>
		</Routes>
	);
}
```

### A "problem" with client-side routing
When using **React Router** for client-side routing in your SPA, URL routes *may* not work when a page is refreshed, the URL is written manually, or when the URL is shared. This issue may be due to the browser making a GET request to the server for a route that is not handled on it. There's client-side routing set up, but not a server-side routing set up.
This blog discusses some possible solutions: `https://sentry.io/answers/why-don-t-react-router-urls-work-when-refreshing-or-writing-manually/`.

## State Management
An app **state management is the process of maintaining knowledge of an application’s inputs across multiple related data flows** that form a complete business transaction, or a session, to understand the condition of the app at any given moment.
[There are multiple ways to manage states in an app, but i'll only go into detail with zustand, the one i'll be studying / using.]

### How it works?
State management makes the state of an app visible in the form of a data structure, improving developers ability to work with the app.
There are two accepted models for state management: 
* Front end: client side.
* Back end: server side.

### How to implement / use it?
The top 3 options are:

#### Context
The built-in method is using the `useContext` hook. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

#### Redux Toolkit
**Redux Toolkit** (RTK) is a library for managing state in JavaScript applications. RTK is often used as an alternative to writing Redux applications from scratch, as it provides a set of conventions and utilities that can make it easier and faster to build Redux applications.

#### Zustand
Zustand is a small, fast and scalable bear-bones state-management solution. It has an **API based on hooks**, isn’t boilerplatey or opinionated [so, made to be used with React, unlike Redux].

##### How to use it?
1. Create a store: *store is a hook* that can have anything in it: primitives, objects, functions. The `set` function merges state.
	```js
	import { create } from 'zustand'

	const useStore = create((set, get) => ({
		bears: 0,
		increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
		removeAllBears: () => set({ bears: 0 }),
	}))
	```
	*Note:* the `set` function merges state at one level by default.  If there's nested objects, merge them explicitly. To disable the merging behavior, you can specify a replace boolean value for `set`: `set((state) => newState, true)`.

2. Bind with a component: the *hook can be used anywhere, without the need of providers*.
	 ```jsx
	function BearCounter() {
		const bears = useStore((state) => state.bears)
		const increasePopulation = useStore((state) => state.increasePopulation)
		return (
			<>
				<h1>{bears} around here...</h1>
				<button onClick={increasePopulation}>one up</button>
			</>
		)
	}
	```


Helpful links:
* https://felixgerschau.com/react-rerender-components/
