const items = document.querySelectorAll('.item');

let draggedItem = null;

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
});

function dragStart() {
    draggedItem = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragDrop() {
    this.classList.remove('hovered');
    const draggedIndex = Array.from(items).indexOf(draggedItem);
    const droppedIndex = Array.from(items).indexOf(this);
    if (draggedIndex !== droppedIndex) {
        const draggedRect = draggedItem.getBoundingClientRect();
        const droppedRect = this.getBoundingClientRect();
        
        if (droppedIndex > draggedIndex) {
            this.parentNode.insertBefore(draggedItem, this.nextSibling ? this.nextSibling.nextSibling : null);
        } else {
            this.parentNode.insertBefore(draggedItem, this);
        }
    }
}
