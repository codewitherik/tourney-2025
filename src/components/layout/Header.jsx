// components/Header.tsx

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material"
import LanguageIcon from "@mui/icons-material/Language"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"

export default function Header() {
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null)

  const handleLangOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchor(event.currentTarget)
  }

  const handleLangClose = (lang?: string) => {
    setLangAnchor(null)
    if (lang) {
      console.log("Sprache umstellen auf:", lang)
      // i18next.changeLanguage(lang)
    }
  }

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Brand */}
        <Typography variant="h6" component="div">
          🏆 Tourney
        </Typography>

        {/* Seiten-Navigation */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Turniere</Button>
          <Button>Über uns</Button>
          <Button>Preise</Button>
        </Box>

        {/* Sprache & Login */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={handleLangOpen}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => handleLangClose()}
          >
            <MenuItem onClick={() => handleLangClose("de")}>Deutsch</MenuItem>
            <MenuItem onClick={() => handleLangClose("en")}>English</MenuItem>
          </Menu>

          <Button variant="outlined">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
