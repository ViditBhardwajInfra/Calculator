import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

function homeScreen() {

    const [currValue, setCurrValue] = useState(0);
    const [op, setOp] = useState('0');
    const [prevValue, setPrevValue] = useState(0);

    const calculate = () => {
        if (op == "+") {
            let result: number = (+prevValue) + (+currValue);
            setCurrValue(result);
        } else if (op == "/") {
            let result: number = (+prevValue) / (+currValue);
            setCurrValue(result);
        } else if (op == "*") {
            let result: number = (+prevValue) * (+currValue);
            setCurrValue(result);
        } else if (op == "-") {
            let result: number = (+prevValue) - (+currValue);
            setCurrValue(result);
        } else if (op == "%") {
            let result: number = (+currValue) * (0.01);
            setCurrValue(result);
        }
        setPrevValue(0);
    };

    const tapButton = (button: string, operator: string) => {
        if (operator == "number") {
            if (op == '0') {
                if (currValue == 0) {
                    setCurrValue((+button));
                } else {
                    setCurrValue((currValue * 10) + (+button));
                }
            } else {
                if (prevValue == 0) {
                    setPrevValue(currValue);
                    setCurrValue((+button));
                } else if (currValue != 0) {
                    setCurrValue((currValue * 10) + (+button));
                } else {
                    setPrevValue(currValue);
                    setCurrValue(+button);
                }
            }
        } else {
            if (button == "AC") {
                setPrevValue(0);
                setCurrValue(0);
                setOp('0');
            } else if (button == "back") {

            } else if (button == "=") {
                if (op != '0') {
                    calculate();
                    setOp('0');
                }
            } else {
                if (prevValue != 0 && currValue != 0 && op != '0') {
                    calculate();
                }
                setOp(button);
            }
        }
    };

}

export default homeScreen;   // for multiple file export use only 'export' otherwise 'export default'