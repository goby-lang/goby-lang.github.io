---
id: flow-control
title: Flow Control
---

Goby supports several ways to do flow control, like:
- if statement
- case statement
- while loop
- `break` keyword

## If Statement

Unlike Ruby, Goby only supports one way to write if statement:

```ruby
if foo
  bar
end

bar if foo # Not allowed
```

Also, Goby also support both else and elsif keywords.

```ruby
if false
  foo
elsif true
  bar
else
  buz
end
```

Just like assign statement, if statement can also used as expression, which just like Ruby. And the default return value of if statement is `nil`:

```ruby
a = if true
  10
end

puts(a) #=> 10

b = if false
  10
end

puts(b) #=> nil
```
