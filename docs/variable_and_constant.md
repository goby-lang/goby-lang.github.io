---
id: variable-and-constant
title: Variable, Constant and Assignment
---

Variables and constants can be declared by assigning a value. Goby supports alphanumeric plus underscore and a trailing question sign, which is `[a-zA-Z0-9_\?]` (in regexp form), for variable/constant names.

## Variables

Variable names cannot start with an uppercase letter, which are for declaring constants. Use snake-case and avoid using uppercase for consistency.
Current Goby supports only two types of variables: **local** and **instance** variables. See the assignment section in syntax rules for the usages.

```ruby
foo = "foo" # local variable
@bar = "bar" # instance variable
```

## Constants

Constant's scope is global, and the name should start with an uppercase letter. Use camel-case for Constant names.
Goby's constant has a big difference from the one in Ruby language: Goby's constants is not reentrant and can't be re-initialized twice. This means you receive an error if you try to assign a value to an existed constant like:

```ruby
Foo = 10
Foo = 100 #=> ConstantAlreadyInitializedError
```

Module names and class names are also constants, which can be defined with module and class keywords respectively, thus you can't assign a value to a constant if the name has already been defined as a module or a class.

```ruby
class Foo; end

Foo = 100 #=> ConstantAlreadyInitializedError
module Foo; end

Foo = 100 #=> ConstantAlreadyInitializedError
```

Thus constant's declaration has a limitation: except defining classes or modules, you can only define constants to preserve initial values like:

```ruby
Foo = 10
Bar = "hello"
```

Redeclaring modules or classes is possible, like:

```ruby
class Foo; end
class Foo
  def bar
    42
  end
end
```

Constant is global-scoped, and evaluated on runtime. Thus you receive a runtime error for the following code:

```ruby
Const = "foo"
def bar
  Const = "bar"
end
bar
#» ERROR: ConstantAlreadyInitializedError: Constant Const already been initialized. Can't assign value to a constant twice.. At :2
```

## Assignment

### Normal Assignment

In Goby, we support normal assignment like:

```ruby
a = 1
@foo = bar
Constant = 123
```

We also support chained assignment like

```ruby
a = b = c = [1, 2]
```

And the chained assignment is just a kind of syntactic sugar, which is equivalent to

```ruby
a = [1, 2]
b = [1, 2]
c = [1, 2]
```

So changing one of the variables won't effect others

```ruby
a = b = [1, 2]
b[0] = 2
puts(b) #=> [2, 2]
puts(a) #=> [1, 2]
```

### Multi-variable Assignment

Multiple variable assignment is also supported in Goby:

```ruby
a, b = [1, 2]
puts(a) #=> 1
puts(b) #=> 2
```
But we only expect the assigned value to be an Array object, which means we do not support something like:

```ruby
a, b = 1, 2
```

And if the number of array's elements are less than the number of variables, those additional variables's value would be nil:

```ruby
a, b = [1]
puts(a) #=> 1
puts(b) #=> nil
```

### Note

We do not support multi-variable assignment and chained assignment for Constant, only for local variable and instance variable
### About Return Value

In Ruby, assignment will return value if you need them, like chained assignment or assign variable in if statement's condition. Goby also support this feature, so the following use cases are all available in Goby

```ruby
if @user = User.find(id)
  # do something
end

puts(a = 10)
```


