//const parent = document.querySelector("#parentblock");

window.addEventListener("load", () => {
    //   console.log("ON.LOAD");

    const parent = document.querySelector('#parentblock');
    //  console.log("INSIDE.LOAD", parent);

    for (let i = 0; i < 10; i++) {

        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";


        newElement.children[0].innerHTML = "PRATIK" + i;

        parent.insertBefore(newElement, parent.firstChild);
    }
});
