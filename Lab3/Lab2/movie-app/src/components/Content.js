//Content Compenent displays hello world! and date
const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

//export to App.js
export default Content;
