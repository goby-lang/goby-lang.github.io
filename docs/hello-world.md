---
id: hello-world
title: Hello World
sidebar_label: Hello World
---

## Hello World

This "Hello World" represents an ideal coding style in Goby. Note that no inheritance with `<` has been used.

* Create a file named `hello.gb` with the following code:

```ruby
class Greet
  attr_accessor :audience, :head, :tail

  def initialize
    @head = "Hello, "
    @tail = "!"
  end

  def name
    audience.name
  end

  def say
    puts head + name + tail
  end
end

module MyName
  attr_reader :name

  def initialize
    @name = self.class.to_s
  end
end

class World
  include MyName
end

greet = Greet.new
greet.audience = World.new
greet.say

class Goby
  include MyName
end

greet.audience = Goby.new
greet.say
```

* Then run:

```bash
$ goby hello.gb
#=> Hello, World!
#=> Hello, Goby!
```

* You can also run such codes interactively via Goby's REPL (grb) by:

```bash
goby -i
```