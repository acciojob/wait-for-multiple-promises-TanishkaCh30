let output = document.querySelector("#output");
let tr = document.createElement("tr");
let td = document.createElement("td");
let tda = document.createElement("td");

tr.id = 'loading';
td.innerText = "Loading...";
tr.append(td,tda);
output.appendChild(tr);

let tr1 = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
tr1.append(td1,td2);
output.appendChild(tr1);
tr1.classList.add("none");

let tr2 = document.createElement("tr");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
tr2.append(td3,td4);
output.appendChild(tr2);
tr2.classList.add("none");

let tr3 = document.createElement("tr");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
tr3.append(td5,td6);
output.appendChild(tr3);
tr3.classList.add("none");

let tr4 = document.createElement("tr");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
tr4.append(td7,td8);
output.appendChild(tr4);
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



