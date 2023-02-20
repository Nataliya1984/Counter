import React, {useState} from 'react';
import style from './Quiz.module.css'

type VariantsType = string

type QuestionType = {
    correct: number
    title: string
    variants: VariantsType[]
}


const questions = [
    //в компоненте выбираем один из ответов. Этот объект по индексу 0
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

type ResultPropsType = {
    correct: number
}

function Result({correct}: ResultPropsType) {

    //при нажатии поробовать снова, игра начинается с самого начала, для этого делаем перезагрузку страницы

    return (
        <div className={style.result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            {/*подставляем колличество правильных результатов*/}
            <h2>Вы отгадали {correct} ответа из {questions.length} </h2>
            <a href="/">
                <button >Попробовать снова</button>
            </a>
        </div>
    );
}

type GamePropsType = {
    question: QuestionType
    onClickVariant: (index: number) => void
    step: number
}

function Game({question, onClickVariant, step}: GamePropsType) {
    //вытаскиваем question и рендерим в этой компоненте
    // для того, чьо бы увеличивался прогресс, создаем константу и указываем, что нам нужно шаг разделить на колличество вопросов и умножить на 100
    // const percentage =step /questions.length *100
//все это вычисление мы округляем с помощью math.round
    const percentage = Math.round((step / questions.length * 100))
    //console.log(percentage)


    return (
        <>
            <div className={style.progress}>
                {/*отображаем прогресс*/}
                <div style={{width: `${percentage}%`}} className={style.progress__inner}></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => {
                    const onClickVariantHandler = () => {
                        onClickVariant(index)
                    }
                    return (
                        <li key={text} onClick={onClickVariantHandler}>{text}</li>
                    )
                })}
            </ul>
        </>
    );
}

export const Quiz = () => {

    //useState будет хранить в себе шаг (индекс нашего вопроса), тоесть мы будем обЪяснять на каком мы шагу находимся
    const [step, setStep] = useState<number>(0)
    //для результата правильных ответов создаем состояние
    const [correct, setCorrect] = useState<number>(0)
    // нам необходимо с помощью stepa выбрать один из ответов (question)
    //для этого создаем переменную и из массива questions по индексу step берем наш вопрос
    const question = questions[step]
    // console.log(question) //получаем  title: 'React - это ... ?',variants: ['библиотека', 'фреймворк', 'приложение'],correct: 0,
    //теперь этот вопрос мы можем передать внутрь game

    //после отображения в game и выбора ответа, мы должны переходить к следующему вопросу. Для этого создаем функцию, которая будет понимать, что произошел клик на одну из кнопок
    //эта функция будет получать один из вариантов
    const onClickVariant = (index: number) => {
        //укажем в console.log, что у нас на какой-то вопрос(шаг) был выбран какой-то вариант
        //передаем эту функцию в компаненту game
        console.log(step, index)
        setStep(step + 1)
        //проверяем, что выбрали правильный вариант, делаем проверку
        // если вариант совпадает с вариантом вконкретном вопросе, то берем setCorrect и прибавляем к нему correct + 1, этим мы говорим, что был выбран правильный вариант
        if (index === question.correct) {
            setCorrect(correct + 1)
        }

    }


    return (
        <div>
            {/*отображаем результат, если шаг не равен колличеству вопросов в этом случае показываем игру, иначе результат*/}
            {
                step !== questions.length
                    ?
                    <Game step={step} question={question} onClickVariant={onClickVariant}/>
                    :
                    //передаем в result колмчество правильных вариантов
                    <Result correct={correct} />
            }

        </div>
    );
};
