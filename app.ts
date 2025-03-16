//Union and Intersection allow us to combine multiple types together to create some more complex types.

// union = pipe operator
// intersection = end operator

type StringOrNumber = string | number | boolean;     //One or the other

function acceptVal(val: StringOrNumber): void{
    console.log(val);
}

acceptVal(1);
acceptVal('string');
acceptVal(false);

interface BusinessPartner {
    name: string;
}

interface ContactDetails {
    email: string;
    phone: string;
}

type BusinessContact = BusinessPartner & ContactDetails;    //this type alias represents an object representing a combination of two other types.

const contact: BusinessContact = {
    name: "Agustín",
    email: "contact@email.com",
    phone: ""
}

interface Individual {
    name: string;
    birthday: Date;
}

interface Organization {
    companyName: string;
    workPhone: string;
}

type ContactType = Individual | Organization

type CompContact = Individual & Organization

function addContact(contact: ContactType){
    if("birthday" in contact){      //this checks if birthday is a property of the contact
        console.log(contact.name, contact.birthday)
    }else{
        console.log(contact.companyName, contact.workPhone)
    }
}