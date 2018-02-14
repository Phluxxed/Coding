function capitalise (string) {
    let x = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    console.log(x);
}

capitalise('tHiS iS My STRIng');