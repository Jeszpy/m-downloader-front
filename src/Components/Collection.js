import {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import FileDownload from "js-file-download";

const CardItem = ({id, title, cdn, img}) => {

    function downloadSong(url, title) {
        axios({
            url: url,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            FileDownload(response.data, `${title}.aac`);
        })
    }

    // function deleteSong(id){
    // }

    return (
        <Card sx={{maxWidth: 345,}}>
            <CardMedia
                component="img"
                alt="image"
                height="140"
                image={img}
            />
            <CardContent style={{background: '#f7f5f2'}}>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions style={{display: 'flex', justifyContent: 'right', alignSelf: "right", alignItems:'right', alignContent: 'right', background: '#f7f5f2'}}>
                {/*<Button size="medium" style={{alignSelf: 'right'}}*/}
                {/*        onClick={() => deleteSong(id)}>Удалить из коллекции</Button>*/}
                <Button size="large" style={{color: '#ff8000', fontWeight: '600'}}
                        onClick={() => downloadSong(cdn, title)}>Скачать</Button>
            </CardActions>
        </Card>
    )
}

const Collection = () => {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        const axiosSongList = async () => {
            const response = await axios.get('https://m-downloader-back.herokuapp.com/api/collection/')
            return response.data
        }
        axiosSongList().then((data) => {
            setCollection(data)
        })
    }, [])

    return <div style={{display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', margin: '50px', paddingBottom: '50px'}}>
        {collection.map(el => <CardItem key={el.id} id={el.id} title={el.title} cdn={el.cdn} img={el.img}/>)}
    </div>

}

export default Collection