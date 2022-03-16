import react, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from "./maker.module.css";
import Header from "../header/header";
import Card from '../card/card';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ( {authService, cardRepository} ) => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state;
    const [userId, setUserId] = useState( locationState && locationState.id )
    const [cards, setCards] = useState({
        1: {
            id: '1',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
          },
          2: {
            id: '2',
            name: 'Ellie2',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: 'ellie.png',
          },
          3: {
            id: '3',
            name: 'Ellie3',
            company: 'Samsung',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: 'go for it',
            fileName: 'ellie',
            fileURL: null,
          },
    })

    const onLogout = () => {
        authService.logout();
    };
    useEffect( () => {
      cardRepository.syncCards();
      // console.log( locationState.id )
      cardRepository.test( locationState.id );
      // console.log(authService.currentUser.uid)

        console.log(userId);
        if(!userId){
            navigate("/")
            return;
        }
       
    })

    const createOrUpdateCard = card => {
        setCards( cards =>{
          const updated = { ...cards }
          updated[card.id] = card;
          return updated;
        });
    } 

    const deleteCard = card => {
      setCards(card => {
        const updated = {...cards};
        delete updated[card.id];
        return updated;
      })
    }
//     useEffect( () => {
//         authService.onAuthChange(user => {
//             if(user){
//                 setUserId(user.uid);
//             }else{
//                 navigate("/")
//             }
//     }); 
// } , [authService , userId, location]);

    return(
        <setction className={styles.maker}>
          <Header onLogout={onLogout}/>      
            <div className={styles.container}>
              <Editor
              cards={cards}
              addCard={createOrUpdateCard}
              updateCard={createOrUpdateCard}
              deleteCard={deleteCard}
            />
            <Preview cards={cards} />
            </div>       
        </setction>
    )
}

export default Maker;
