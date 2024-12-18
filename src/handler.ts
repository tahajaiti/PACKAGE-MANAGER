const viewAuthorsBtn = document.getElementById('viewAuthors') as HTMLButtonElement;
const viewPackBtn = document.getElementById('viewPackages') as HTMLButtonElement;
const authorsDisplay = document.getElementById('authorsDisplay') as HTMLDivElement;
const packagesDisplay = document.getElementById('packagesDisplay') as HTMLDivElement;

const openAdding = document.getElementById('openAdding') as HTMLButtonElement;
const addBtnsContainer = document.getElementById('addBtnsContainer') as HTMLDivElement;


const editHandlers = {
    author: {
        container: document.getElementById('editAuthorContainer') as HTMLDivElement,
        openBtn: document.querySelectorAll<HTMLButtonElement>('#openEditAuthor'),
        closeBtn: document.getElementById('closeEditAuthor') as HTMLButtonElement
    },
    package: {
        container: document.getElementById('editPackageContainer') as HTMLDivElement,
        openBtn: document.querySelectorAll<HTMLButtonElement>('#openEditPackage'),
        closeBtn: document.getElementById('closeEditPackage') as HTMLButtonElement
    }
}

const handlers = {
    author: {
        container: document.getElementById('authorContainer') as HTMLDivElement,
        openBtn: document.getElementById('openAuthor') as HTMLButtonElement,
        closeBtn: document.getElementById('closeAuthor') as HTMLButtonElement,
    },
    package: {
        container: document.getElementById('packageContainer') as HTMLDivElement,
        openBtn: document.getElementById('openPackage') as HTMLButtonElement,
        closeBtn: document.getElementById('closePackage') as HTMLButtonElement,
    },
    version: {
        container: document.getElementById('versionContainer') as HTMLDivElement,
        openBtn: document.getElementById('openVersion') as HTMLButtonElement,
        closeBtn: document.getElementById('closeVersion') as HTMLButtonElement,
    },
};

let authorsOpen: boolean = false;
let packagesOpen: boolean = false;
let addBtnsOpen: boolean = false;

openAdding.addEventListener('click', () => {
    if (addBtnsContainer && !addBtnsOpen) {
        addBtnsContainer.classList.remove('hidden');
        addBtnsOpen = true;
    } else if (addBtnsOpen) {
        addBtnsOpen = false;
        addBtnsContainer.classList.add('hidden');
    }
});

Object.keys(handlers).forEach((key) => {
    const item = handlers[key as keyof typeof handlers];
    if (item.container && item.closeBtn && item.openBtn) {
        item.openBtn.addEventListener('click', () => {
            item.container.classList.remove('hidden');
        });

        item.closeBtn.addEventListener('click', () => {
            item.container.classList.add('hidden');
        });
    }
})

viewAuthorsBtn.addEventListener('click', () => {
    if (authorsDisplay && !authorsOpen) {
        if (packagesOpen) {
            packagesOpen = false;
            packagesDisplay.classList.add('hidden');
        }
        authorsDisplay.classList.remove('hidden');
        authorsOpen = true;

    } else if (authorsDisplay && authorsOpen) {
        authorsOpen = false;
        authorsDisplay.classList.add('hidden');
    }
});

viewPackBtn.addEventListener('click', () => {
    if (packagesDisplay && !packagesOpen) {
        if (authorsOpen) {
            authorsOpen = false;
            authorsDisplay.classList.add('hidden');
        }
        packagesDisplay.classList.remove('hidden');
        packagesOpen = true;
    } else if (packagesDisplay && packagesOpen) {
        packagesOpen = false;
        packagesDisplay.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const oldMsg = document.querySelector('.msg') as HTMLDivElement || null;
    if (oldMsg) {
        console.log('MSG EXISTS', oldMsg);
        setTimeout(() => {
            oldMsg.remove();
            console.log('MSG REMOVED');
        }, 5000)
    } else {
        console.log('no msg found');
        return;
    }
});

Object.keys(editHandlers).forEach(key => {
    const item = editHandlers[key as keyof typeof editHandlers];
    if (item.openBtn && item.container && item.closeBtn) {
        item.openBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const row = btn.closest('tr') as HTMLTableRowElement;
                if (row) {
                    if (key === 'author') {
                        const [id, name, mail] = row.querySelectorAll('td');
                        const authorId = document.querySelector('#editAuthorId') as HTMLInputElement;
                        const nameInput = authorId.nextElementSibling as HTMLInputElement;
                        const mailInput = nameInput.nextElementSibling as HTMLInputElement;

                        if (authorId && nameInput && mailInput) {
                            authorId.value = String(id.textContent);
                            nameInput.value = String(name.textContent);
                            mailInput.value = String(mail.textContent);
                        }
                    } else if (key === "package") {

                        const [packId, packName, packDesc, packDate, packAuthor] = row.querySelectorAll('td');
                        const packageId = document.querySelector('#editPackageId') as HTMLInputElement;
                        const packNameInput = packageId.nextElementSibling as HTMLInputElement;
                        const packDescInput = packNameInput.nextElementSibling as HTMLInputElement;
                        const packDateInput = packDescInput.nextElementSibling as HTMLInputElement;
                        const packAuthorInput = packDateInput.nextElementSibling as HTMLInputElement;

                        if (packageId && packNameInput && packDescInput && packDateInput && packAuthorInput) {
                            packageId.value = String(packId.textContent);
                            packNameInput.value = String(packName.textContent);
                            packDescInput.value = String(packDesc.textContent);
                            packAuthorInput.value = String(packAuthor.textContent);
                        }
                    }
                }

                item.container.classList.remove('hidden');
            });
        });
        item.closeBtn.addEventListener('click', () => {
            item.container.classList.add('hidden');
        });
    }
});