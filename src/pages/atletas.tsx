import { useEffect, useState } from 'react';
import { Card, CardContent, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import ScoreIcon from '@mui/icons-material/Score';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CategoryIcon from '@mui/icons-material/Category';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

interface Atleta {
  nombre: string;
  catsex: string;
  catpeso: string;
  totalfpp: number;
  catedad: string;
  team: string;
  ipfpoints: number;
  place: number;
  edad: number;
}

const getMedalIcon = (place: number) => {
  if (place === 1) return <EmojiEventsIcon sx={{ color: '#FFD700' }} titleAccess="Oro" />;
  if (place === 2) return <EmojiEventsIcon sx={{ color: '#C0C0C0' }} titleAccess="Plata" />;
  if (place === 3) return <EmojiEventsIcon sx={{ color: '#CD7F32' }} titleAccess="Bronce" />;
  return null;
};

const Atletas: React.FC = () => {
  const [atletas, setAtletas] = useState<Atleta[]>([]);
  const [catSex, setCatSex] = useState<string>('MALE');
  const [catPeso, setCatPeso] = useState<string>('');

  useEffect(() => {
    fetch('src/data/json/perfilatletas.json')
      .then((res) => res.json())
      .then((data) => setAtletas(data));
  }, []);

  const filteredBySex = atletas.filter((a) => a.catsex === catSex);
  const uniquePesos = [...new Set(filteredBySex.map((a) => a.catpeso))];
  const filtered = catPeso
    ? filteredBySex.filter((a) => a.catpeso === catPeso).sort((a, b) => a.place - b.place)
    : filteredBySex.sort((a, b) => a.place - b.place);

  return (
    <div style={{ padding: '1rem' }}>
      <Grid container spacing={2} alignItems="center" marginBottom={2}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="catSex-label">Sexo</InputLabel>
            <Select labelId="catSex-label" value={catSex} onChange={(e) => setCatSex(e.target.value)} label="Sexo">
              <MenuItem value="MALE">Masculino</MenuItem>
              <MenuItem value="FEMALE">Femenino</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="catPeso-label">Peso</InputLabel>
            <Select labelId="catPeso-label" value={catPeso} onChange={(e) => setCatPeso(e.target.value)} label="Peso">
              <MenuItem value="">Todos los pesos</MenuItem>
              {uniquePesos.map((peso) => (
                <MenuItem key={peso} value={peso}>
                  {peso === 'Guest' ? peso : `-${peso}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {filtered.map((atleta, index) => (
          <Grid item xs={12} sm={6} md={5} lg={4} key={atleta.nombre}>
            <Card elevation={3} sx={{ borderRadius: 4 }}>
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" component="div" display="flex" alignItems="center" gap={1}>
                    <PersonIcon /> {atleta.nombre} {getMedalIcon(atleta.place)}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <CategoryIcon /> Peso: <strong>{atleta.catpeso}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <EmojiPeopleIcon /> Categoría: <strong>{atleta.catedad}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <FitnessCenterIcon /> Total FPP: <strong>{atleta.totalfpp}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <GroupIcon /> Equipo: <strong>{atleta.team}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <ScoreIcon /> IPF Points: <strong>{atleta.ipfpoints}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <CalendarTodayIcon /> Edad: <strong>{atleta.edad}</strong>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Atletas;
