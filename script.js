console.log("Hello")


function getSplits(n,totalBill,nhigh,nmed,nlow){
    let contributions = [];
    let hp = 0;
    let mp = 0;
    let lp = 0
    // Get percentage
    // if any two of them is zero
    if ((nhigh==0 && nmed==0) || (nmed==0 && nlow==0) || (nhigh==0 && nlow==0)){
        lp = 1;
        hp = 1;
        mp = 1
    }
    // if any one of them is zero
    else if(nhigh==0) {
        mp = nlow/n;
        lp = nmed/n;
    }
    else if(nmed==0) {
        hp = nlow/n;
        lp = nhigh/n;
    }
    else if(nlow==0) {
        hp = nmed/n;
        mp = nhigh/n;
    }
    else {
        hp = 0.6;
        mp = 0.3;
        lp = 0.1;
    }
   
    let highContribution = totalBill*hp;
    let medContribution = totalBill*mp;
    let lowContribution = totalBill*lp;

     // Contribution from high
    for(let i=1;i<=nhigh;i++){
        contributions.push(parseFloat((highContribution/nhigh).toFixed(2)));
        
    }
    // Contribution from medium
   
    for(let i=1;i<=nmed;i++){
        contributions.push(parseFloat((medContribution/nmed).toFixed(2)));
        
    }
    // Contribution from low
   
    for(let i=1;i<=nlow;i++){
        contributions.push(parseFloat((lowContribution/nlow).toFixed(2)));
        
    }
    
    if ((nhigh==0) && (nmed>=nlow)){
        contributions.reverse()
    }
    else if ((nmed==0) && (nhigh>=nmed)){
        contributions.reverse()
    }
    else if ((nlow==0) && (nhigh>=nmed)){
        contributions.reverse()
    }



    console.log(contributions);
    (() => {
        sum = 0;
        for(let i=0;i<contributions.length;i++){
            sum = sum + contributions[i]
        }
        console.log(parseFloat(sum.toFixed(2)))
    })();
    console.log()
    
}

let totalBill = 200;
let n = 10;
let nhigh = 6;
let nmed = 2;
let nlow = 2;

getSplits(n,totalBill,nhigh,nmed,nlow)