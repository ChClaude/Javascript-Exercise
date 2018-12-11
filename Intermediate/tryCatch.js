const convertToRand = (dollar) => {
    if (typeof dollar === "number") {
        return dollar * 13;
    } else {
        throw Error("Ammount needs to be in number");
    }
}

try {
    console.log(convertToRand("five"));    
} catch (error) {
    console.log("An error occured");
}

console.log("This will not display if an error occurs");