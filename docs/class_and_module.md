---
id: class-and-module
title: Class and Module
---

In Goby, class and module statements is just like Ruby's:

```ruby
class Foo
  def bar
    # do something
  end
end
```

But currently we haven't support syntactic sugar for define singleton class like

```ruby
class << self
end
```

## Include & Extend

Both `include` and `extend` are supported in Goby, usage is just like in Ruby:

### Include

```ruby
module Bar
  def bar
    10
  end
end

class Foo
  include Bar
end

puts(Foo.new.bar) #=> 10
```

### Extend

```ruby
module Foo
  def ten
    10
  end
end

class Bar
  extend Foo
end

puts(Bar.ten) #=> 10
```
