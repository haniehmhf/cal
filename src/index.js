import {createStore} from "redux";
import {reducer} from "./reducer";


const store = createStore(reducer)
const res = document.getElementsByClassName('result')[0];

function btnListener() {
    const el = document.addEventListener("click", (event) => {
        if (event.target.className === "btn") {
            const value = event.target.innerText;
            store.dispatch({type: 'ADDOUTPUT', payload: value});
            const result1 = store.getState();
            const result2 = result1.join('');
            res.innerHTML = result2;
        }
    })
}

btnListener();

function Equel() {
    const element = document.getElementsByClassName('equal')[0];
    element.addEventListener("click", () => {
        const stateResult = store.getState()
        const stateResult2 = stateResult.join('');
        const finallResult = eval(stateResult2)
        store.dispatch({type: 'EQUEL', payload: finallResult})
        res.innerHTML = store.getState()
    })
}

Equel()

function remove() {
    const removeElement = document.getElementsByClassName('delete')[0]
    removeElement.addEventListener("click", () => {
            store.dispatch({type:'REMOVE',payload:''})
            console.log(store.getState())
            res.innerHTML = ''
    })
}

remove()