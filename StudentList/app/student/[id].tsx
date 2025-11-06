import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import StudentData from './data';

export default function StudentDetail() {
  const { id } = useLocalSearchParams();
  const student = StudentData.getStudentById(id as string | undefined);

  if (!student) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text>Không tìm thấy sinh viên.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{student.name}</Text>
        
        <View style={styles.gpaSection}>
          <Text style={styles.gpaLabel}>GPA</Text>
          <Text style={styles.gpaValue}>{student.gpa.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Mã sinh viên:</Text>
          <Text style={styles.value}>{student.code}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Ngành học:</Text>
          <Text style={styles.value}>{student.major}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{student.email}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 16 },
  card: { backgroundColor: 'white', borderRadius: 12, padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  gpaSection: { marginBottom: 20 },
  gpaLabel: { fontSize: 14, color: '#6b7280' },
  gpaValue: { fontSize: 32, fontWeight: 'bold', color: '#2563eb' },
  row: { marginBottom: 16 },
  label: { fontSize: 14, color: '#6b7280', marginBottom: 4 },
  value: { fontSize: 16, color: '#1f2937', fontWeight: '500' },
});