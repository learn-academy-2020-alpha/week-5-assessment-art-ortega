# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T  



2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb, retrieves data 
library -the url 
:id - params 
book - name of controller
show - method name in controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

Step 1: rails generate migration add_foreign key 
Step 2: go to the new file added in db/migrate 
Step 3: add the following code - add_column :tablename, :belongsto_id, :integer
Step 4: rails db migrate - in console 
Schema should be updated



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants: string shoes: string




5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

You have to browse to the Person Class and add the following :
    validates :shirt, :pants, :shoes, presence: true
