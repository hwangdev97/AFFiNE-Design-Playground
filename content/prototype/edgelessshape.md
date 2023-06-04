---
title: 'Edgeless Shape Button'
layout: detail
head:
  meta:
    - name: 'keywords'
      content: 'AFFiNE, Edgeless, Shape, Button, Demo, Prototype'
    - name: 'description'
      content: 'Edgeless Shape Button Demo'

---
::EdgelessShape
#description
This will be rendered inside the `description` slot.
use: The slot to bind on, you must provide a use via $slots.{your_slot} in <template>.
Type: Vue slot Function
Example: $slots.default
unwrap: Whether to unwrap the content or not. This is useful when you want to extract the content nested in native Markdown syntax. Each specified tag will get removed from AST.
Type: Boolean or String
Default: false
Example: 'ul li'
::