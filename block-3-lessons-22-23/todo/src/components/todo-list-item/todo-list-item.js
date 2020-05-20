
// Именной импорт Component для чистаты кодачтобы не писать React.Component
import React, { Component } from 'react';

import './todo-list-item.scss';

export default class TodoListItem extends Component {

    // для того чтобы неиспользовать bind и
    // каждый раз не создавать обертку вызываемой
    // при клике функции необходимо вызвать конструктор обьекта
    // Та как конструктор обьекта не может существовать без вызова super() вызываем его
    // после обьявляем функцию как стрелку потому что this в ней будет указывать в нужно нам место
    //

    // Method 1
    // constructor() {
    //     super();
    //     this.onLAbelClick = () => {
    //         console.log(`Done: ${this.props.label}`);
    //     }
    // }


    state = {
        done: false,
        important: false
    };


    // Method 2
    // данный пропоузел еще не являеться частью стандарта js
    onLAbelClick = () => {
      this.setState(({done})=> {
          return {
              done: !done
          }
      })
    };

    onMarkImportant = () => {
        this.setState(({important})=> {
          return {
              important: !important
          }
        });
    };


    render() {
        //теперь принимает значения props через this и следующй строкой деструктурируем значния props к this props
        const {label} = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';

        if(done) {
            classNames += ' done';
        }

        if(important){
            classNames += ' important';
        }

        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={ this.onLAbelClick }>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right" onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right" onClick={this.props.onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
    </span>
        );
    }
}

