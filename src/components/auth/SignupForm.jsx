// components/SignupForm.tsx

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material"
import { toast } from "react-hot-toast"

// Zod Schema
const SignupSchema = z.object({
  Vorname: z.string().min(2, "Teamname ist zu kurz"),
  contactEmail: z.string().email("Ungültige E-Mail"),
  Nachname: z.number().min(1, "Mindestens 1 Spieler").max(20, "Max. 20 Spieler"),
})

type SignupFormData = z.infer<typeof SignupSchema>

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
  })

  const onSubmit = (data: SignupFormData) => {
    console.log("Formulardaten:", data)
    toast.success("Anmeldung erfolgreich!")
    reset()
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h5" gutterBottom>
          Team anmelden
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Teamname"
            fullWidth
            margin="normal"
            {...register("teamName")}
            error={!!errors.teamName}
            helperText={errors.teamName?.message}
          />

          <TextField
            label="Kontakt E-Mail"
            fullWidth
            margin="normal"
            {...register("contactEmail")}
            error={!!errors.contactEmail}
            helperText={errors.contactEmail?.message}
          />

          <TextField
            label="Nachname"
            type="number"
            fullWidth
            margin="normal"
            {...register("players", { valueAsNumber: true })}
            error={!!errors.players}
            helperText={errors.players?.message}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Jetzt anmelden
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
