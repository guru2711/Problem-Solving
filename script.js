/**Books obj are be stored i arr */
let myLibrary = [];

const showBtn = document.querySelector(".btn_show");
const addBook = document.querySelector(".btn_addBook");
const details = document.querySelector(".details");
const showBook = document.querySelector(".showBook");
const form = document.querySelector(".form");
const tbody = document.querySelector("tbody");

function Book() {
  tbody.innerHTML = "";
  let i = 1,
    a;
  for (let book of myLibrary) {
    // cconcept table
    a = i;
    const tr = document.createElement("tr");
    tr.className = "tr";
    tr.innerHTML = `
    <td>${i++}</td>
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td><input type="checkbox" name="status"> <button  class="btnDel">Del</button></td>
    `;
    tbody.append(tr);
  }
  const tn = document.querySelectorAll(".btnDel");
  let getCurr_El = [...tn];

  console.log(getCurr_El);
  getCurr_El.map((e, i) =>
    e.addEventListener("click", () => {
      console.log(e, i);
      myLibrary.splice(i, 1);
      Book();
      // e.remove();
      // e.target.parentElement.parentElement.remove();
    })
  );
}
// showBtn.addEventListener("click", Book);

// add Book
addBook.addEventListener("click", addBookToLibrary);

const addTitle = document.querySelector("input[name=title]");
const addAuthor = document.querySelector("input[name=author]");
const addPages = document.querySelector("input[name=pages]");
const addStatus = document.querySelector("#status");

function addBookToLibrary(e) {
  e.preventDefault();
  // user inputs (books) to library

  const title = addTitle.value;
  const author = addAuthor.value;
  const status = addStatus;

  const book = { author, title, status };
  // if (title.length > 0) {
  myLibrary.push(book);
  Book();
  clear();
  // }

  function clear() {
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
  }
  console.table(myLibrary);
}
