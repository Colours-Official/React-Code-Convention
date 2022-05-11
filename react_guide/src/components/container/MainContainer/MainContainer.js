import React from "react";
import {ButtonExampleOne,ButtonExampleTwo} from 'components/element';
import styles from 'components/container/MainContainer/style.module.scss'
import useListState from 'hooks/useListState';

function MainContainer() {

  const list = useListState();

  const onClickItem = () => { }

  return (
    <div className={styles.MainContainer}>
      <div className={styles.ButtonsWrapper}>
        {
          list.map((value,index) => { 
            return (
              <ButtonExampleTwo
                key={`button_list_${index}`}
                onClick={onClickItem}
                size={value.size}
                color={value.color}
                fullWidth={value.fullWidth}
              >
                {value.title}
              </ButtonExampleTwo>
            )
          })
        }
        <ButtonExampleOne size="large">BUTTON</ButtonExampleOne>
        <ButtonExampleOne size="large">BUTTON</ButtonExampleOne>
      </div>
    </div>
  );
}

export default MainContainer;
