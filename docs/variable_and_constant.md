---
id: variable-and-constant
title: Variable and Constant
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
