# bind
Here, you're defining a simple function called greet that takes a message parameter. Inside the function, you're using template literals to log a message that includes the provided message parameter and the name property of the this object.
we're creating an object named person with a single property, name, set to the value "Alice".
we're using the bind method to create a new function named greetPerson. This new function is essentially a version of the original greet function where the this value is permanently set to the person object. This means that whenever you call greetPerson, the this value inside the function will always refer to the person object.
When you call greetPerson and pass in a message ("Hello" and "Hi" in this case), the function executes with the this value set to the person object. As a result, the template literal inside the function logs the provided message along with the name property of the person object, which is "Alice".
Thought Process:

    You started by defining a function greet that takes a message and logs it along with a name property.
    You then created an object person with a name property set to "Alice".
    The purpose of using bind was to create a new function greetPerson that "binds" the this value to the person object. This ensures that whenever you call greetPerson, it will always behave as if it's being called within the context of the person object.
    Finally, when you invoked greetPerson("Hello") and greetPerson("Hi"), the messages were printed with the name "Alice" because of the binding.

In essence, the code demonstrates how you can use bind to create a new function with a fixed this value, resulting in consistent behavior when calling that function. This is a useful technique for scenarios where you want to ensure a specific context for a function, such as within object methods or event handlers.
