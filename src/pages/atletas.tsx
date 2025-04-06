import { useState } from 'react';
import { Card, CardContent, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Stack } from '@mui/material';

// Reemplazo de íconos con Ant Design
import {
  UserOutlined,
  TrophyOutlined,
  TeamOutlined,
  BarChartOutlined,
  CalendarOutlined,
  CrownOutlined,
  TagOutlined,
  IdcardOutlined
} from '@ant-design/icons';

import atletasJson from 'data/json/perfilatletas.json';

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
  if (place === 1) return <CrownOutlined style={{ color: '#FFD700', fontSize: '20px' }} title="Oro" />;
  if (place === 2) return <CrownOutlined style={{ color: '#C0C0C0', fontSize: '20px' }} title="Plata" />;
  if (place === 3) return <CrownOutlined style={{ color: '#CD7F32', fontSize: '20px' }} title="Bronce" />;
  return null;
};

const Atletas: React.FC = () => {
  const [atletas] = useState<Atleta[]>(atletasJson as Atleta[]);
  const [catSex, setCatSex] = useState<string>('MALE');
  const [catPeso, setCatPeso] = useState<string>('');

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
        {filtered.map((atleta) => (
          <Grid item xs={12} sm={6} md={5} lg={4} key={atleta.nombre}>
            <Card elevation={3} sx={{ borderRadius: 4 }}>
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" component="div" display="flex" alignItems="center" gap={1}>
                    <UserOutlined /> {atleta.nombre} {getMedalIcon(atleta.place)}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <TagOutlined /> Peso: <strong>{atleta.catpeso}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <IdcardOutlined /> Categoría: <strong>{atleta.catedad}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <TrophyOutlined /> Total FPP: <strong>{atleta.totalfpp}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <TeamOutlined /> Equipo: <strong>{atleta.team}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <BarChartOutlined /> IPF Points: <strong>{atleta.ipfpoints}</strong>
                  </Typography>

                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <CalendarOutlined /> Edad: <strong>{atleta.edad}</strong>
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
