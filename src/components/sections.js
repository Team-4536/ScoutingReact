import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import ConfigContext from '../config.js';

export default function Sections() {
    const config = React.useContext(ConfigContext);
    console.log(config);

    return (
        <Grid container spacing={2} sx={{ py: 1 }}>
            { config.sections.map((s) =>
                <Grid key={s.name} xs={12} sm={6} lg={3}>
                    <Box sx={{ height: '200px' }}>
                        <Typography sx={{ 'color': 'white', background: 'blue'}}
                                    align={'center'}>{s.name}</Typography>
                        { s.fields.map((f) => {
                            switch (f.type) {
                            case "text":
                                return <div>a text field {f.title}</div>
                            case "number":
                                return <div>a number field {f.title}</div>
                            case "boolean":
                                return <div>a boolean field {f.title}</div>
                            case "select":
                                let entries = Object.entries(f.choices);
                                return (
                                    <>
                                    <InputLabel id="demo-simple-select-label">{f.title}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label={entries[0][1]}
                                        value={entries[0][0]}
                                    >
                                        {
                                            Object.entries(f.choices).map(
                                                (kv) => (<MenuItem value={kv[0]}>{kv[1]}</MenuItem>)
                                            )
                                        }
                                    </Select>
                                    </>
                                )
                            default:
                                return <div>a {f.type} field {f.title}</div>
                            }
                        })
                        }
                    </Box>
                </Grid>) }
        </Grid>
    )
}
