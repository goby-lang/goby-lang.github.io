---
id: method-call
title: Method Call
---

Method calls in Goby looks like:

```ruby
[1, 2, 3].first

foo.bar

"String".split("r")
```

The object before `.` is the receiver, and the identifier after `.` is method name.
Receiver can be any kind of objects, including a special expression `self`, which returns the current scope object.

```ruby
class Foo
  def self.bar
    10
  end

  puts(self.bar) #=> 10
end
```

But you can also avoid using self, the method will automatically consider `self` as receiver if no receiver is specified.

```ruby
class Foo
  def self.bar
    10
  end

  puts(bar) #=> 10
end
```


