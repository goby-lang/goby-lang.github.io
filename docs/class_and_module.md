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

### Module definition

```ruby
module Foo
  def foo
    99
  end
end

module Bar
  def bar
    88
  end
end
```

Module names should be "`[A-Z][A-Za-z0-9_]+`" (UpperCamelCase). Modules cannot be inherited.

```ruby
class Baz
  include Foo    # `foo` will be an instance method
  extend Bar     # `bar` will be a class method
end

Baz.new.foo      #=> 99
Baz.bar          #=> 88
```

Modules can be included into other modules or classed via "`#include`", as well as can be used for extending other classes or modules via "`#extend`".

In Goby, "**composition over inheritance**" concept is recommended.

```ruby
module Foo
  def foo
    99
  end
end

Foo.new.foo  #=> 99
```

Actually, Goby's module can be even **instantiated** via "`new`" like "`Foo.new`".

### Class definition

```ruby
class Foo
  def bar
    99
  end
end

class Baz < Foo
end

Baz.new.bar  #=> 99
```

Class names should be "`[A-Z][A-Za-z0-9]+`" (UpperCamelCase). Inheritance with "`<`" is supported.

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

## Showing ancestors

```ruby
module Foo
  def bar
    99
  end
end

class Bar
  include Foo
end

Bar.ancestors
#» [Bar, Foo, Object]
Bar.singleton_class.ancestors
#» [#<Class:Bar>, #<Class:Object>, Class, Object]
```

You can call `#ancestors` to show the inheritance chain. And `singleton_class.ancestors` to show singleton classes.
