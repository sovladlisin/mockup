import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import Corpus from './Corpus';
import { get_resource_data, resource_data } from './Resources';


interface IMetaGallery {
    type: number,
    corpus_id: number
}

const MetaGallery: React.FunctionComponent<IMetaGallery> = (props) => {
    var data = get_resource_data()
    var data_ = []
    switch (props.type) {
        case 1:
            data_ = data.genres.filter(g => g.corpus === props.corpus_id)
            break;
        case 2:
            data_ = data.places.filter(g => g.corpus === props.corpus_id)
            break;

        case 3:
            data_ = data.times.filter(g => g.corpus === props.corpus_id)
            break;

        case 4:
            data_ = data.performers.filter(g => g.corpus === props.corpus_id)
            break;

        case 5:
            data_ = data.authors.filter(g => g.corpus === props.corpus_id)
            break;


        default:
            break;
    }

    return <>
        <div className='corpus-item-gallery'>
            {data_.map(a => {
                return <p onClick={_ => alert('Откроется окно с данными как в предыдущей версии')} className='resources-selected-menu-left-item-title'>{a.title}</p>
            })}
        </div>
    </>
}


interface ICorpusPageProps {
    corpus: number
}

const CorpusPage: React.FunctionComponent<ICorpusPageProps> = ({ match }: RouteComponentProps<ICorpusPageProps>) => {
    const corpus_id: number = parseFloat(match.params.corpus)
    const data = get_resource_data()

    const corpus = data.corpuses.find(c => c.id === corpus_id)

    const authors = data.authors.find(a => a.corpus === corpus.id)
    const places = data.places.find(a => a.corpus === corpus.id)
    const audio = data.audios.find(a => a.corpus === corpus.id)
    const video = data.videos.find(a => a.corpus === corpus.id)
    const images = data.images.find(a => a.corpus === corpus.id)


    const [selectedMenu, setSelectedMenu] = React.useState(1)
    const [selectedMeta, setSelectedMeta] = React.useState(-1)
    const selectedMenuItemStyle = { background: 'white', color: '#1c2b4a' }

    const renderData = (type, corpus_id) => {
        var data = []
        switch (type) {
            case 1:
                data = get_resource_data().texts.filter(t => t.corpus === corpus_id)
                break;
            case 2:
                data = get_resource_data().audios.filter(t => t.corpus === corpus_id)
                break;
            case 3:
                data = get_resource_data().videos.filter(t => t.corpus === corpus_id)
                break;
            case 4:
                data = get_resource_data().images.filter(t => t.corpus === corpus_id)
                break;

            default:
                break;
        }
        return <div className='corpus-page-corpus-resources'>
            {data.map(a => {
                return <p onClick={_ => alert('Откроется окно с данными как в предыдущей версии')} className='resources-selected-menu-left-item-title'>{a.title}</p>
            })}
            <button id='add-resource'>Загрузить файл</button>
        </div>
    }

    return <>
        <div className='corpus-page-container'>
            <div className='corpus-page-left'>
                <div className='corpus-page-logo'>
                    <Corpus id={corpus.id}></Corpus>
                </div>
                <div className='corpus-page-meta'>
                    {selectedMeta != -1 ? <>
                        <div className='corpus-page-meta-container'>
                            <button onClick={_ => setSelectedMeta(-1)}><i className='fas fa-arrow-left'></i></button>
                            <MetaGallery type={selectedMeta} corpus_id={corpus.id}></MetaGallery>
                        </div>
                    </> :
                        <>
                            <button onClick={_ => setSelectedMeta(1)} >Жанры</button>
                            <button onClick={_ => setSelectedMeta(2)} >Места записи</button>
                            <button onClick={_ => setSelectedMeta(3)} >Время записи</button>
                            <button onClick={_ => setSelectedMeta(4)} >Исполнители</button>
                            <button onClick={_ => setSelectedMeta(5)} >Авторы</button>
                        </>}

                </div>
            </div>
            <div className='corpus-page-right'>
                <div className='corpus-page-right-left'>
                    <button onClick={_ => setSelectedMenu(1)} style={selectedMenu === 1 ? selectedMenuItemStyle : {}} >Тексты</button>
                    <button onClick={_ => setSelectedMenu(2)} style={selectedMenu === 2 ? selectedMenuItemStyle : {}} >Аудио</button>
                    <button onClick={_ => setSelectedMenu(3)} style={selectedMenu === 3 ? selectedMenuItemStyle : {}} >Видео</button>
                    <button onClick={_ => setSelectedMenu(4)} style={selectedMenu === 4 ? selectedMenuItemStyle : {}} >Фото</button>
                </div>
                <div className='corpus-page-right-right'>
                    {selectedMenu === 1 && renderData(1, corpus.id)}
                    {selectedMenu === 2 && renderData(2, corpus.id)}
                    {selectedMenu === 3 && renderData(3, corpus.id)}
                    {selectedMenu === 4 && renderData(4, corpus.id)}
                </div>
            </div>
        </div>
    </>
};

export default CorpusPage;


