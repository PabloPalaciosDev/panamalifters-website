import { useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Box, Stack } from '@mui/material';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import equiposJson from 'data/json/equipospowerlifting.json';

interface Club {
  nombreClub: string;
  lider: string;
  img?: string;
}

const EquiposAtletismo: React.FC = () => {
  const [equipos] = useState<Club[]>(equiposJson as Club[]);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        {equipos.map((club) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={club.nombreClub}>
            <Card sx={{ borderRadius: 4, height: '100%' }} elevation={3}>
              {club.img ? <CardMedia component="img" height="160" image={club.img} alt={club.nombreClub} /> : null}
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                    <TeamOutlined /> {club.nombreClub}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={1}>
                    <UserOutlined /> Líder: <strong>{club.lider}</strong>
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

export default EquiposAtletismo;
