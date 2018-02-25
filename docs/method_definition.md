---
id: method-definition
title: Method Definition
---

This is a sample of method definition in Goby

```ruby
def foo
  10
end

puts(foo) #=> 10
```

## Arguments

```ruby
def add(x, y)
  x + y
end

add(10, 11)  # 21
add(10)      # Argument Error
add(1, 2, 3) # Argument Error
```

Just like most languages, if you requires parameters in a method, then you need to provide right number of arguments them when calling that method. Less or more would cause argument error.

### Argument's default value
But in Goby, we have another way to define method parameters: give them a default value

```ruby
def add(x, y = 10)
  x + y
end

add(10, 11) # 21
add(10)     # 20
```

However, please make sure you place the parameters with default value after those normal parameters. Otherwise, you'll get syntax error:

```ruby
def foo(x=10, y)
end #=> Normal argument "y" should be defined before Optioned argument.
```

