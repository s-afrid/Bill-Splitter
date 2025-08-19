console.log("Hello")
let hcontribution = []
let mcontribution = []
let lcontribution = []

function getSplits(totalBill,nhigh,nmed,nlow){
    
    // Unit for each tier
    let high_unit = 3;
    let med_unit = 2;
    let low_unit = 1;
    // total units
    let total_units = (high_unit*nhigh) + (med_unit*nmed) + (low_unit*nlow);
    // value per unit
    let per_unit = totalBill/total_units;

    // high contribution
    for(let i = 1; i<=nhigh;i++){
        hcontribution.push(parseFloat((high_unit*per_unit).toFixed(2)))
    }
    // medium contribution
    for(let i = 1; i<=nmed;i++){
        mcontribution.push(parseFloat((med_unit*per_unit).toFixed(2)))
    }
    // low contribution
    for(let i = 1; i<=nlow;i++){
        lcontribution.push(parseFloat((low_unit*per_unit).toFixed(2)))
    }
}

let totalBill = 200;
let n = 10;
let nhigh = 7;
let nmed = 1;
let nlow = 2;

getSplits(totalBill,nhigh,nmed,nlow)