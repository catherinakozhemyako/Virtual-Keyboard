let lang = 'ru';
let ruKeys = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']];

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  document.body.appendChild(header);
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'Virtual Keyboard';
  header.appendChild(title);
}
function createTextArea() {
  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  document.body.appendChild(textArea);
}

function createButton(role) {
  const button = document.createElement('div');
  button.classList.add('key');
  button.innerHTML = `<span>${role}</span>`;
  return button;
}

function createRow(arr) {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  arr.forEach(element => {
    const button = createButton(element);
    row.appendChild(button);
  });
  return row;
}

function createKeyboard(lang) {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard-wrapper');
  document.body.appendChild(keyboardWrapper);
  if (lang === 'ru') {
    const keyboard = document.createElement('div');
    ruKeys.forEach(element => {
      let row = createRow(element);
      keyboard.appendChild(row);
    });
    keyboardWrapper.appendChild(keyboard);
  }
  return keyboardWrapper;
}

window.addEventListener('load', () => {
  createHeader();
  createTextArea();
  createKeyboard(lang);
  }
);