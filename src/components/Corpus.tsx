import * as React from 'react';
import { Link } from 'react-router-dom'
import { get_resource_data } from './Resources';

interface ICorpusProps {
    id: number
}

const Corpus: React.FunctionComponent<ICorpusProps> = (props) => {
    const data = get_resource_data()

    const corpus = data.corpuses.find(c => c.id === props.id)

    const authors = data.authors.filter(a => a.corpus === props.id)
    const places = data.places.filter(a => a.corpus === props.id)
    const audio = data.audios.filter(a => a.corpus === props.id)
    const video = data.videos.filter(a => a.corpus === props.id)
    const images = data.images.filter(a => a.corpus === props.id)


    return <>
        <div className='corpus-block'  >
            <img src={'http://ml.vtargete.ru:14292/images/image_s189290039.jpg'} ></img>
            <Link to={`/corpus/${corpus.id}`}>{corpus.title}</Link>
            <div className='corpus-block-meta'>
                <label>Авторы: </label><p>{authors.length}</p>
                <label>Места: </label><p>{places.length}</p>
                <label>Аудио: </label><p>{audio.length}</p>
                <label>Видео: </label><p>{video.length}</p>
                <label>Изображения: </label><p>{images.length}</p>
            </div>
        </div>
    </>;
};

export default Corpus;
