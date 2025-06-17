import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Container, Typography, Box, Alert, Link } from '@mui/material';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/manage/dashboard';
      }, 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} p={4} boxShadow={3} borderRadius={2} bgcolor="white">
        <Typography variant="h5" align="center" gutterBottom>
          Account erstellen
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Erfolgreich registriert!</Alert>}

        <form onSubmit={handleSignup}>
          <TextField
            label="E-Mail"
            type="email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Passwort"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
            Registrieren
          </Button>
        </form>

        <Box mt={2} textAlign="center">
          <Link href="/manage/login" underline="hover">
            Bereits registriert? Hier einloggen
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
