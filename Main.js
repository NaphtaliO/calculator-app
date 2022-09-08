import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Main = () => {
    const [text, setText] = useState("0");
    const [secondText, setSecondText] = useState("0")
    const [operator, setOperator] = useState(null);

    useEffect(() => {
        console.log(text);
    }, [operator])

    const operation = (x) => {
        let int1 = parseFloat(secondText);
        let int2 = parseFloat(text);
        let result;
        switch (x) {
            case "AC":
                setText("0");
                setSecondText("0");
                setOperator(null);
                break;
            case "=":
                if (operator == null) {
                    return;
                }
                else if (operator == "+") {
                    result = int1 + int2;
                    result = result.toString()
                    console.log(result);
                    setText(result)
                }
                else if (operator == "-") {
                    result = int1 - int2;
                    result = result.toString()
                    console.log(result);
                    setText(result)
                }
                else if (operator == "x") {
                    result = int1 * int2;
                    result = result.toString()
                    console.log(result);
                    setText(result)
                }
                else if (operator == "÷") {
                    result = int1 / int2;
                    result = result.toString()
                    console.log(result);
                    setText(result)
                }
            default:
                null
        }
    }



    const DATA = [
        {
            id: 1,
            text: 'AC',
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                operation("AC");
            }
        },
        {
            id: 2,
            text: "+/-",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                // setSecondText(text);
                // setText(0);
                // setOperator("+/-")
                let result = parseInt(text);
                result = result * (-1)
                result = result.toString();
                {text == "0" ? null : setText(result)}
            }
        },
        {
            id: 3,
            text: "%",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                let result = parseFloat(text);
                result = result / 100;
                result = result.toString();
                {text == "0" ? null : setText(result)}
            }
        },
        {
            id: 4,
            text: "÷",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                setSecondText(text);
                setText(0);
                setOperator("÷");
            }
        },
        {
            id: 5,
            text: "7",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "7") : setText(text + "7"); }
            }
        },
        {
            id: 6,
            text: "8",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "8") : setText(text + "8"); }
            }
        },
        {
            id: 7,
            text: "9",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "9") : setText(text + "9"); }
            }
        },
        {
            id: 8,
            text: "x",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                setSecondText(text);
                setText(0);
                setOperator("x")
            }
        },
        {
            id: 9,
            text: "4",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "4") : setText(text + "4"); }
            }
        },
        {
            id: 10,
            text: "5",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "5") : setText(text + "5"); }
            }
        },
        {
            id: 11,
            text: "6",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "6") : setText(text + "6"); }
            }
        },
        {
            id: 12,
            text: "-",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                setSecondText(text);
                setText(0);
                setOperator("-")
            }
        },
        {
            id: 13,
            text: "1",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "1") : setText(text + "1"); }
            }
        },
        {
            id: 14,
            text: "2",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "2") : setText(text + "2"); }
            }
        },
        {
            id: 15,
            text: "3",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? setText('' + "3") : setText(text + "3"); }
            }
        },
        {
            id: 16,
            text: "+",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                setSecondText(text);
                setText(0);
                setOperator("+")
            }
        },
        {
            id: 17,
            text: "0",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? null : setText(text + "0"); }
            }
        },
        {
            id: 18,
            text: "⌫",
            color: 'white',
            backgroundColor: 'black',
            width: (windowWidth / 2) - 10,
            onPress: () => {
                { text == "0" ? null : setText(text.slice(0, -1)) }
            }
        },
        {
            id: 19,
            text: ".",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                { text == "0" ? null : setText(text + "."); }
            }
        },
        {
            id: 20,
            text: "=",
            color: 'white',
            backgroundColor: 'black',
            onPress: () => {
                operation("=");
            }
        }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.flatlist}
                contentContainerStyle={{
                    //justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 'auto'
                }}
                ListHeaderComponent={
                    <>
                        <TextInput
                            style={styles.text}
                            value={text}
                            defaultValue={text}
                            onChangeText={setText}
                            maxLength={4}
                            editable={false}
                        />
                        {/* <Text style={styles.text}>{text}</Text> */}
                    </>
                }
                ListHeaderComponentStyle={{
                    marginLeft: "auto",
                    marginRight: 15,
                }}
                keyExtractor={item => item.id}
                data={DATA}
                renderItem={({ item }) => (
                    <Button text={item.text} color={item.color} backgroundColor={item.backgroundColor} onPress={item.onPress} width={item.width} />
                )}
                numColumns={4}
                scrollEnabled={false}
            />

        </SafeAreaView>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        //marginHorizontal: 10,
    },
    flatlist: {
        width: '100%',
    },
    text: {
        fontSize: 90,
    }
})