import React from 'react';
import Sorter from "./../components/Sorter";
import MainHeader from "./../components/MainHeader";
import Main from "./../components/Main";
import coonbase from "./../db/coonbase.json";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme} from "../components/theme";
import Navbar from '../components/Navbar';

const Years = () => {

    const movies = coonbase.table
    const postersPath = "./posters/"
    const imdbPath = "https://www.imdb.com/title/tt"
    const metaPath = "https://www.metacritic.com/movie/"
    const rtPath = "https://www.rottentomatoes.com/m/"
    const torrPath = "./torrents/"
    const subPath = "./subs/"
    const netflixPath = "https://www.netflix.com/title/"
    const kpPath = "https://hd.kinopoisk.ru/film/"
    const okkoPath = "https://okko.tv/movie/"
    const iviPath = "https://www.ivi.ru/watch/"
    const applePath = "https://tv.apple.com/ru/movie/"

    return (
        <ThemeProvider className="themeProvider" theme={theme}>
            <CssBaseline >
                <Navbar />
                <Sorter />
                <MainHeader />
                {movies.map(movie => (
                    <Main 
                poster={postersPath + movie.poster + ".jpg"} title={movie.imdbTitle} director={movie.imdbDirector} genre={movie.imdbGenre}
                imdbLink={imdbPath + movie.imdbId} metaLink={metaPath + movie.metaId} rtLink={rtPath + movie.rtId}
                imdbRate={movie.imdbScore} metaRate={movie.metaScore} rtRate={movie.rtScore}
                imdbVotes={movie.imdbVotesText} metaVotes={movie.metaVotes} rtVotes={movie.rtVotes}
                netflixLink={netflixPath + movie.streamNetflix} isNetflix={movie.streamNetflix}
                kpLink={kpPath + movie.streamKp} isKp={movie.streamKp} okkoLink={okkoPath + movie.streamOkko} isOkko={movie.streamOkko} 
                iviLink={iviPath + movie.streamIvi} isIvi={movie.streamIvi} appleLink={applePath + movie.streamApple} isApple={movie.streamApple}
                isStream={movie.stream}
                torrLink={torrPath + movie.year + "/" + movie.torrent} isTorr={movie.torrent} subLink={subPath + movie.year + "/" + movie.subs} isSub={movie.subs}
                    />
                ))}
            </CssBaseline>
        </ThemeProvider>
    )
    
}

export default Years;
