# Shopping Cart | Odin Project w/ React

A simple e-commerce-style React application built with React + React Router, featuring product browsing, filtering, sorting, and a functional shopping cart system. 

I finally met the project requirement, even though it took me a few weeks to do it. Yooohooo!

Here's everything I did.

#### Shop Page

* Fetches products from an API (DummyJSON)
* Displays products dynamically
* Category-based filtering using URL query params
* Sorting:
    * Price (Low → High)
    * Price (High → Low)

#### Data Handling

* Products fetched once and stored in state
* Filtering and sorting are derived during render
* No unnecessary re-fetching

#### Cart System
* Add items to cart
* Prevent duplicate items
* Update item quantity (1–10)


## Here's everything I learned.

#### React State Flow
* State drives UI, not function calls
* UI updates only when: `state changes → re-render`

#### Derived State
This is one of things that I really have to remember. Instead of storing the value in a separate state, I could easily calculate them from existing states.

* **Bad:** `const [total, setTotal] = useState(...)`
* **Good:** `const total = quantity * price`

#### Single Source of Truth
* Cart state lives in NavBar (layout)
* Child components DO NOT own the data
* Avoid duplicating state in children
* Lifting States Up

    ```
    NavBar (parent)
    |--> Shop -> adds items
    |--> Cart -> updates/removes items
    ```

#### React Router layout

`<Link>` vs `<a>`

```
<a href="/cart">
```

I encountered a bug when I confused the `<Link>` and the `<a>` tags, as I clicked on my cart, I was confused on why there was no item in there, apparently the browser got refreshed every time I click on it.

### Future Improvements & Features
* Remove items in cart
* Add checkout flow
* Improve UI/UX (animations, transitions, responsiveness)

### Final Thought

I think this was the biggest project I had to do so far. This is the culmination of my React understanding, from `setting up the environment`, `passing props`, `states`, `APIs`, `react-router` and the overall architecture of the project. Overall I was satisfied with the final output, and it meets the project requirement.

#### References
* [DummyJSON](https://dummyjson.com/)
* [Controlling an input with a state variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
* [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
* [Lifting state up by example](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
[Passing props to a component](https://react.dev/learn/passing-props-to-a-component#passing-props-to-a-component)
* [React Router](https://reactrouter.com/6.30.3/start/tutorial)
* [useOutletContext](https://reactrouter.com/api/hooks/useOutletContext)
* [Sort an array of objects in React and render them](https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them)
* [Color Hunt](https://colorhunt.co/palette/222831393e4600adb5eeeeee)