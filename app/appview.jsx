// let React = require("react");
// let connect = require("react-redux").connect;
// let actions = require("./actions.jsx");
//
// class PhoneForm extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     onClick(){
//         if(this.refs.phoneInput.value !== ""){
//             let itemText = this.refs.phoneInput.value;
//             this.refs.phoneInput.value ="";
//             return this.props.addPhone(itemText);
//         }
//     }
//     render(){
//         return <div>
//             <input ref="phoneInput" /> //React поддерживает специальный атрибут, который может быть присвоен любому компоненту. Атрибут ref принимает функцию обратного вызова, и вызывает ее после того, как компонент монтируется в DOM или удаляется из него.Когда атрибут ref используется в элементе HTML, функция обратного вызова принимает базовый элемент DOM в качестве аргумента.
//             <button onClick={this.onClick.bind(this)}>Add</button>
//         </div>
//     }
// }
// class PhoneItem extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return <div>
//             <p>
//                 <b>{this.props.text}</b><br />
//                     <button onClick={()=> this.props.deletePhone(this.props.text)} >Delete</button>
//             </p>
//         </div>
//     }
// }
// class PhonesList extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return <div>
//             {this.props.phones.map(item =>
//             <PhoneItem key={item}
//                         text={item}
//                         deletePhone={this.props.deletePhone} />
//             )}
//         </div>
//     }
// }
// class AppView extends React.Component {
//     render(){
//         return <div>
//             <PhoneForm addPhone={this.props.addPhone} />
//             <PhonesList {...this.props} />
//         </div>
//     }
// }
// function mapStateToProps(state) { //функция позволяет установить сопоставление между объектами из состояния хранилища с объектам в props у компонента AppView. В данном случае мы просто устанавливаем, что значение this.props.phones в компоненте AppView будет передавать значение из объекта phones из хранилища:
//     return {
//         phones: state.get("phones")
//     };
// }
// module.exports = connect(mapStateToProps, actions)(AppView); //Функция connect позволяет связать хранилище и компонент. Благодаря этому все данные из хранилища будут передавать в компонент через объект props.
// //Второй параметр в функции connect представляет набор действий, которые вызываются в компоненте AppView или в его дочерних компонентах. И опять же эти действия после этого мы сможем получить в компоненте AppView через значения this.props.addPhone и this.props.deletePhone. Действие this.props.addPhone передается в компонент PhoneForm и в нем уже вызывается по клику на кнопку. А действие this.props.deletePhone передается в компонент PhonesList, а через него далее в PhoneItem и там также вызывается по нажатию на кнопку "Удалить".
var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions.jsx");

class PhoneForm extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        if (this.refs.phoneInput.value !== "") {
            var itemText = this.refs.phoneInput.value;
            this.refs.phoneInput.value ="";
            return this.props.addPhone(itemText);
        }
    }
    render() {
        return <div>
            <input ref="phoneInput" />
            <button onClick = {this.onClick.bind(this)}>Добавить</button>
        </div>
    }
};

class PhoneItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return <div>
            <p>
                <b>{this.props.text}</b><br />
                <button onClick={() => this.props.deletePhone(this.props.text)}>Удалить</button>
            </p>
        </div>
    }
};

class PhonesList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.phones.map(item =>
                <PhoneItem key={item}
                           text={item}
                           deletePhone={this.props.deletePhone}/>
            )}
        </div>
    }
};

class AppView extends React.Component {

    render() {
        return <div>
            <PhoneForm addPhone={this.props.addPhone}/>
            <PhonesList {...this.props} />
        </div>
    }
};

function mapStateToProps(state) {
    return {
        phones: state.get("phones")
    };
}

module.exports = connect(mapStateToProps, actions)(AppView);
