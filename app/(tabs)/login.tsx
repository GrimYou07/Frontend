
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput } from 'react-native';

// Componente principal de la pantalla de inicio de sesión
export default function LoginScreen() {
  // Estados para almacenar el código de estudiante y la contraseña
  const [codigoEstudiante, setCodigoEstudiante] = useState('');
  const [password, setPassword] = useState('');

  // Función que maneja el evento de inicio de sesión
  const handleLogin = () => {
    // Verifica que ambos campos estén llenos
    if (codigoEstudiante === '' || password === '') {
      Alert.alert('Error', 'Por favor ingresa tu codigo de estudiante y contraseña');
      return;
    }
    // Mensaje de bienvenida si los campos están completos
    Alert.alert('Bienvenido', `Hola, ${codigoEstudiante}!`);
  };

  // Renderiza la interfaz de usuario
  return (
    <ThemedView style={styles.container}>
      {/* Título de la pantalla */}
      <ThemedText type="title">Inicio de Sesión</ThemedText>
      {/* Campo para ingresar el código de estudiante */}
      <TextInput
        style={styles.input}
        placeholder="Código de estudiante"
        value={codigoEstudiante}
        onChangeText={setCodigoEstudiante}
        keyboardType="default"
        autoCapitalize="none"
      />
      {/* Campo para ingresar la contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* Botón para iniciar sesión */}
      <Button title="Ingresar" onPress={handleLogin} />
      {/* Enlace para ir a la pantalla de registro */}
      <Link href="/register" style={styles.link}>
        <ThemedText type="link">¿No tienes cuenta? Regístrate aquí</ThemedText>
      </Link>
    </ThemedView>
  );
}

// Estilos para los componentes de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aa2020ff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#ffffffff',
  },
  link: {
    marginTop: 16,
    alignItems: 'center',
  },
});