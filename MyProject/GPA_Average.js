import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput, Text, TouchableOpacity } from "react-native";
import React, {useState} from "react";
export default function GPA_Average() {
    const [toan, setToan] = React.useState('');
    const [ly, setLy] = React.useState('');
    const [hoa, setHoa] = React.useState('');
    const [average, setAverage] = React.useState(null);

    const calculateAverage = () => {
        const toanScore = parseFloat(toan);
        const lyScore = parseFloat(ly);
        const hoaScore = parseFloat(hoa);
        if (isNaN(toanScore) || isNaN(lyScore) || isNaN(hoaScore)) {
            alert('Vui lòng nhập điểm hợp lệ cho tất cả các môn');
            return;
        }

        if (toanScore < 0 || toanScore > 10 || lyScore < 0 || lyScore > 10 || hoaScore < 0 || hoaScore > 10) {
            alert('Điểm phải nằm trong khoảng từ 0 đến 10');
            return;
        }
        const avg = (toanScore + lyScore + hoaScore) / 3;
        setAverage(avg.toFixed(2));
    }
    const reset = () => {
        setToan('');
        setLy('');
        setHoa('');
        setAverage(null);
    };


    return (
        <KeyboardAvoidingView style = {styles.container} behavior = {Platform.OS === 'ios' ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle ={styles.scrollContainer}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Tính Điểm Trung Bình</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Điểm Toán :</Text>
                            <TextInput  style={styles.input} placeholder="Nhập điểm Toán ( 0-10)" keyboardType="decimal-pad" value={toan} onChangeText={setToan} maxLength={5}></TextInput>
                        </View>
                        <View>
                            <Text style={styles.label}s>Điểm Lý :</Text>
                            <TextInput style={styles.input} placeholder="Nhập điểm Lý ( 0-10)" keyboardType="decimal-pad" value={ly} onChangeText={setLy} maxLength={5}></TextInput>
                        </View>
                        <View>
                            <Text style={styles.label}>Điểm Hóa :</Text>
                            <TextInput style={styles.input} placeholder="Nhập điểm Hóa ( 0-10)" keyboardType="decimal-pad" value={hoa} onChangeText={setHoa} maxLength={5}></TextInput>
                        </View>
                        <View>
                            <TouchableOpacity style={[styles.button, styles.calculateButton]}  onPress={calculateAverage}>
                                <Text style={styles.buttonText}>Tính Điểm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.resetButton]}  onPress={reset}>
                                <Text style={styles.buttonText}>Nhập Lại</Text>
                            </TouchableOpacity>
                        </View>
                        {average !== null && (
                            <View style={styles.resultContainer}>
                            <Text style={styles.resultLabel}>Điểm Trung Bình:</Text>
                            <Text style={styles.resultValue}>{average}</Text>
                            <Text style={styles.resultRemark}>
                                {parseFloat(average) >= 8 ? ' Giỏi' : 
                                parseFloat(average) >= 6.5 ? 'Khá' : 
                                parseFloat(average) >= 5 ? 'Trung Bình' : 
                                'Cần cố gắng hơn'}
                            </Text>
                            </View>
                        )}
                    </View>
                    
                </ScrollView>
            </TouchableWithoutFeedback>
            
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4f8',
    },
    scrollContainer:{
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
        card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2d3748',
        textAlign: 'center',
        marginBottom: 24,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4a5568',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#f7fafc',
        borderWidth: 2,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        color: '#2d3748',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        gap: 12,
    },
    button: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
    },
    calculateButton: {
        backgroundColor: '#4299e1',
    },
    resetButton: {
        backgroundColor: '#718096',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '600',
    },
    resultContainer: {
        marginTop: 28,
        padding: 20,
        backgroundColor: '#ebf8ff',
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#4299e1',
    },
    resultLabel: {
        fontSize: 18,
        color: '#2c5282',
        marginBottom: 8,
        fontWeight: '600',
    },
    resultValue: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2b6cb0',
        marginBottom: 8,
    },
    resultRemark: {
        fontSize: 18,
        color: '#2c5282',
        fontWeight: '500',
    },
}
);