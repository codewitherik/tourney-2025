import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/manage/dashboard'; // Beispiel Weiterleitung
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} p={4} boxShadow={3} borderRadius={2} bgcolor="white">
        <Typography variant="h5" align="center" gutterBottom>
          Tourney Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField label="E-Mail" type="email" fullWidth margin="normal" required
            value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Passwort" type="password" fullWidth margin="normal" required
            value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={loading}>
            {loading ? 'Lädt...' : 'Einloggen'}
          </Button>
        </form>
      </Box>
    </Container>
  );
}
