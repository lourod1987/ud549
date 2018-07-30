class AddressBook {
    constructor() {
        this.contacts = [];
        this.initialComplete = false;
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    getInitialContacts(callback) {
        var self = this;

        setTimeout(function() {
            self.initialComplete = true;
            if (callback) {
                return callback();
            }
        }, 3);
    }

    getContact(index) {
        return this.contacts[index];
    }

    deleteContact(index) {
        this.contacts.splice(index, 1);
    }
}