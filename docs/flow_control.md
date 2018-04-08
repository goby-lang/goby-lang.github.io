---
id: flow-control
title: Flow Control
---

Goby supports several ways to do flow control, like:
- `if` statement
- `break` statement
- `case` statement
- `while` statement

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

## `break` Statement

```ruby
def foo(tail)
  (5..tail).each do |t|
    if t % 2 == 0 && t % 5 == 0
      puts "ouch!"
      break
    else
      puts t
    end
  end
  puts "out of the block"
end

foo 20
#=> 5 6 7 8 9
#=> ouch!
#=> out of the block

```

## `case` statement

```ruby
def foo(str)
  case str
  when "Elf"
    puts "You might be Aragorn II!"
  when "Aragorn"
    puts "Long time no see, Aragorn!"
  when "Frodo", "Sam", "Gandalf"
    puts "One of us!"
  else
    puts "You're not yourself"
  end
end
```

`case`, `when`, `else` can be used.

## `while` statement

```ruby
decr = 10
while decr do
  if decr < 1
    break
  end
  puts decr
  decr -= 1
end
```

`while`, conditional and a `do`/`end` block can be used for a loop
