// Mouse Event
class MouseEventExample {
  constructor() {
    this.btnElement = document.getElementById('mouse-btn');
    this.messageElement = document.getElementById('mouse-message');
    this.btnElement.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    this.messageElement.textContent = 'Mouse button clicked!';
  }
}

new MouseEventExample();

// Focus Event
class FocusEventExample {
  constructor() {
    this.inputElement = document.getElementById('focus-input');
    this.messageElement = document.getElementById('focus-message');
    this.inputElement.addEventListener('focus', this.handleFocus.bind(this));
  }

  handleFocus() {
    this.messageElement.textContent = 'Input is focused';
  }
}

new FocusEventExample();

// Keyboard Event
class KeyboardEventExample {
  constructor() {
    this.inputElement = document.getElementById('keyboard-input');
    this.messageElement = document.getElementById('keyboard-message');
    this.inputElement.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyUp(event) {
    this.messageElement.textContent = 'Key pressed: ' + event.key;
  }
}

new KeyboardEventExample();

// DOM Event with Web Components
class CustomComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p>Custom DOM Event Component</p>';
  }
}

customElements.define('custom-component', CustomComponent);
