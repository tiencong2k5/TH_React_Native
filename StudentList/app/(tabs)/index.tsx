import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Student } from '../student/data';
import StudentData from '../student/data';

export default function HomeScreen() {
  const [students, setStudents] = useState(StudentData.students);

  
  useEffect(() => {
    
    setStudents(StudentData.students);
    
    // Subscribe to future changes
    const unsubscribe = StudentData.subscribe(() => {
      setStudents(StudentData.students);
    });
    
    return unsubscribe;
  }, []);

  const renderItem = ({ item }: { item: Student }) => (
    <Link href={`/student/${item.id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.gpaBadge}>
            <Text style={styles.gpaText}>{item.gpa}</Text>
          </View>
        </View>
        <Text style={styles.code}>{item.code}</Text>
        <Text style={styles.major}>{item.major}</Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      
      <Link href="/student/add" asChild>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Thêm sinh viên</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 16 },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  name: { fontSize: 18, fontWeight: '600', color: '#1f2937' },
  gpaBadge: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  gpaText: { fontSize: 14, fontWeight: '600', color: '#2563eb' },
  code: { fontSize: 14, color: '#6b7280', marginBottom: 4 },
  major: { fontSize: 14, color: '#4b5563' },
  addButton: {
    backgroundColor: '#2563eb',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});