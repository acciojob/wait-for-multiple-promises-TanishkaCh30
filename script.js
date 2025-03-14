let table = document.querySelector(".table");
let tr = table.insertRow(1);
tr.innerText = "Loading...";
let tr1 = table.insertRow(1);
tr1.classList.add("none");
let td1 = tr1.insertCell(0);
let td2 = tr1.insertCell(1);
let tr2= table.insertRow(2);
tr2.classList.add("none");
let td3 = tr2.insertCell(0);
let td4 = tr2.insertCell(1)
let tr3= table.insertRow(3);
tr3.classList.add("none");
let td5 = tr3.insertCell(0);
let td6 = tr3.insertCell(1);
let tr4 = table.insertRow(4);
let td7 = tr4.insertCell(0);
let td8 = tr4.insertCell(1);
tr4.classList.add("none");

let p1 = new Promise((resolve,reject)=>{
	let startTime = Date.now();
	setTimeout(()=>{
		let endTime = Date.now();
		let tt = (endTime-startTime)/1000;
		resolve(tt);
		},1000);
})

let p2 = new Promise((resolve,reject)=>{
	let startTime = Date.now();
	setTimeout(()=>{
		let endTime = Date.now();
		let tt = (endTime-startTime)/1000;
		resolve(tt);
		},2500);
})


let p3 = new Promise((resolve,reject)=>{
	let startTime = Date.now();
	setTimeout(()=>{
		let endTime = Date.now();
		let tt = (endTime-startTime)/1000;
		resolve(tt);
	},2000);
})

Promise.all([p1,p2,p3]).then((value)=>{
	tr.remove();
	td1.innerText = "Promise 1";
	td2.innerText = value[0];

	td3.innerText = "Promise 2";
	td4.innerText = value[1];

	td5.innerText = "Promise 3";
	td6.innerText = value[2];

	td7.innerText = "Total";
	td8.innerText = (value[0]+value[1]+value[2]).toFixed(3);

	tr1.classList.remove("none");
	tr2.classList.remove("none");
	tr3.classList.remove("none");
	tr4.classList.remove("none");
});



