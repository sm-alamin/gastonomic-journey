import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="card  bg-base-100 shadow-xl border px-5 mt-5 hover:bg-slate-200">
        <div className="card-body">
          <h2 className="card-title">
            What is the differences between uncontrolled and controlled
            components?
          </h2>
          <p>
            Uncontrolled components are ones that keep their own internal state.
            For example, an uncontrolled input component keeps track of its own
            value, and that value can be accessed through the DOM. This can make
            it easy to get started with React, but it can also lead to issues
            with consistency and predictability.
            <br />
            <br />
            Controlled components, on the other hand, are components that rely
            on their parent components to handle state. This means that the
            parent component will pass down props to the child component, and
            the child component will use those props to render the appropriate
            state. This approach can be more complex, but it provides greater
            consistency and predictability in the behavior of the components.
          </p>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl border px-5 mt-5 hover:bg-slate-200">
        <div className="card-body">
          <h2 className="card-title">
            What is the differences between uncontrolled and controlled
            components?
          </h2>
          <p>
            PropTypes is a library included with React that allows us to
            validate the props passed to a component. It provides a way to
            declare the expected type of each prop, and will throw a console
            warning if the actual prop passed to the component does not match
            the expected type. Here's an example of how to use PropTypes:
            <br />
            <br />
          </p>
          <li>
            <a href="">
              First, We need to install the prop-types package using npm or
              yarn:{" "}
            </a>
            <code className="text-primary">npm install prop-types</code>
          </li>
          <li>
            <a href="">
              Then,We have to import the PropTypes object from the prop-types
              package in our component file:{" "}
            </a>
            <code className="text-primary">
              import PropTypes from 'prop-types';
            </code>
          </li>
          <li>
            <a href="">
              Then,We have to declare the expected type for each prop in our
              component using the PropTypes object.{" "}
            </a>
          </li>
          <li>
            <a href="">
              If a prop is required, we can use the isRequired method to declare
              that it must be passed to the component
            </a>
          </li>
          <li>
            <a href="">
              If a prop should match a specific set of values, you can use the
              oneOf method to declare an array of valid values
            </a>
          </li>
          <li>
            <a href="">
              By validating our props with PropTypes, we can catch errors early
              and ensure that our component is being used correctly.
            </a>
          </li>
        </div>
      </div>

      <div className="card  bg-base-100 shadow-xl border px-5 mt-5 hover:bg-slate-200">
        <div className="card-body">
          <h2 className="card-title">
            What is the difference between nodejs and express js?
          </h2>
          <p>
            Node.js is a JavaScript runtime environment that allows developers
            to run JavaScript on the server-side. It provides an event-driven,
            non-blocking I/O model that makes it lightweight and efficient.
            Node.js allows developers to build scalable and high-performance web
            applications that can handle a large number of concurrent
            connections.
            <br />
            <br />
            Express.js, on the other hand, is a web application framework built
            on top of Node.js. It provides a set of features and tools to help
            developers build web applications more quickly and easily.
            Express.js simplifies the process of building web applications by
            providing a robust set of middleware that handles common web
            application tasks, such as routing, handling HTTP requests and
            responses, and serving static files.
            <br />
            <br />
            While Node.js is a runtime environment, Express.js is a framework
            that is built on top of Node.js. Express.js uses the core features
            of Node.js to build web applications quickly and efficiently.
            Express.js provides a simple and easy-to-use interface for
            developers to build web applications that can handle large amounts
            of traffic and requests.
          </p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl border px-5 mt-5 mb-5 hover:bg-slate-200">
        <div className="card-body">
          <h2 className="card-title">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            In React, a custom hook is a JavaScript function that starts with
            the prefix "use" and allows we to extract reusable logic from our
            components. Custom hooks enable us to reuse complex logic and
            stateful logic that cannot be achieved by composing existing React
            hooks.
            <br />
            <br />
            The primary motivation for creating a custom hook is to avoid code
            repetition and to simplify the component's logic. When a component
            has logic that it reuses in multiple places, a custom hook can help
            consolidate that logic and make it reusable across multiple
            components.
            <br />
            <br />
            Custom hooks can also help to clean up and separate concerns in our
            component code. By abstracting away complex logic into a custom
            hook, the component code can be more straightforward and easier to
            read, understand, and maintain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
