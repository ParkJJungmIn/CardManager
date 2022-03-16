import React from 'react';
import Card from '../card/card';
import styles from "./preview.module.css"

const Preview = ({cards}) => (
    <section>
        <h1 className={styles.title}>Card Preview</h1>
        <ul>
            {Object.keys(cards).map( key => (
                <Card key={key} card={ cards[key] }></Card>
                ))}
        </ul>
    </section>
    
);

export default Preview;