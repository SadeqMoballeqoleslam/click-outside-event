# what is this?

This is a Javascript event that reacts when every click occurs outside an element.

# Installation

```
npm i click-outside-eventt
```

# Usage

JS
```
import {initClickOutsideEvent} from 'click-outside-eventt';

initClickOutsideEvent();
```

HTML
```
<button onclickoutside="console.log($el, $event)">
```