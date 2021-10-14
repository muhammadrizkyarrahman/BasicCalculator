import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ textColor, buttonTitle, ...props }) => {
  let color;
  color = textColor ? "#ff9800" : "#000";
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [count, setCount] = useState(null);

  const inputNumber = (value) => {
    if (count == null) {
      setCount(value);
    } else {
      setCount(count + "" + value);
    }
  };

  const countingResult = () => {
    const result = eval(count);
    setCount(String(result));
  };

  const Delete = () => {
    if (count == null) {
      setCount(null);
    } else if (count.length == 1) {
      setCount(null);
    } else {
      setCount(count.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.rowButton}>
          <Button textColor buttonTitle="(" onPress={() => inputNumber("(")} />
          <Button textColor buttonTitle=")" onPress={() => inputNumber(")")} />
          <Button textColor buttonTitle="C" onPress={() => setCount(null)} />
          <Button
            textColor
            buttonTitle="DEL"
            onPress={() => Delete()}
            onLongPress={() => setCount(null)}
          />
        </View>
        <View style={styles.rowButton}>
          <Button buttonTitle="7" onPress={() => inputNumber("7")} />
          <Button buttonTitle="8" onPress={() => inputNumber("8")} />
          <Button buttonTitle="9" onPress={() => inputNumber("9")} />
          <Button textColor buttonTitle="x" onPress={() => inputNumber("*")} />
        </View>
        <View style={styles.rowButton}>
          <Button buttonTitle="4" onPress={() => inputNumber("4")} />
          <Button buttonTitle="5" onPress={() => inputNumber("5")} />
          <Button buttonTitle="6" onPress={() => inputNumber("6")} />
          <Button textColor buttonTitle="/" onPress={() => inputNumber("/")} />
        </View>
        <View style={styles.rowButton}>
          <Button buttonTitle="1" onPress={() => inputNumber("1")} />
          <Button buttonTitle="2" onPress={() => inputNumber("2")} />
          <Button buttonTitle="3" onPress={() => inputNumber("3")} />
          <Button textColor buttonTitle="+" onPress={() => inputNumber("+")} />
        </View>
        <View style={styles.rowButton}>
          <Button textColor buttonTitle="." onPress={() => inputNumber(".")} />
          <Button buttonTitle="0" onPress={() => inputNumber("0")} />
          <Button textColor buttonTitle="=" onPress={() => countingResult()} />
          <Button textColor buttonTitle="-" onPress={() => inputNumber("-")} />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  resultContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  resultText: {
    color: "#1f1f1f",
    fontSize: 64,
    textAlign: "right",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    borderTopWidth: 5,
    borderTopColor: "#e1e1e1",
  },
  rowButton: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
