import { useState } from 'react';
import { Card, CardContent, Grid, Typography, Tabs, Tab, Box, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ScoreIcon from '@mui/icons-material/Score';
import CategoryIcon from '@mui/icons-material/Category';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import topsData from 'data/json/topsnacionales.json'; // ← ✅ CORRECTA IMPORTACIÓN DIRECTA

interface Atleta {
  nombre: string;
  birthdate: number;
  catsex: string;
  edad: number;
  catpeso: string;
  catedad: string;
  totalfpp: number;
  team: string;
  dotspints: number;
  wilkspoints: number;
  ipfpoints: number;
  glossbernpoints: number;
}

const TopsNacionales = () => {
  const [tab, setTab] = useState(0);
  const data = topsData as { MASC: Atleta[]; FEM: Atleta[] };

  const renderAtletas = (atletas: Atleta[]) => (
    <Grid container spacing={3}>
      {atletas.map((atleta, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={atleta.nombre}>
          <Card elevation={3} sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                  <EmojiEventsIcon /> #{index + 1} - {atleta.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary" display="flex" gap={1}>
                  <CalendarTodayIcon fontSize="small" /> Edad: {atleta.edad}
                </Typography>
                <Typography variant="body2" color="text.secondary" display="flex" gap={1}>
                  <CategoryIcon fontSize="small" /> {atleta.catedad} - Peso: {atleta.catpeso}
                </Typography>
                <Typography variant="body2" color="text.secondary" display="flex" gap={1}>
                  <FitnessCenterIcon fontSize="small" /> Total FPP: {atleta.totalfpp}
                </Typography>
                <Typography variant="body2" color="text.secondary" display="flex" gap={1}>
                  <ScoreIcon fontSize="small" /> IPF: {atleta.ipfpoints} | Wilks: {atleta.wilkspoints} | Dots: {atleta.dotspints}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Tabs value={tab} onChange={(e, val) => setTab(val)} centered>
        <Tab label="Masculino" />
        <Tab label="Femenino" />
      </Tabs>
      <Box mt={2}>
        {tab === 0 && renderAtletas(data.MASC)}
        {tab === 1 && renderAtletas(data.FEM)}
      </Box>
    </Box>
  );
};

export default TopsNacionales;
