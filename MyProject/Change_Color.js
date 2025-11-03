import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Change_Color() {
  const [bgColor, setBgColor] = useState('#3498db'); 

  // Hàm tạo màu ngẫu nhiên
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Xử lý khi nhấn nút
  const handleChangeColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: bgColor }]} />
      <TouchableOpacity style={styles.button} onPress={handleChangeColor}>
        <Text style={styles.buttonText}>Đổi màu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
    elevation: 6,
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
