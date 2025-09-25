import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput } from 'react-native';

export default function RegisterScreen() {
  // Estados para los campos del formulario
  const [codigoEstudiante, setCodigoEstudiante] = useState('');
  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [password, setPassword] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');

  // Función para manejar el registro
  const handleRegister = () => {
    if (
      !codigoEstudiante ||
      !primerNombre ||
      !segundoNombre ||
      !primerApellido ||
      !segundoApellido ||
      !password ||
      !edad ||
      !correo
    ) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    // Aquí puedes agregar la lógica para guardar el usuario
    Alert.alert('Registro exitoso', `Bienvenido, ${primerNombre} ${primerApellido}!`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Registro de Usuario</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Código de estudiante"
        value={codigoEstudiante}
        onChangeText={setCodigoEstudiante}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Primer nombre"
        value={primerNombre}
        onChangeText={setPrimerNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Segundo nombre"
        value={segundoNombre}
        onChangeText={setSegundoNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Primer apellido"
        value={primerApellido}
        onChangeText={setPrimerApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Segundo apellido"
        value={segundoApellido}
        onChangeText={setSegundoApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo institucional"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Registrarse" onPress={handleRegister} />
      <Link href="/login" style={styles.link}>
        <ThemedText type="link">¿Ya tienes cuenta? Inicia sesión</ThemedText>
      </Link>
    </ThemedView>
  );
}

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
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  link: {
    marginTop: 16,
    alignItems: 'center',
  },
});