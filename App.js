import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('');

    function somar() {
        setResultado(parseFloat(num1) + parseFloat(num2));
    }

    function subtrair() {
        setResultado(parseFloat(num1) - parseFloat(num2));
    }

    function dividir() {
        setResultado(parseFloat(num1) / parseFloat(num2)); // Corrigido
    }

    function multiplicar() {
        setResultado(parseFloat(num1) * parseFloat(num2));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>calculadora</Text>

            <TextInput
                onChangeText={setNum1}
                keyboardType={'numeric'}
                placeholder={'coloque um numero'}
                style={styles.input}
            />

            <TextInput
                onChangeText={setNum2}
                keyboardType={'numeric'}
                placeholder={'coloca outro numero'}
                style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={somar}>
                <Text>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={subtrair}>
                <Text>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={dividir}>
                <Text>/</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={multiplicar}>
                <Text>x</Text>
            </TouchableOpacity>

            <Text>Seu resultado é {resultado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    botao: {
        backgroundColor: '#7900ff',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 20,
        marginTop: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: '#735f5f',
        padding: 10,
        width: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
});