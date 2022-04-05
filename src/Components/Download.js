import {Button, Box, TextField} from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {useState} from "react";
import axios from "axios";
import FileDownload from 'js-file-download'
import ReactLoading from 'react-loading';
import {Ellipsis } from 'react-spinners-css'


const Loader = ({type, color}) => (
    <ReactLoading type={type} color={color} height={'5%'} width={'5%'}/>
);

const Download = () => {
    const [url, setUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function fetchSong() {
        setIsLoading(true)
        const data = {
            url: url
        }
        axios.post('https://m-downloader-back.herokuapp.com/api/download/', data)
            .then((res) => axios({
                url: res.data.cdn,
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                setIsLoading(false)
                FileDownload(response.data, `${res.data.title}.aac`);
            }))
    }

    return (isLoading ? <Ellipsis color={'#ff8000'} size={200} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginTop: '270px',
                flexDirection: 'row',
                marginLeft: '850px'
            }}/>	 :
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginTop: '330px'
            }}>
                <TextField value={url} id="outlined-basic" label="Ссылка на страницу с аудиотреком" variant="outlined"
                           style={{width: '25%'}} onChange={(e) => setUrl(e.target.value)}/>
                <Button onClick={fetchSong}><FileDownloadIcon
                    style={{height: '50px', width: '50px', color: '#ff8000'}}/></Button>
            </Box>
    );
};

export default Download