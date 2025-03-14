// let output = document.querySelector("#output");
// let tr = document.createElement("tr");
// let td = document.createElement("td");
// let tda = document.createElement("td");

// tr.id = 'loading';
// td.innerText = "Loading...";
// tr.append(td,tda);
// output.appendChild(tr);




// let p1 = new Promise((resolve,reject)=>{
// 	let startTime = Date.now();
// 	setTimeout(()=>{
// 		let endTime = Date.now();
// 		let tt = (endTime-startTime)/1000;
// 		resolve(tt);
// 		},1000);
// })

// let p2 = new Promise((resolve,reject)=>{
// 	let startTime = Date.now();
// 	setTimeout(()=>{
// 		let endTime = Date.now();
// 		let tt = (endTime-startTime)/1000;
// 		resolve(tt);
// 		},2500);
// })


// let p3 = new Promise((resolve,reject)=>{
// 	let startTime = Date.now();
// 	setTimeout(()=>{
// 		let endTime = Date.now();
// 		let tt = (endTime-startTime)/1000;
// 		resolve(tt);
// 	},2000);
// });

// Promise.all([p1,p2,p3]).then((value)=>{
// // 	tr.remove();
// // let tr1 = document.createElement("tr");
// // let td1 = document.createElement("td");
// // let td2 = document.createElement("td");
// // tr1.append(td1,td2);
// // output.appendChild(tr1);
// // tr1.classList.add("none");

// // let tr2 = document.createElement("tr");
// // let td3 = document.createElement("td");
// // let td4 = document.createElement("td");
// // tr2.append(td3,td4);
// // output.appendChild(tr2);
// // tr2.classList.add("none");

// // let tr3 = document.createElement("tr");
// // let td5 = document.createElement("td");
// // let td6 = document.createElement("td");
// // tr3.append(td5,td6);
// // output.appendChild(tr3);
// // tr3.classList.add("none");

// // let tr4 = document.createElement("tr");
// // let td7 = document.createElement("td");
// // let td8 = document.createElement("td");
// // tr4.append(td7,td8);
// // output.appendChild(tr4);
// // tr4.classList.add("none");
// // 	td1.innerText = "Promise 1";
// // 	td2.innerText = value[0];

// // 	td3.innerText = "Promise 2";
// // 	td4.innerText = value[1];

// // 	td5.innerText = "Promise 3";
// // 	td6.innerText = value[2];

// // 	td7.innerText = "Total";
// // 	td8.innerText = (value[0]+value[1]+value[2]).toFixed(3);

// // 	tr1.classList.remove("none");
// // 	tr2.classList.remove("none");
// // 	tr3.classList.remove("none");
// // 	tr4.classList.remove("none");

// 	tr.remove();

//     // create and append a new 'tr' for each promise
//     for(let i = 0; i < value.length; i++) {
//         let trNew = document.createElement("tr");
//         let td1 = document.createElement("td");
//         let td2 = document.createElement("td");
//         td1.innerText = `Promise ${i+1}`;
//         td2.innerText = value[i];
//         trNew.append(td1, td2);
//         output.appendChild(trNew);
//     }

//     // create and append a 'tr' for the total
//     let trTotal = document.createElement("tr");
//     let tdTotal1 = document.createElement("td");
//     let tdTotal2 = document.createElement("td");
//     tdTotal1.innerText = "Total";
//     tdTotal2.innerText = (value[0]+value[1]+value[2]).toFixed(3);
//     trTotal.append(tdTotal1, tdTotal2);
//     output.appendChild(trTotal);
// });
let output = document.querySelector("#output");
let tr = document.createElement("tr");
let td = document.createElement("td");

tr.id = 'loading';
td.colSpan = 2;
td.innerText = "Loading...";
tr.appendChild(td);
output.appendChild(tr);

let createPromise = (id) => new Promise((resolve) => {
    let startTime = Date.now();
    let delay = Math.random() * 2000 + 1000;
    setTimeout(() => {
        let endTime = Date.now();
        let timeTaken = ((endTime - startTime) / 1000).toFixed(3);
        resolve({ id, timeTaken });
    }, delay);
});

Promise.all([createPromise(1), createPromise(2), createPromise(3)]).then((values) => {
    tr.remove();

    let maxTime = Math.max(...values.map(val => parseFloat(val.timeTaken)));

    values.forEach(val => {
        let trNew = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerText = `Promise ${val.id}`;
        td2.innerText = val.timeTaken;
        trNew.append(td1, td2);
        output.appendChild(trNew);
    });

    let trTotal = document.createElement("tr");
    let tdTotal1 = document.createElement("td");
    let tdTotal2 = document.createElement("td");
    tdTotal1.innerText = "Total";
    tdTotal2.innerText = maxTime.toFixed(3);
    trTotal.append(tdTotal1, tdTotal2);
    output.appendChild(trTotal);
});


