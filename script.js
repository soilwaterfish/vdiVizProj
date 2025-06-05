document.addEventListener("DOMContentLoaded", () => {     //waits until the whole HTML loads before running this JS script
console.log("Hydro data script is working!");             // to confirm the script is actually running
alert("Welcome to the Hydro Data Viewer!");

//mock data
const hydroData = [
    { site: "River A", value: 12.3 },
    { site: "Creek B", value: 8.7 },
    { site: "Stream C", value: 15.1 },
];

console.log(hydroData);

const container = document.querySelector("#chart-placeholder");


hydroData.forEach(function (item) {
    const p = document.createElement("p");
    p.textContent = `${item.site}: ${item.value}`;
    container.appendChild(p);
        });
 });
