import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Corpus from './Corpus';
import { RouteComponentProps } from 'react-router-dom'


export type TCorpus = {
    title: string,

}

export const resource_data = {
    corpuses: [
        { id: 1, title: 'Шорский корпус текстов', },
        { id: 2, title: 'Алтайский корпус текстов', },
        { id: 3, title: 'Алтайский3 корпус текстов', },
        { id: 4, title: 'Алтайский4 корпус текстов', },
        { id: 5, title: 'Алтайский5 корпус текстов', },
    ]
}
export const get_resource_data = () => {
    var data = { corpuses: [], videos: [], audios: [], images: [], places: [], times: [], genres: [], authors: [], performers: [], texts: [] }
    for (let index = 1; index < 20; index++) {
        data.corpuses.push({ id: index, title: 'Шорский корпус текстов' + index })

        data.videos.push({ id: index, title: 'Видео' + index, corpus: index })
        data.videos.push({ id: index + 30, title: 'Видео' + index + 30, corpus: index })

        data.audios.push({ id: index, title: 'Аудио' + index, corpus: index })
        data.audios.push({ id: index + 30, title: 'Аудио' + index + 30, corpus: index })

        data.images.push({ id: index, title: 'Изображение' + index, corpus: index })
        data.images.push({ id: index + 30, title: 'Изображение' + index + 30, corpus: index })

        data.places.push({ id: index, title: 'Место' + index, corpus: index })
        data.places.push({ id: index + 30, title: 'Место' + index + 30, corpus: index })

        data.times.push({ id: index, title: '11.11.201' + index, corpus: index })
        data.times.push({ id: index + 30, title: '11.11.201' + index + 30, corpus: index })

        data.genres.push({ id: index, title: 'Жанр' + index, corpus: index })
        data.genres.push({ id: index + 30, title: 'Жанр' + index + 30, corpus: index })

        data.authors.push({ id: index, title: 'Человек' + index, corpus: index })
        data.authors.push({ id: index + 30, title: 'Человек' + index + 30, corpus: index })

        data.performers.push({ id: index, title: 'Исполнитель' + index, corpus: index })
        data.performers.push({ id: index + 30, title: 'Исполнитель' + index + 30, corpus: index })

        data.texts.push({ id: index, title: 'Текст' + index, corpus: index })
        data.texts.push({ id: index + 30, title: 'Текст' + index + 30, corpus: index })
    }
    return data
}



const CorpusList: React.FunctionComponent = () => {

    get_resource_data()
    const data = get_resource_data().corpuses

    const selectedMenuItemStyle = { background: 'white', color: '#1c2b4a' }

    return <>
        <div className='corpus-list'>
            {data.map(c => {
                return <Link to={`corpus/${c.id}`}><button>{c.title}</button></Link>
            })}
        </div>
    </>
}

const CorpusGallery: React.FunctionComponent = () => {
    const data = get_resource_data().corpuses

    return <>
        <div className='corpus-gallery'>
            {data.map(c => {
                return <Corpus id={c.id}></Corpus>
            })}
        </div>
    </>
}

const AudioGallery: React.FunctionComponent = () => {
    const data = get_resource_data().corpuses
    const data_a = get_resource_data().audios


    return <>
        <div className='resource-item-gallery'>
            <p className='resources-selected-menu-left-title'>Аудио</p>
            <div className='resource-item-gallery-items'>
                {data.map(c => {
                    return <>
                        <p className='resources-selected-menu-left-corpus-title'>{c.title}</p>
                        {data_a.filter(a => a.corpus === c.id).map(a => {
                            return <p onClick={_ => alert('Откроется окно с данными как в предыдущей версии')} className='resources-selected-menu-left-item-title'>{a.title}</p>
                        })}
                    </>
                })}
            </div>

        </div>
    </>
}

const VideoGallery: React.FunctionComponent = () => {
    const data = get_resource_data().corpuses
    const data_a = get_resource_data().videos


    return <>
        <div className='resource-item-gallery'>
            <p className='resources-selected-menu-left-title'>Видео</p>
            <div className='resource-item-gallery-items'>
                {data.map(c => {
                    return <>
                        <p className='resources-selected-menu-left-corpus-title'>{c.title}</p>
                        {data_a.filter(a => a.corpus === c.id).map(a => {
                            return <p onClick={_ => alert('Откроется окно с данными как в предыдущей версии')} className='resources-selected-menu-left-item-title'>{a.title}</p>
                        })}
                    </>
                })}
            </div>
        </div>
    </>
}

const PhotoGallery: React.FunctionComponent = () => {
    const data = get_resource_data().corpuses
    const data_a = get_resource_data().images


    return <>
        <div className='resource-item-gallery'>
            <p className='resources-selected-menu-left-title'>Изображения</p>
            <div className='resource-item-gallery-items'>
                {data.map(c => {
                    return <>
                        <p className='resources-selected-menu-left-corpus-title'>{c.title}</p>
                        {data_a.filter(a => a.corpus === c.id).map(a => {
                            return <p onClick={_ => alert('Откроется окно с данными как в предыдущей версии')} className='resources-selected-menu-left-item-title'>{a.title}</p>
                        })}
                    </>
                })}
            </div>
        </div>
    </>
}

interface IResourcesProps {
    selected: number
}
const Resources: React.FunctionComponent<IResourcesProps> = ({ match }: RouteComponentProps<IResourcesProps>) => {
    const selectedProp: number = parseFloat(match.params.selected)

    const [selectedMenu, setSelectedMenu] = React.useState(selectedProp)
    const selectedMenuItemStyle = { background: 'white', color: '#1c2b4a' }



    return <>
        <div className='resource-container'>
            <div className='resources-left'>
                <button onClick={_ => setSelectedMenu(1)} style={selectedMenu === 1 ? selectedMenuItemStyle : {}}>Языковые корпуса</button>
                {selectedMenu === 1 && <CorpusList />}
                <button onClick={_ => setSelectedMenu(2)} style={selectedMenu === 2 ? selectedMenuItemStyle : {}}>Аудио</button>
                <button onClick={_ => setSelectedMenu(3)} style={selectedMenu === 3 ? selectedMenuItemStyle : {}}>Видео</button>
                <button onClick={_ => setSelectedMenu(4)} style={selectedMenu === 4 ? selectedMenuItemStyle : {}}>Фото</button>
                {/* <button onClick={_ => setSelectedMenu(6)} style={selectedMenu === 5 ? selectedMenuItemStyle : {}}>Нотировки</button>
                <button onClick={_ => setSelectedMenu(7)} style={selectedMenu === 6 ? selectedMenuItemStyle : {}}>Глоссы</button> */}
            </div>
            <div className='resources-right'>
                {selectedMenu === 1 && <CorpusGallery />}
                {selectedMenu === 2 && <AudioGallery />}
                {selectedMenu === 3 && <VideoGallery />}
                {selectedMenu === 4 && <PhotoGallery />}
            </div>
        </div>

    </>;
};

export default Resources;
