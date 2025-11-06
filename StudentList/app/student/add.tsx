import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import StudentData from './data';

export default function AddStudent() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    code: '',
    major: '',
    gpa: '',
    email: '',
  });

  const handleSubmit = () => {
    if (!form.name || !form.code) {
      alert('Vui lòng nhập tên và mã sinh viên!');
      return;
    }

    const gpaNumber = parseFloat(form.gpa);
    if (form.gpa && (isNaN(gpaNumber) || gpaNumber < 0 || gpaNumber > 4)) {
      alert('GPA phải là số từ 0 đến 4!');
      return;
    }

    
    StudentData.addStudent({
      name: form.name,
      code: form.code,
      major: form.major || 'Chưa cập nhật',
      gpa: gpaNumber || 0,
      email: form.email,
    });

    alert('Thêm sinh viên thành công!');
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Họ và tên *</Text>
        <TextInput
          style={styles.input}
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
          placeholder="Nhập họ tên"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Mã sinh viên *</Text>
        <TextInput
          style={styles.input}
          value={form.code}
          onChangeText={(text) => setForm({ ...form, code: text })}
          placeholder="VD: SV001"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Ngành học</Text>
        <TextInput
          style={styles.input}
          value={form.major}
          onChangeText={(text) => setForm({ ...form, major: text })}
          placeholder="Nhập ngành học"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>GPA</Text>
        <TextInput
          style={styles.input}
          value={form.gpa}
          onChangeText={(text) => setForm({ ...form, gpa: text })}
          placeholder="VD: 3.5"
          keyboardType="decimal-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          placeholder="email@example.com"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Thêm sinh viên</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});