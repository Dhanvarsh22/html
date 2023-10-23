function allowDrop(event) {
  event.preventDefault();
}

function drag(event, element) {
  event.dataTransfer.setData("text", element);
}

function drop(event) {
  event.preventDefault();
  const element = event.dataTransfer.getData("text");
  const formPreview = document.getElementById("preview-form");

  if (element === "Layout") {
    const layoutDiv = document.createElement("div");
    layoutDiv.className = "layout";
    layoutDiv.setAttribute("draggable", "true");
    layoutDiv.setAttribute("ondragstart", "drag(event, 'Layout')");
    layoutDiv.ondrop = function (event) {
      splitFormPreview();
      event.preventDefault();
    };
    formPreview.appendChild(layoutDiv);
  } else if (element === "Label") {
    const label = document.createElement("label");
    label.innerText = "Label Text:";
    const input = document.createElement("input");
    input.type = "text";
    formPreview.appendChild(label);
    formPreview.appendChild(input);
  } else if (element === "Text Box") {
    const textBox = document.createElement("input");
    textBox.type = "text";
    formPreview.appendChild(textBox);
  } else if (element === "Button") {
    const button = document.createElement("button");
    button.innerText = "Button";
    formPreview.appendChild(button);
  } else if (element === "Check Box") {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    formPreview.appendChild(checkbox);
    const label = document.createElement("label");
    label.innerText = "Check Box Label";
    formPreview.appendChild(label);
  } else if (element === "Radio Button") {
    const radio = document.createElement("input");
    radio.type = "radio";
    formPreview.appendChild(radio);
    const label = document.createElement("label");
    label.innerText = "Radio Button Label";
    formPreview.appendChild(label);
  } else if (element === "Table") {
  } else if (element === "Navigation") {
    const link = document.createElement("a");
    link.href = "#";
    link.innerText = "Navigation Link";
    formPreview.appendChild(link);
  } else if (element === "Image") {
    const image = document.createElement("img");
    image.src = "path_to_your_image.jpg";
    formPreview.appendChild(image);
  }
}
function reloadPage() {
  window.location.reload();
}
function loadPreview() {
  const formPreview = document.getElementById("form-preview");
  const previewContent = formPreview.innerHTML;
  const newTab = window.open();
  newTab.document.open();
  newTab.document.write("<html><head><title>Form Preview</title></head><body>");
  newTab.document.write('<div id="preview-content">');
  newTab.document.write(previewContent);
  newTab.document.write("</div></body></html>");
  newTab.document.close();
}
function reloadPage() {
  window.location.reload();
}
function clearFormPreview()
 {
  var previewForm = document.getElementById('preview-form');
  previewForm.innerHTML = '';
}
document.getElementById('clear-button').addEventListener('click', clearFormPreview);
function clearFormPreview() {
  var previewForm = document.getElementById('preview-form');
  previewForm.innerHTML = ''; // Clear the form content
}

document.getElementById('clear-button').addEventListener('click', clearFormPreview);


function saveFormPreview() {
  const formPreview = document.getElementById('preview-form');
  const previewContent = formPreview.innerHTML;
 
 
  localStorage.setItem('formPreviewContent', previewContent);

  alert('Form preview has been saved.');
}