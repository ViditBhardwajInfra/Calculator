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

    return (
        <View style={{ flex: 1, backgroundColor: '#1C1C1C', justifyContent: 'flex-end', paddingLeft: 15, paddingBottom: 20 }}>

            <Text style={{ color: 'white', fontSize: 50, textAlign: 'right', marginRight: 20 }}>{currValue}</Text>

            {/* Row-1 */}
            <View style={{ flexDirection: "row" }}>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="AC" onPress={() => tapButton("AC")} color="#D4D4D2" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="%" onPress={() => tapButton("%")} color="#D4D4D2" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="<-" onPress={() => tapButton("back")} color="#cc3f2d" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="/" onPress={() => tapButton("/")} color="#FF9500" />
                </View>

            </View>

            {/* Row-2 */}
            <View style={{ flexDirection: "row" }}>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="7" onPress={() => tapButton("7", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="8" onPress={() => tapButton("8", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="9" onPress={() => tapButton("9", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="*" onPress={() => tapButton("*")} color="#FF9500" />
                </View>

            </View>

            {/* Row-3 */}
            <View style={{ flexDirection: "row" }}>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="4" onPress={() => tapButton("4", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="5" onPress={() => tapButton("5", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="6" onPress={() => tapButton("6", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="-" onPress={() => tapButton("-")} color="#FF9500" />
                </View>

            </View>

            {/* Row-4 */}
            <View style={{ flexDirection: "row" }}>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="1" onPress={() => tapButton("1", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="2" onPress={() => tapButton("2", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="3" onPress={() => tapButton("3", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="+" onPress={() => tapButton("+")} color="#FF9500" />
                </View>

            </View>

            {/* Row-5 */}
            <View style={{ flexDirection: "row" }}>

                <View width="42%" style={{ margin: 10 }}>
                    <Button title="0" onPress={() => tapButton("0", "number")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="." onPress={() => tapButton(".")} color="#505050" />
                </View>

                <View width="25%" style={{ margin: 10, width: 70 }}>
                    <Button title="=" onPress={() => tapButton("=")} color="#FF9500" />
                </View>

            </View>

        </View>
    );
}

export default homeScreen;   // for multiple file export use only 'export' otherwise 'export default'