import { useState } from 'react';
import { Box, Typography, Grid, Paper, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

import { UsergroupAddOutlined, TeamOutlined, CrownOutlined, TrophyOutlined, WomanOutlined, ManOutlined } from '@ant-design/icons';

import atletasData from 'data/json/perfilatletas.json';
import equiposData from 'data/json/equipospowerlifting.json';
import topsData from 'data/json/topsnacionales.json';

interface Atleta {
  catsex: string;
  totalfpp: number;
  ipfpoints: number;
  catpeso?: string;
  catedad?: string;
}

interface Club {
  nombreClub: string;
}

interface Tops {
  MASC: Atleta[];
  FEM: Atleta[];
}

const EstadisticasGenerales = () => {
  const [catSex, setCatSex] = useState<string>('MALE');
  const [catPeso, setCatPeso] = useState<string>('');
  const [catEdad, setCatEdad] = useState<string>('');

  const atletas = atletasData as Atleta[];
  const equipos = equiposData as Club[];
  const tops = topsData as Tops;

  const totalAtletas = atletas.length;
  const totalequipos = equipos.length;
  const totalMasculino = atletas.filter((a) => a.catsex === 'MALE').length;
  const totalFemenino = atletas.filter((a) => a.catsex === 'FEMALE').length;
  const mejorIPF = Math.max(...tops.MASC.map((a) => a.ipfpoints), ...tops.FEM.map((a) => a.ipfpoints));

  const uniqueCatEdad = [...new Set(atletas.map((a) => a.catedad).filter(Boolean))];
  const uniqueCatPeso = [...new Set(atletas.map((a) => a.catpeso).filter(Boolean))];

  const filtrados = atletas.filter(
    (a) => a.catsex === catSex && (catPeso ? a.catpeso === catPeso : true) && (catEdad ? a.catedad === catEdad : true)
  );

  const avgTotalFpp = (arr: Atleta[]) =>
    arr.length ? (arr.reduce((acc, a) => acc + Number(a.totalfpp || 0), 0) / arr.length).toFixed(2) : '0.00';

  const totalFppAvg = avgTotalFpp(filtrados);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Estadísticas Generales
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <UsergroupAddOutlined style={{ fontSize: 36, color: '#1976d2' }} />
            <Typography variant="h6">Total de Atletas</Typography>
            <Typography variant="h5">{totalAtletas}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <TeamOutlined style={{ fontSize: 36, color: '#9c27b0' }} />
            <Typography variant="h6">Equipos Registrados</Typography>
            <Typography variant="h5">{totalequipos}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <CrownOutlined style={{ fontSize: 36, color: '#2e7d32' }} />
            <Typography variant="h6">Mejor IPF Points</Typography>
            <Typography variant="h5">{mejorIPF.toFixed(2)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <ManOutlined style={{ fontSize: 36, color: '#00aae4' }} />
            <Typography variant="h6">Categoría Masculina</Typography>
            <Typography variant="h5">{totalMasculino}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <WomanOutlined style={{ fontSize: 36, color: 'pink' }} />
            <Typography variant="h6">Categoría Femenina</Typography>
            <Typography variant="h5">{totalFemenino}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Promedio de Total Oficial
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="catsex-label">Sexo</InputLabel>
                <Select value={catSex} labelId="catsex-label" onChange={(e) => setCatSex(e.target.value)} label="Sexo">
                  <MenuItem value="MALE">Masculino</MenuItem>
                  <MenuItem value="FEMALE">Femenino</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="catpeso-label">Categoría Peso</InputLabel>
                <Select value={catPeso} labelId="catpeso-label" onChange={(e) => setCatPeso(e.target.value)} label="Peso">
                  <MenuItem value="">Todas</MenuItem>
                  {uniqueCatPeso.map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="catedad-label">Categoría Edad</InputLabel>
                <Select value={catEdad} labelId="catedad-label" onChange={(e) => setCatEdad(e.target.value)} label="Categoría Edad">
                  <MenuItem value="">Todas</MenuItem>
                  {uniqueCatEdad.map((e) => (
                    <MenuItem key={e} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <TrophyOutlined style={{ fontSize: 36, color: '#1976d2' }} />
                <Typography variant="h6">Promedio de Total</Typography>
                <Typography variant="h5">{totalFppAvg} kg</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EstadisticasGenerales;

export const metadata = {
  title: 'Estadísticas Generales',
  description: 'Estadísticas Generales de Atletas y equipos'
};
