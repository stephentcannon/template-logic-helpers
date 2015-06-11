template-logic-helpers
=======================

a package of simple template logic helpers i find myself repeating

isEqual
=======
is X equal to Y

````
{{#if isEqual X Y}}
 true
{{else}}
 false
{{/if}}
````

isNotEqual
===========
is X not equal to Y

````
{{#if notEqual X Y}}
 it is
{{else}}
 it is not
{{/if}}

````

isGT
====
is X > Y

````
{{#if isGT X Y}}
 it is
{{else}}
 it is not
{{/if}}
````

isGTE
=====
is X >= Y

````
{{#if isGTE X Y}}
 it is
{{else}}
 it is not
{{/if}}
````

isLT
====
is X < Y

````
{{#if isLT X Y}}
 it is
{{else}}
 it is not
{{/if}}
````

isLTE
=====
is X <= Y

````
{{#if isLTE X Y}}
 it is
{{else}}
 it is not
{{/if}}
````

contains(list, val)
===================
underscore contains in a template helper
{{#if contains "[1, 2, 3]" "3"}}
 it does
{{else}}
 it does not
{{/if}}
