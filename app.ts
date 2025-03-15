// A generic allows us to have more flexible functions, methods, classes, etc. that can accept any data types to be set.

class DataStore<T> {    // This is a generic
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index];
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

const data = new DataStore<string>() // Here it is specified the type that will be used for this instance of DataStore
data.getItem(0)

interface User {
    name: string;
    id: number
}

const dataUser = new DataStore<User>() // this demonstrates that it doesn't have to be a primitive type, but any type.


//

function getValue<K, V>(key: K, value1: V, value2: V): V {
    if(key) {
        return value1;
    }
    return value2;
}

const n1: number = 1;
const n2: number = 2;
getValue<string, number>("Hello", n1, n2); //   <string, number> Is optional here, but it's written just to be more strict.