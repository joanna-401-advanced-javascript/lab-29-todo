'use strict';

let todoList = [];
let editing = false;

const itemsContainer = document.getElementById('items');
const header = document.getElementById('header');
const form = document.getElementById('todoForm');
const newItem = document.getElementById('item');

form.addEventListener('submit', handleSubmit);
itemsContainer.addEventListener('click', toggleComplete);
itemsContainer.addEventListener('submit', saveItem);

const itemsSource = document.getElementById('item-template').innerHTML;
const itemsTemplate = Handlebars.compile(itemsSource);

const headerSource = document.getElementById('header-template').innerHTML;
const headerTemplate = Handlebars.compile(headerSource);


function Item(text) {
  this.text = text;
  this.id = Math.random();
  this.complete = false;
}
Item.prototype.toggle = function () {
  this.complete = !this.complete;
};
Item.prototype.update = function (text) {
  this.text = text;
};

function drawItems() {
  const count = todoList.filter((item) => !item.complete).length;
  header.innerHTML = headerTemplate({ count });

  const list = todoList.map((item) => {
    item.editing = editing === item.id;
    return item;
  });

  itemsContainer.innerHTML = itemsTemplate({ list });
}

function handleSubmit(e) {
  e.preventDefault();
  todoList.push(new Item(newItem.value));
  e.target.reset();
  drawItems();
}

function toggleComplete(e) {
  const id = parseFloat(e.target.id);
  const item = todoList.filter((i) => i.id === id)[0] || {};
  if (item.id) {
    item.toggle();
    updateList(item);
    drawItems();
  }
}

function deleteItem(id) {
  todoList = todoList.filter((i) => i.id !== id);
  drawItems();
}

function editItem(id) {
  editing = id;
  drawItems();
}

function saveItem(e) {
  e.preventDefault();
  const id = parseFloat(e.target.querySelector('input').name);
  const text = e.target.querySelector('input').value;

  const item = todoList.filter((i) => i.id === id)[0] || {};
  if (item.id) {
    item.text = text;
    editItem(false); // disable edit mode
    updateList(item);
    drawItems();
  }
}

function updateList(updatedItem) {
  todoList = todoList.map((item) => (item.id === updatedItem.id ? updatedItem : item));
}
