"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const inputComponents = [
        ...document.querySelectorAll('input[type="number"].app-elem-input'),
    ];
    const computeResult = () => {
        const result = inputComponents.reduce((result, inputComponent) => result + inputComponent.valueAsNumber, 0);
        const output = document.querySelector('output.app-elem-result');
        if (output !== null) {
            output.value = `${result}`;
        }
        else {
            console.error('output.app-elem-result not found');
        }
    };
    inputComponents.forEach((inputComponent) => {
        inputComponent.addEventListener('change', computeResult);
    });
    computeResult();
});
