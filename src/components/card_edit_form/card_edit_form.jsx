import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../imageFileInput/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({card, updateCard, deleteCard}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();

    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL,
      } = card;

    const onChange = event => {
        if(event.currentTarget == null){
            return;
        }

        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    const onSubmit = event => {
        
    }

    return(
        <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          ref={nameRef}
          value={name}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="text"
          name="company"
          ref={companyRef}
          value={company}
          onChange={onChange}
        />
        <select
          className={styles.select}
          name="theme"
          ref={themeRef}
          value={theme}
          onChange={onChange}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          name="title"
          ref={titleRef}
          value={title}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          ref={emailRef}
          value={email}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          ref={messageRef}
          name="message"
          value={message}
          onChange={onChange}
        />
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </form>
    );
};

export default CardEditForm;