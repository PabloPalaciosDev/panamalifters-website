import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Box, Stack } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

interface Club {
  nombreClub: string;
  lider: string;
  img?: string;
}

const equiposAtletismo: React.FC = () => {
  const [equipos, setequipos] = useState<Club[]>([]);

  useEffect(() => {
    fetch('src/data/json/equipospowerlifting.json')
      .then((res) => res.json())
      .then((data) => setequipos(data));
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {equipos.map((club, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={club.nombreClub}>
            <Card sx={{ borderRadius: 4, height: '100%' }} elevation={3}>
              {club.img ? <CardMedia component="img" height="160" image={club.img} alt={club.nombreClub} /> : null}
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                    <GroupsIcon /> {club.nombreClub}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <PersonIcon /> Líder: <strong>{club.lider}</strong>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default equiposAtletismo;
