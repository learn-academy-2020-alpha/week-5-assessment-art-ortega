# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model, View, Controller

  Researched answer: the model-view-controller (MVC) architectural pattern, which enforces a separation between business logic from the input and presentation logic associated with a graphical user interface (GUI)


2. What is a gem?

  Your answer: add ons

  Researched answer:gems are plugins, additional functionalities of a product designed to fulfill specific goals



3. Why is it important to have validations in your application?

  Your answer: to ensure only valid data is saved into the database

  Researched answer: Validation will ensure any data entered by the user is valid and will prevent bugs creeping in due to invalid data.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: Depending on the type of Association we use, we can either make Person belong_to Computer or the other way around. I believe Person would hold the has_many association and the foreign key would be held by Computer

  Researched answer: by declaring that one model belongs_to another, you instruct Rails to maintain Primary Key–Foreign Key information between instances of the two models, and you also get a number of utility methods added to your mode



5. What is object-relational mapping?

  Your answer: allows us to use rails commands that'll work with the sql database

  Researched answer:ORM (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - Rest stands for Representational State Transfer. Helps you create default routes, 7 by default all mapping to the controller
- json - javascript object notation : lightweight data-interchange format
- API - application program interface  that allows other programs to communicate with the computer.
- Endpoints - the route defined by your application 
- Strong params - feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted
