let React = require("react");
let ReactDOM = require("react-dom");
let redux = require("redux");
let Provider = require("react-redux").Provider;
let reducer = require("./reducer.jsx");
let AppView = require("./appview.jsx");

let store = redux.createStore(reducer);// создание хранилища, В метод redux.createStore() следует передать функцию reducer, которая используется для обновления хранилища.
//метод store.dispatch() здесь выполняется действие с типом "SET_STATE", которое устанавливает начальные данные для состояния хранилища.
store.dispatch({
    type: "SET_STATE",
    state: {
        phones: ["iPhone 7", "Samsung Galaxy", "Huawei"]
    }
});
//Чтобы связать хранилище и компонент, применяется провайдер - класс Provider из пакета "react-redux". У провайдера устанавливается объект хранилища через свойство store: <Provider store={store}>. Поэтому именно это хранилище и будет использоваться для поставки данных в AppView через выше рассмотренную функцию connect
ReactDOM.render(
    <Provider store={store}>
        <AppView />
    </Provider>,
    document.getElementById("container")
);
