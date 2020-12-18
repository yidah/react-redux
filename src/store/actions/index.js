// as below, it is possible to export something from a file without importing from this file
// this file groups all exports from separate files
// so I can point to this file to import something from any of the files  
export { 
    add,
    subtract,
    increment,
    decrement
} from './counter';

export { 
    storeResult,
    deleteResult
} from './result';