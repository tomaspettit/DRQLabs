// content.js

//Function Content => "Hello World", DateTime
const Content = ()=>{
    return(
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

//Export to App.js
export default Content;