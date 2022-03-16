import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";


class CardRepository{

    constructor(app){
        this.db = app;
    }

    async syncCards(){
        const query = await getDocs(collection(this.db, "card") );
        
        query.forEach( (doc) => {
            console.log(doc.id);
            console.log(doc.data() );
        })

        // this.db.collection("card").get().then( (card) => {
        //         console.log(card);
        // })
        // const query = await getDocs(collection(this.db, "card") );
        // console.log(query);
        // const query = this.db.collection("card")
        // .get()
        // .then( (cards) => {
        //     console.log(cards);
        // })
    }

     test(user_uid) {
        
        const ref = doc(this.db, "card", user_uid )
        setDoc(
            ref,
            { test : "test1"}
        )
        console.log(ref)
        console.log(user_uid)
    }
}

export default CardRepository;