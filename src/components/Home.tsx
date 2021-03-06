import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store';
import { data } from '../utils'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Corpus from './Corpus';



interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {


    return <>
        <div className='home'>
            <div className='home-left'>
                <p>О проекте</p>
                <Link to='/resources/1'>Корпуса</Link>
                <Link to='/resources/2'>Тексты</Link>
                <Link to='/resources/3'>Аудиозаписи</Link>
                <Link to='/resources/6'>Нотировки</Link>
                <Link to='/resources/4'>Видеозаписи</Link>
            </div>
            <div className='home-right'>
                <Corpus id={1} />
            </div>
        </div>
        {/* 
        <div className='home-info'>
            <p>Электронный портал «Фольклор народов Сибири» - фундаментальный постоянно действующий проект, работа по которому ведется коллективом сотрудников двух институтов Сибирского отделения Российской академии наук: Института филологии (ИФЛ СО РАН), и Института систем информатики имени А.П. Ершова (ссылка).</p>
            <p>Разработка портала проведена при финансовой поддержке Российского гуманитарного научного фонда (2014-2016 гг., проект №14-04-12010 Электронный ресурс «Фольклор народов Сибири»: текстовое, семантическое и мультимедийное представление»).</p>
            <p>С 2019 года идет формирование новых подкорпусов портала, пополнение его новыми фольклоными материалами. Работы ведутся в рамках выполнения проекта Института филологии СО РАН «Культурные универсалии вербальных традиций народов Сибири и Дальнего Востока: фольклор, литература, язык» по гранту Правительства РФ для государственной поддержки научных исследований, проводимых под руководством ведущих ученых (соглашение № 075-15-2019-1884).</p>
            <p>Для просмотра фольклорных текстов нажмите БИБЛИОТЕКА РЕСУРСОВ.</p>
        </div> */}

    </>
}

export default Home;
