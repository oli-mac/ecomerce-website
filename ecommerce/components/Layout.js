import { Box, AppBar, Container, CssBaseline, Link, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";
import NextLink from 'next/link';
import classes from "../utils/classes";

export default function Layout(title, description, Children ){

    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            mode: 'light',
            primary: {
                main: '#0EF24C',
            },
            secondary: {
                main: '#208080',
            },
        },
    });
    return (
        <>
            <Head>
                <title>{title ? `${title} - Teacup` : 'Teacup'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" sx={classes.appbar}>
                    <Toolbar sx={classes.toolbar}>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography sx={classes.brand}>Teacup</Typography>
                            </Link>
                        </NextLink>
                    </Toolbar>
                </AppBar>
                <Container component="main" sx={classes.main}>
                    {Children}
                </Container>
                <Box component="footer" sx={classes.footer}>
                    <Typography>All rights reserved. olyad mulugeta</Typography>
                </Box>
            </ThemeProvider>
        </>
    );
}