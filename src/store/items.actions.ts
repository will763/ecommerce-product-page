export function Add(counter:number) {
    return {
        type: "ADD",
        payload : counter
    }
}

export function Remove(idx:number) {
    return {
        type: "REMOVE",
        payload : idx
    }
}