import { Box, AppBar, Container, CssBaseline, Link, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";
import NextLink from 'next/link';

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
                main: '#0EC540',
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
                <AppBar position="static">
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography>Teacup</Typography>
                            </Link>
                        </NextLink>
                    </Toolbar>
                </AppBar>
                <Container component="main">
                    {Children}
                </Container>
                <Box component="footer">
                    <Typography>All rights reserved. olyad mulugeta</Typography>
                </Box>
            </ThemeProvider>
        </>
    );
}